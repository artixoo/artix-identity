import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Certifications = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current.querySelectorAll('.cert-card'),
                { opacity: 0, y: 20 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const certs = [
        { title: 'AppSec Practitioner', org: 'SecOps Group' },
        { title: 'Pre Security', org: 'TryHackMe' },
        { title: 'Cyber Analyst', org: 'Tata / Forage' },
        { title: 'GCP Foundations', org: 'Google' },
        { title: 'Career Essentials', org: 'Microsoft' },
        { title: 'GenAI Foundations', org: 'upGrad' }
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-transparent px-6 md:px-24">
            <div className="max-w-screen-xl mx-auto">
                <span className="text-meta block mb-20 text-center italic silver-glow opacity-40">05 / My Accreditations</span>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {certs.map((c, i) => (
                        <div key={i} className="cert-card glass-panel p-8 rounded-2xl flex flex-col justify-between h-48 group hover:bg-white/[0.08] transition-all duration-500 hover:border-white/30">
                            <span className="text-meta text-[var(--color-accent)]">{c.org}</span>
                            <h4 className="font-serif text-2xl text-white group-hover:underline underline-offset-8 decoration-white/40 leading-snug">
                                {c.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
