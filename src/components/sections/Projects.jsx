import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current.querySelectorAll('.project-card'),
                { opacity: 0, scale: 0.95 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power2.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            title: 'TRINETRA',
            cat: 'Forensics // Intelligence',
            desc: 'Digital Assembly Line for Forensics. A sophisticated extraction and reporting suite designed for streamlined forensic pipelines.',
            link: 'https://github.com/utxdev/Xaenithra-ps6-investigation'
        },
        {
            title: 'Companio',
            cat: 'Architecture // Connection',
            desc: 'A collaborative bridge designed to preserve emotional connections. Built to capture and share children\'s voices with grandparents, blending high-performance sync with a human touch.',
            link: 'https://github.com/utxdev/Companio'
        },
        {
            title: 'ENCODED_CORE',
            cat: 'Cryptography // Signal',
            desc: 'Advanced signal protocol implementing authenticated encryption layers for hostile transport environments.',
            link: 'https://github.com/utxdev/Xaenithra-Encoded'
        },
        {
            title: 'Pathfinder',
            cat: 'Intelligence // Mapping',
            desc: 'Tactical intelligence protocol designed for pathfinding and mapping investigation workflows within complex signal intelligence pathways.',
            link: 'https://github.com/utxdev/Pathfinder'
        }
    ];

    return (
        <section ref={sectionRef} id="projects" className="section-padding bg-transparent px-6 md:px-24">
            <div className="max-w-screen-xl mx-auto text-center">
                <span className="text-meta block mb-20 italic silver-glow opacity-40">07 / Operational Projects</span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <a
                            key={i}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card glass-panel p-12 rounded-[40px] group cursor-pointer hover:border-white/30 transition-all duration-1000 overflow-hidden relative silver-border-glow block"
                        >
                            <span className="text-meta block mb-8 text-white/40 group-hover:text-white transition-colors uppercase tracking-widest">{p.cat}</span>
                            <h3 className="font-serif text-display text-4xl text-white mb-6 group-hover:italic transition-all duration-700">{p.title}</h3>
                            <p className="font-sans text-sm text-white/50 leading-relaxed mb-12 opacity-60 group-hover:opacity-100 transition-opacity">
                                {p.desc}
                            </p>
                            <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                                <div className="w-8 h-[1px] bg-white/20 group-hover:bg-white group-hover:w-12 transition-all"></div>
                                <span className="text-meta opacity-20 group-hover:opacity-100 italic">View Protocol</span>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
