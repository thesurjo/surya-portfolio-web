import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, where, limit } from 'firebase/firestore';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    console.log('Blog fetch request received with status:', status);
    
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
      const testRef = collection(db, 'blogs');
      await getDocs(query(testRef, limit(1)));
      console.log('Database connection test successful');
    } catch (connectionError) {
      console.error('Database connection test failed:', connectionError);
      return NextResponse.json(
        { error: 'Database connection test failed' }, 
        { status: 500 }
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
      
      const blogs = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          publishedAt: data.publishedAt?.toDate?.()?.toISOString() || null,
          updatedAt: data.updatedAt?.toDate?.()?.toISOString() || null
        };
      });
      
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
    } catch (queryError) {
      console.error('Error executing Firestore query:', queryError);
      return NextResponse.json(
        { error: 'Failed to fetch blog posts from database' }, 
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in blog GET endpoint:', error);
    return NextResponse.json(
      { error: 'Unknown error fetching blog posts' }, 
      { status: 500 }
    );
  }
}