import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, where } from 'firebase/firestore';
import imagekit from '@/lib/config/imagekit';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const coverImage = formData.get('coverImage') as File;
    const tags = JSON.parse(formData.get('tags') as string);
    const seo = JSON.parse(formData.get('seo') as string);
    const status = formData.get('status') as 'draft' | 'published' | 'trash' || 'draft';
    
    // Upload image to ImageKit
    const buffer = Buffer.from(await coverImage.arrayBuffer());
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: `${Date.now()}-${coverImage.name}`,
      folder: '/blog-images'
    });
    
    // Create slug from title
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // Save post to Firestore
    const docRef = await addDoc(collection(db, 'blogs'), {
      title,
      slug,
      content,
      excerpt: content.substring(0, 150) + '...',
      coverImage: uploadResponse.url,
      author: {
        name: 'Surya Basak',
        image: '/images/me4.jpeg'
      },
      tags,
      status,
      publishedAt: new Date(),
      updatedAt: new Date(),
      seo
    });
    
    return NextResponse.json({ id: docRef.id, success: true });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let blogQuery;
    if (status) {
      blogQuery = query(
        collection(db, 'blogs'),
        where('status', '==', status),
        orderBy('publishedAt', 'desc')
      );
    } else {
      // By default, only show published posts
      blogQuery = query(
        collection(db, 'blogs'),
        where('status', '==', 'published'),
        orderBy('publishedAt', 'desc')
      );
    }
    
    const snapshot = await getDocs(blogQuery);
    const blogs = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching blog posts' }, { status: 500 });
  }
}