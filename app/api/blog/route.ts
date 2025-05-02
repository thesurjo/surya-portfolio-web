import { NextResponse } from 'next/server';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const coverImage = formData.get('coverImage') as File;
    const tags = JSON.parse(formData.get('tags') as string);
    const seo = JSON.parse(formData.get('seo') as string);
    
    // Upload image to Firebase Storage
    const imageRef = ref(storage, `blog-images/${Date.now()}-${coverImage.name}`);
    await uploadBytes(imageRef, coverImage);
    const imageUrl = await getDownloadURL(imageRef);
    
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
      coverImage: imageUrl,
      author: {
        name: 'Surya Basak',
        image: '/images/me4.jpeg'
      },
      tags,
      publishedAt: new Date(),
      updatedAt: new Date(),
      seo
    });
    
    return NextResponse.json({ id: docRef.id, success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating blog post' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const blogQuery = query(collection(db, 'blogs'), orderBy('publishedAt', 'desc'));
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