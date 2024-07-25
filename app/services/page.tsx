"use client"
import { Header, Footer } from '@/global/page';
import { ServiceSection } from '@/sections/page';

export default function Services() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Header />
            <ServiceSection />
            <Footer />
        </main>
    );
}
