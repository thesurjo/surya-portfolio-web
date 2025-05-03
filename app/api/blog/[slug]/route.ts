import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import imagekit from '@/lib/config/imagekit';

export async function GET(request: Request, { params }: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;

    // Query Firestore for the blog post with matching slug
    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Get the first (and should be only) matching document
    const blogDoc = querySnapshot.docs[0];
    const blogData = {
      id: blogDoc.id,
      ...blogDoc.data()
    };

    return NextResponse.json(blogData);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request, { params }: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const contentType = request.headers.get('content-type');

    let updateData: any;

    if (contentType?.includes('multipart/form-data')) {
      const formData = await request.formData();
      const title = formData.get('title') as string;
      const content = formData.get('content') as string;
      const newCoverImage = formData.get('coverImage') as File;
      const tags = JSON.parse(formData.get('tags') as string);
      const seo = JSON.parse(formData.get('seo') as string);
      const status = formData.get('status') as 'draft' | 'published' | 'trash';
      const oldImageUrl = formData.get('oldImageUrl') as string;

      // Validate required fields
      if (!title || !content) {
        return NextResponse.json(
          { error: 'Title and content are required' },
          { status: 400 }
        );
      }

      updateData = {
        title,
        content,
        excerpt: content.substring(0, 150) + '...',
        tags,
        status,
        updatedAt: new Date(),
        seo
      };

      // If new image is uploaded
      if (newCoverImage && newCoverImage.size > 0) {
        try {
          // Upload new image
          const buffer = Buffer.from(await newCoverImage.arrayBuffer());
          const uploadResponse = await imagekit.upload({
            file: buffer,
            fileName: `${Date.now()}-${newCoverImage.name}`,
            folder: '/blog-images'
          });

          // Delete old image if exists
          if (oldImageUrl) {
            try {
              const fileId = oldImageUrl.split('/').pop()?.split('.')[0];
              if (fileId) {
                await imagekit.deleteFile(fileId);
              }
            } catch (deleteError) {
              console.error('Error deleting old image:', deleteError);
              // Continue with update even if delete fails
            }
          }

          updateData.coverImage = uploadResponse.url;
        } catch (uploadError) {
          console.error('Error uploading new image:', uploadError);
          return NextResponse.json(
            { error: 'Failed to upload new image' },
            { status: 500 }
          );
        }
      }

      const blogQuery = query(collection(db, 'blogs'), where('slug', '==', slug));
      const snapshot = await getDocs(blogQuery);

      if (snapshot.empty) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }

      const blogDoc = doc(db, 'blogs', snapshot.docs[0].id);
      await updateDoc(blogDoc, updateData);

      return NextResponse.json({ success: true });
    } else {
      // Handle JSON requests for status updates
      const jsonData = await request.json();
      updateData = {
        ...jsonData,
        updatedAt: new Date()
      };

      const blogQuery = query(collection(db, 'blogs'), where('slug', '==', slug));
      const snapshot = await getDocs(blogQuery);

      if (snapshot.empty) {
        return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
      }

      const blogDoc = doc(db, 'blogs', snapshot.docs[0].id);
      await updateDoc(blogDoc, updateData);

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ error: 'Error updating blog post' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const blogQuery = query(collection(db, 'blogs'), where('slug', '==', slug));
    const snapshot = await getDocs(blogQuery);

    if (snapshot.empty) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }

    const blogDoc = snapshot.docs[0];
    const blogData = blogDoc.data();

    // Only allow permanent deletion if the post is in trash
    if (blogData.status !== 'trash') {
      return NextResponse.json(
        { error: 'Only posts in trash can be permanently deleted' },
        { status: 400 }
      );
    }

    await deleteDoc(doc(db, 'blogs', blogDoc.id));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json({ error: 'Error deleting blog post' }, { status: 500 });
  }
}