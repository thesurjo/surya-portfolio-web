import { copyright } from "@/data/home.data";

export default function Footer() {
    return <>
        <footer className="footer w-full">
            <div className="footer-text">
                <p className="font-jetbrains">{copyright}</p>
            </div>
            <div className="footer-top-scroll">
                <a href="#home" className="rounded-full"><i className='bx bx-up-arrow-alt'></i></a>
            </div>
        </footer>
    </>
}