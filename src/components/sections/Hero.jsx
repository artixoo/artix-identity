import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial Reveal after massive preloader warp
            gsap.fromTo(textRef.current.children,
                { opacity: 0, y: 120, filter: 'blur(40px)', scale: 0.75 },
                {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    scale: 1,
                    duration: 2.8,
                    stagger: 0.4,
                    ease: "power4.out",
                    delay: 4.5 // Coordinated with massive preloader duration
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen relative flex items-center justify-center overflow-hidden py-32 bg-transparent">


            <div ref={textRef} className="relative z-10 w-full max-w-screen-xl px-6 flex flex-col items-center text-center select-none">

                <div className="flex flex-col items-center gap-4 mb-20 leading-relaxed uppercase">
                    <span className="text-meta block opacity-40 tracking-[0.3em] silver-glow">
                        SIGINT // <span className="text-white/60">TEAM LEAD: XAENITHRA</span> // NEW DELHI
                    </span>
                </div>

                <h1 className="font-sans text-display text-[clamp(60px,18vw,280px)] font-bold tracking-[-0.08em] text-white leading-[0.8] mb-12 silver-glow">
                    UTKARSH<br />PRATHAM.
                </h1>

                <div className="max-w-4xl">
                    <p className="font-serif text-2xl md:text-5xl text-white/40 italic leading-[1.2] mb-24">
                        "Cybersecurity Specialist | <span className="text-white silver-glow">CTF Competitor</span> specializing in <span className="text-white">offensive security</span>."
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30 hover:opacity-100 transition-opacity duration-700">
                        <a href="mailto:utx1zz@gmail.com" className="text-meta !text-[11px] hover:text-white hover:silver-glow transition-all">utx1zz@gmail.com</a>
                        <a href="tel:+916287534325" className="text-meta !text-[11px] hover:text-white transition-all">+91 62875 34325</a>
                        <a href="https://www.linkedin.com/in/utkarsh-pratham/" target="_blank" className="text-meta !text-[11px] hover:text-white transition-all">LinkedIn</a>
                    </div>
                </div>

                <div className="mt-32 opacity-10">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent mx-auto"></div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
