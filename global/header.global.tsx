"use client"
import { firstName, lastName } from "@/data/home.data";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Menu items structure
const menuItems = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/#contact", label: "Contact" }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentHash, setCurrentHash] = useState<string>("");
    const [activeMenu, setActiveMenu] = useState<string>("/");
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Force component to re-render when route changes
    useEffect(() => {
        // This empty effect ensures the component re-renders when pathname changes
    }, [pathname, searchParams]);

    // Set correct active menu item whenever pathname or hash changes
    useEffect(() => {
        // Get initial hash on mount and track hash changes
        const updateHash = () => {
            setCurrentHash(window.location.hash);
            updateActiveMenu();
        };

        // Determine which menu item should be active
        const updateActiveMenu = () => {
            const hash = window.location.hash;
            
            // If we're on the home page
            if (pathname === "/") {
                // If there's a hash, find the menu item that matches it
                if (hash) {
                    const matchingItem = menuItems.find(item => item.href.includes(hash));
                    if (matchingItem) {
                        setActiveMenu(matchingItem.href);
                        return;
                    }
                }
                // Otherwise, set Home as active
                setActiveMenu("/");
                return;
            }
            
            // For other pages, find the most specific match
            // Sort menu items by length (descending) to match the most specific path first
            const sortedItems = [...menuItems].sort((a, b) => {
                // Extract path without hash
                const aPath = a.href.split("#")[0];
                const bPath = b.href.split("#")[0];
                return bPath.length - aPath.length;
            });
            
            // Find the first item that matches the current path
            const matchingItem = sortedItems.find(item => {
                const itemPath = item.href.split("#")[0];
                return pathname.startsWith(itemPath) && itemPath !== "/";
            });
            
            if (matchingItem) {
                setActiveMenu(matchingItem.href);
            } else {
                // Default to home if nothing matches
                setActiveMenu("/");
            }
        };

        // Initial update
        updateHash();
        
        // Listen for hash changes
        window.addEventListener('hashchange', updateHash);
        
        return () => {
            window.removeEventListener('hashchange', updateHash);
        };
    }, [pathname]);

    useEffect(() => {
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
        <div className="h-32 relative w-full overflow-hidden">
            <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-[92%] md:w-[95%] max-w-[70rem] backdrop-blur-md supports-[backdrop-filter]:bg-background/60 rounded-full border border-border/40 dark:border-white/5 shadow-lg transition-all duration-300 min-h-[4.5rem] ${scrolled ? 'bg-background/95' : 'bg-background/80'}`}>
                <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-3 md:py-4">
                    <a href="/" className="gap-2 logo font-jetbrains flex items-center text-[var(--text-color)] text-xl md:text-3xl tracking-tight">
                        <span className="font-jetbrains">&lt; </span>
                        {firstName} 
                        <span className="font-jetbrains"> /&gt;</span>
                    </a>
                    
                    {/* Desktop Navigation */}
                    <nav className={`navbar hidden md:flex items-center space-x-8`}>
                        {menuItems.map((item, index) => (
                            <a 
                                key={index}
                                href={item.href} 
                                onClick={handleLinkClick} 
                                data-active={activeMenu === item.href ? "true" : "false"}
                                className={`font-jetbrains tracking-wide transition-colors text-base ${
                                    activeMenu === item.href
                                    ? 'text-[var(--main-color)]' 
                                    : 'hover:text-[var(--main-color)]'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
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
                <div className="fixed top-32 left-1/2 -translate-x-1/2 z-40 w-[90%] sm:w-[92%] md:w-[95%] max-w-[70rem] md:hidden bg-background/95 backdrop-blur-md rounded-xl border border-border/40 dark:border-white/5 shadow-lg">
                    <div className="space-y-1 px-4 sm:px-6 py-6">
                        {menuItems.map((item, index) => (
                            <a 
                                key={index}
                                href={item.href} 
                                onClick={handleLinkClick} 
                                data-active={activeMenu === item.href ? "true" : "false"}
                                className={`block rounded-md px-4 py-4 text-[14px] font-medium ${
                                    activeMenu === item.href
                                    ? 'text-[var(--main-color)] bg-[var(--main-color)]/10'
                                    : 'hover:bg-[var(--main-color)]/10 hover:text-[var(--main-color)]'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}