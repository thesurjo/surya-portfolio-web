import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs, query, orderBy, where, limit } from 'firebase/firestore';
import imagekit from '@/lib/config/imagekit';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const content = formData.get('content') as string;
    const coverImage = formData.get('coverImage') as File;
    const tags = JSON.parse(formData.get('tags') as string || '[]');
    const seo = JSON.parse(formData.get('seo') as string || '{}');
    const status = formData.get('status') as 'draft' | 'published' | 'trash' || 'draft';

    // Validate required fields
    if (!title || !content || !coverImage) {
      return NextResponse.json(
        { error: 'Title, content, and cover image are required' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!coverImage.type.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Cover image must be an image file' },
        { status: 400 }
      );
    }

    try {
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

      // Check if slug already exists
      const slugCheck = query(collection(db, 'blogs'), where('slug', '==', slug));
      const slugSnapshot = await getDocs(slugCheck);
      if (!slugSnapshot.empty) {
        return NextResponse.json(
          { error: 'A post with this title already exists' },
          { status: 400 }
        );
      }

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
        seo: {
          title: seo.title || title,
          description: seo.description || content.substring(0, 150),
          keywords: seo.keywords || []
        }
      });

      return NextResponse.json({ id: docRef.id, success: true });
    } catch (uploadError) {
      console.error('Error during image upload or database operation:', uploadError);
      return NextResponse.json(
        { error: 'Failed to upload image or save blog post' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to process blog post data' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    console.log('Blog fetch request received with status:', status);
    
    // Verify Firebase initialization
    if (!db) {
      console.error('Firestore database instance is undefined');
      return NextResponse.json(
        { error: 'Database connection failed - db not initialized' }, 
        { 
          status: 500,
          headers: {
            'Cache-Control': 'no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        }
      );
    }

    try {
      // Test database connection
      const testRef = collection(db, 'blogs');
      await getDocs(query(testRef, limit(1)));
      console.log('Database connection test successful');
    } catch (connectionError) {
      console.error('Database connection test failed:', connectionError);
      return NextResponse.json(
        { error: 'Database connection test failed' }, 
        { 
          status: 500,
          headers: {
            'Cache-Control': 'no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        }
      );
    }
    
    let blogQuery;
    if (status === 'all') {
      blogQuery = query(
        collection(db, 'blogs'),
        orderBy('publishedAt', 'desc')
      );
    } else if (status) {
      blogQuery = query(
        collection(db, 'blogs'),
        where('status', '==', status),
        orderBy('publishedAt', 'desc')
      );
    } else {
      blogQuery = query(
        collection(db, 'blogs'),
        where('status', '==', 'published'),
        orderBy('publishedAt', 'desc')
      );
    }

    console.log('Executing query for status:', status || 'published');
    
    try {
      const snapshot = await getDocs(blogQuery);
      console.log('Query successful, document count:', snapshot.size);
      
      const blogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      return NextResponse.json(
        blogs,
        {
          headers: {
            'Cache-Control': 'no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        }
      );
    } catch (queryError: any) {
      console.error('Error executing Firestore query:', {
        error: queryError,
        message: queryError.message,
        code: queryError.code,
        details: queryError.details
      });
      return NextResponse.json(
        { 
          error: 'Failed to fetch blog posts from database',
          details: queryError.message 
        }, 
        { 
          status: 500,
          headers: {
            'Cache-Control': 'no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0'
          }
        }
      );
    }
  } catch (error: any) {
    console.error('Error in blog GET endpoint:', {
      error,
      message: error.message,
      code: error.code,
      details: error.details
    });
    return NextResponse.json(
      { 
        error: 'Unknown error fetching blog posts',
        details: error.message
      }, 
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    );
  }
}