"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/global/page';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'js-cookie';

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const idToken = await userCredential.user.getIdToken();
            
            // Set the token in a cookie
            Cookies.set('admin_token', idToken, { expires: 7 }); // Expires in 7 days
            
            router.push('/admin/blog');
        } catch (error: any) {
            console.error('Login error:', error);
            setError(error.message || 'Invalid email or password');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <section className="w-full py-8 pt-28 px-4 md:px-9 bg-[--second-bg-color]/30">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-[32px] md:text-[40px] font-bold font-jetbrains mb-4">
                            Admin Login
                        </h1>
                        <p className="font-jetbrains text-[14px] md:text-[16px] text-gray-400">
                            Sign in to access the admin dashboard
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-[14px] font-jetbrains">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[14px] font-medium font-jetbrains mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 px-4 rounded-lg bg-[--second-bg-color] text-[--text-color] border border-gray-700 focus:border-[--main-color] focus:outline-none font-jetbrains text-[14px]"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 bg-[--main-color] text-[--bg-color] rounded-lg text-[14px] font-medium hover:bg-[--main-color]/90 transition-all duration-300 flex items-center justify-center gap-2 ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <i className='bx bx-lock-open-alt'></i>
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </main>
    );
}