import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Get the pathname
    const path = request.nextUrl.pathname;

    // Don't redirect on the login page to avoid infinite loops
    if (path === '/admin/login') {
        return NextResponse.next();
    }

    // Check if it's an admin route
    if (path.startsWith('/admin')) {
        // Get the token from the cookie
        const token = request.cookies.get('admin_token');

        // If there's no token, redirect to login
        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}