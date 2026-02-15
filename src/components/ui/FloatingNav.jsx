import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingNav = () => {
    const navRef = useRef(null);

    const navLinks = [
        { label: '01 / About', target: 'about' },
        { label: '02 / Ed', target: 'education' },
        { label: '03 / Exp', target: 'experience' },
        { label: '04 / Skills', target: 'skills' },
        { label: '05 / Certs', target: 'certifications' },
        { label: '06 / CTF', target: 'achievements' },
        { label: '07 / Ops', target: 'projects' },
        { label: '08 / Link', target: 'contact' }
    ];

    useEffect(() => {
        gsap.fromTo(navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 5.5 }
        );
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            ref={navRef}
            className="fixed top-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        >
            <div className="glass-panel px-8 py-3 rounded-full flex items-center gap-8 border-white/10 shadow-2xl">
                {navLinks.map((link, i) => (
                    <a
                        key={i}
                        href={`#${link.target}`}
                        className="font-sans text-display text-[11px] uppercase tracking-[0.3em] text-white/40 hover:text-white hover:silver-glow transition-all duration-300 whitespace-nowrap"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default FloatingNav;
