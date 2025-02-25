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
        <div className="h-24 relative">
            <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[70rem] backdrop-blur-md supports-[backdrop-filter]:bg-background/60 rounded-full border border-border/40 dark:border-white/5 shadow-lg transition-all duration-300 ${scrolled ? 'bg-background/95' : 'bg-background/80'}`}>
                <div className="flex items-center justify-between px-8 py-3">
                    <a href="/" className="logo font-sacramento flex items-center text-[var(--text-color)] text-2xl md:text-3xl tracking-tight">
                        <span className="font-sacramento">&lt; </span>
                        {firstName} {lastName}
                        <span className="font-sacramento"> /&gt;</span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <nav className={`navbar hidden md:flex items-center space-x-8`}>
                        <a href="/" onClick={handleLinkClick} className="font-jetbrains text-sm font-medium tracking-wide transition-colors hover:text-[var(--main-color)]">HOME</a>
                        <a href="/#about" onClick={handleLinkClick} className="font-jetbrains text-sm font-medium tracking-wide transition-colors hover:text-[var(--main-color)]">ABOUT</a>
                        <a href="/services" onClick={handleLinkClick} className="font-jetbrains text-sm font-medium tracking-wide transition-colors hover:text-[var(--main-color)]">SERVICES</a>
                        <a href="/projects" onClick={handleLinkClick} className="font-jetbrains text-sm font-medium tracking-wide transition-colors hover:text-[var(--main-color)]">PROJECTS</a>
                        <a href="/contact" onClick={handleLinkClick} className="font-jetbrains text-sm font-medium tracking-wide transition-colors hover:text-[var(--main-color)]">CONTACT</a>
                    </nav>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 hover:bg-[var(--main-color)]/10 focus:outline-none md:hidden"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMenuOpen ? (
                            <i className='bx bx-x text-xl text-[var(--text-color)]'></i>
                        ) : (
                            <i className='bx bx-menu text-xl text-[var(--text-color)]' id="menu-icon"></i>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-[70rem] md:hidden bg-background/95 backdrop-blur-md rounded-xl border border-border/40 dark:border-white/5 shadow-lg">
                    <div className="space-y-1 px-4 py-4">
                        <a href="/" onClick={handleLinkClick} className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">HOME</a>
                        <a href="/#about" onClick={handleLinkClick} className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">ABOUT</a>
                        <a href="/services" onClick={handleLinkClick} className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">SERVICES</a>
                        <a href="/projects" onClick={handleLinkClick} className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">PROJECTS</a>
                        <a href="/contact" onClick={handleLinkClick} className="block rounded-md px-4 py-3 text-sm font-medium hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]">CONTACT</a>
                    </div>
                </div>
            )}
        </div>
    );
}