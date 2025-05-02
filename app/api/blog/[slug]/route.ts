import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;

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

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const tags = JSON.parse(formData.get('tags') as string);
    const seo = JSON.parse(formData.get('seo') as string);
    
    const blogQuery = query(collection(db, 'blogs'), where('slug', '==', slug));
    const snapshot = await getDocs(blogQuery);
    
    if (snapshot.empty) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    const blogDoc = doc(db, 'blogs', snapshot.docs[0].id);
    await updateDoc(blogDoc, {
      title,
      content,
      excerpt: content.substring(0, 150) + '...',
      tags,
      updatedAt: new Date(),
      seo
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error updating blog post' }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params;
    const blogQuery = query(collection(db, 'blogs'), where('slug', '==', slug));
    const snapshot = await getDocs(blogQuery);
    
    if (snapshot.empty) {
      return NextResponse.json({ error: 'Blog post not found' }, { status: 404 });
    }
    
    await deleteDoc(doc(db, 'blogs', snapshot.docs[0].id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting blog post' }, { status: 500 });
  }
}