"use client"
import { useRouter } from 'next/navigation'
import {Header, Footer} from '@/global/page';

export default function Project() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Footer />
    </main>
  );
}
