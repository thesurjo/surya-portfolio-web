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
            <a href="/" className="logo"><span>&lt; </span>{firstName} {lastName}<span> /&gt;</span></a>
            <i className='bx bx-menu' id="menu-icon" onClick={toggleMenu}></i>
            <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
                <a href="/" onClick={handleLinkClick}>Home</a>
                <a href="#about" onClick={handleLinkClick}>ABOUT</a>
                <a href="#services" onClick={handleLinkClick}>SERVICES</a>
                <a href="#project" onClick={handleLinkClick}>PROJECTS</a>
                <a href="#contact" onClick={handleLinkClick}>CONTACT</a>
            </nav>
        </header>
    </>
}