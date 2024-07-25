"use client"
import { firstName, lastName } from "@/data/home.data";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return <>
        <header className="header">
            <a href="/" className="logo font-sacramento"><span className="font-sacramento">&lt; </span>{firstName} {lastName}<span className="font-sacramento"> /&gt;</span></a>
            <i className='bx bx-menu' id="menu-icon" onClick={toggleMenu}></i>
            <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
                <a href="/" onClick={handleLinkClick} className="font-jetbrains">HOME</a>
                <a href="/#about" onClick={handleLinkClick} className="font-jetbrains">ABOUT</a>
                <a href="/services" onClick={handleLinkClick} className="font-jetbrains">SERVICES</a>
                <a href="/projects" onClick={handleLinkClick} className="font-jetbrains">PROJECTS</a>
                <a href="/contact" onClick={handleLinkClick} className="font-jetbrains">CONTACT</a>
            </nav>
        </header>
    </>
}