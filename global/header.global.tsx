"use client"
import { firstName, lastName } from "@/data/home.data";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setMounted(true);
        
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="h-32 relative">
            <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[70rem] backdrop-blur-md supports-[backdrop-filter]:bg-background/60 rounded-full border border-border/40 dark:border-white/5 shadow-lg transition-all duration-300 min-h-[4.5rem] ${scrolled ? 'bg-background/95' : 'bg-background/80'}`}>
                <div className="flex items-center justify-between px-6 md:px-12 py-3 md:py-4">
                    <a href="/" className="gap-2 logo font-jetbrains flex items-center text-[var(--text-color)] text-xl md:text-3xl tracking-tight">
                        <span className="font-jetbrains">&lt; </span>
                        {firstName} 
                        <span className="font-jetbrains"> /&gt;</span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <nav className={`navbar hidden md:flex items-center space-x-8`}>
                        <a href="/" onClick={handleLinkClick} className="font-jetbrains tracking-wide transition-colors hover:text-[var(--main-color)] text-base">Home</a>
                        <a href="/#about" onClick={handleLinkClick} className="font-jetbrains tracking-wide transition-colors hover:text-[var(--main-color)] text-base">About</a>
                        <a href="/services" onClick={handleLinkClick} className="font-jetbrains tracking-wide transition-colors hover:text-[var(--main-color)] text-base">Services</a>
                        <a href="/projects" onClick={handleLinkClick} className="font-jetbrains tracking-wide transition-colors hover:text-[var(--main-color)] text-base">Projects</a>
                        <a href="/#contact" onClick={handleLinkClick} className="font-jetbrains tracking-wide transition-colors hover:text-[var(--main-color)] text-base">Contact</a>
                    </nav>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-3 hover:bg-[var(--main-color)]/10 focus:outline-none md:hidden"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <i className='bx bx-x text-4xl text-[var(--text-color)]'></i>
                        ) : (
                            <i className='bx bx-menu text-4xl text-[var(--text-color)]' id="menu-icon"></i>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed top-32 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[70rem] md:hidden bg-background/95 backdrop-blur-md rounded-xl border border-border/40 dark:border-white/5 shadow-lg">
                    <div className="space-y-1 px-6 py-6">
                        <a href="/" onClick={handleLinkClick} className="block rounded-md px-4 py-4 text-lg font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">Home</a>
                        <a href="/#about" onClick={handleLinkClick} className="block rounded-md px-4 py-4 text-lg font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">About</a>
                        <a href="/services" onClick={handleLinkClick} className="block rounded-md px-4 py-4 text-lg font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">Services</a>
                        <a href="/projects" onClick={handleLinkClick} className="block rounded-md px-4 py-4 text-lg font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">Projects</a>
                        <a href="/#contact" onClick={handleLinkClick} className="block rounded-md px-4 py-4 text-lg font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
}