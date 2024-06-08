export default function Header() {
    return <>
        <header className="header">
            <a href="/" className="logo"><span>&lt; </span>Surya Basak<span> /&gt;</span></a>
            <i className='bx bx-menu' id="menu-icon"></i>
            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#about">ABOUT</a>
                <a href="#services">SERVICES</a>
                <a href="#portfolio">PROJECTS</a>
                <a href="#contact">CONTACT</a>
            </nav>
        </header>
    </>
}