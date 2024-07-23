"use client";
import { copyright } from "@/data/home.data";

export default function Footer() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return <>
        <footer className="footer w-full">
            <div className="footer-text w-[90%]">
                <p className="font-jetbrains">{copyright}</p>
            </div>
            <div className="footer-top-scroll w-[10%]">
                <button className="rounded-full" onClick={scrollToTop}><i className='bx bx-up-arrow-alt'></i></button>
            </div>
        </footer>
    </>
}