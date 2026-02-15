import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Atmosphere = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const quoteRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax on image
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                y: -100,
                ease: "none"
            });

            // Quote reveal
            gsap.fromTo(quoteRef.current,
                { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    },
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                    duration: 2.5,
                    ease: "power2.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-[80vh] relative overflow-hidden flex items-center justify-center bg-void">

            {/* Full-Bleed Background Image (Custom Chandigarh Brutalist Art) */}
            <div
                ref={imageRef}
                className="absolute inset-0 w-full h-[120%] bg-cover bg-center grayscale opacity-40 will-change-transform"
                style={{ backgroundImage: `url('/home/artix/.gemini/antigravity/brain/4529519f-2ebd-46e7-a72f-f051a70f1d2e/cyber_brutalist_chandigarh_security_1771143436264.png')` }}
            ></div>

            {/* Tactical Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

            {/* Monumental Quote */}
            <div className="relative z-10 text-center px-6">
                <span className="text-meta mb-8 block opacity-40">Tactical Directive // 01</span>
                <h2 ref={quoteRef} className="font-serif text-3xl md:text-5xl lg:text-7xl text-white max-w-[15ch] mx-auto leading-tight italic">
                    "Security is always excessive until it's not enough."
                </h2>
                <div className="mt-12 flex justify-center gap-4 opacity-20">
                    <div className="w-24 h-[1px] bg-white"></div>
                    <span className="font-mono text-[9px] uppercase tracking-widest">Offense informs defense</span>
                    <div className="w-24 h-[1px] bg-white"></div>
                </div>
            </div>

        </section>
    );
};

export default Atmosphere;
