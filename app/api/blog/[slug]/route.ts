import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

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
    const data = blogDoc.data();
    const blogData = {
      id: blogDoc.id,
      ...data,
      publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
      updatedAt: data.updatedAt?.toDate?.()?.toISOString() || null
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