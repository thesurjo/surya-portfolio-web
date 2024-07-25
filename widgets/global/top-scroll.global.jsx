"use client";

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {
                visible &&
                <div className="footer-top-scroll">
                    <button className="scroll-button rounded-full" onClick={scrollToTop}>
                        <i className='bx bx-up-arrow-alt'></i>
                    </button>
                </div>
            }
        </>
    );
}