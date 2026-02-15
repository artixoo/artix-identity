import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(lineRef.current,
                { scaleX: 0 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                    },
                    scaleX: 1,
                    duration: 2.5,
                    ease: "power4.inOut"
                }
            );

            gsap.fromTo(contentRef.current,
                { opacity: 0, y: 40, filter: 'blur(20px)' },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    duration: 2,
                    ease: "power2.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const socials = [
        {
            name: 'Email',
            link: 'mailto:utx1zz@gmail.com',
            protocol: 'SMTP',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
            )
        },
        {
            name: 'LinkedIn',
            link: 'https://linkedin.com/in/utxdev',
            protocol: 'AUTH',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            )
        },
        {
            name: 'GitHub',
            link: 'https://github.com/utxdev',
            protocol: 'GIT',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            )
        },
        {
            name: 'Instagram',
            link: 'https://instagram.com/xivtx',
            protocol: 'MEDIA',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )
        }
    ];

    return (
        <section ref={sectionRef} id="contact" className="section-padding bg-void relative px-6 md:px-24">

            {/* Editorial Line Reveal */}
            <div ref={lineRef} className="w-full h-[1px] bg-white/5 origin-left mb-32"></div>

            <div ref={contentRef} className="max-w-screen-xl mx-auto flex flex-col items-center">

                <div className="text-center mb-32">
                    <span className="text-meta block mb-12 italic opacity-40">08 / Direct Link</span>
                    <h2 className="font-serif text-display text-6xl md:text-[160px] text-white leading-[0.85] tracking-tighter silver-glow">
                        Let's<br />
                        <span className="italic">Assemble.</span>
                    </h2>
                </div>

                {/* Tactical Social Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel p-10 rounded-[32px] group hover:border-white/30 transition-all duration-1000 flex flex-col items-center text-center gap-8 silver-border-glow overflow-hidden relative"
                        >
                            <span className="text-meta !text-[10px] opacity-20 group-hover:opacity-100 group-hover:text-white transition-all">
                                {social.protocol}
                            </span>

                            <div className="text-white/20 group-hover:text-white group-hover:scale-110 transition-all duration-700">
                                {social.icon}
                            </div>

                            <span className="font-serif text-2xl text-white opacity-40 group-hover:opacity-100 transition-opacity">
                                {social.name}
                            </span>

                            {/* Hover Micro-Glow */}
                            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-white/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </a>
                    ))}
                </div>

                <div className="mt-48 flex flex-col items-center gap-12 text-center">
                    <p className="text-meta !text-[11px] opacity-20 tracking-[1em]">
                        Crafted by Utkarsh. SIGINT // VOID — SILVER.
                    </p>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent"></div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
