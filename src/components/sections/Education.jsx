import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Education = () => {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current.children,
                { opacity: 0, x: -30 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    x: 0,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power2.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-transparent px-6 md:px-24">
            <div className="max-w-screen-xl mx-auto">
                <span className="text-meta block mb-20 text-center">02 / Foundation</span>

                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="glass-panel p-12 rounded-3xl group transition-all duration-700 hover:border-white/30 silver-border-glow">
                        <span className="text-meta mb-4 block">2025 - 2029</span>
                        <h3 className="font-serif text-4xl text-white mb-2">B.E (Hons) CSE</h3>
                        <p className="font-sans text-[var(--color-text-secondary)] mb-8">Chandigarh University — Cybersecurity with IBM</p>
                        <p className="text-sm text-white/50 leading-relaxed italic border-l border-white/20 pl-6">
                            "I am building an institutional foundation in security research, bridging core engineering principles with cognitive threat intelligence."
                        </p>
                    </div>

                    <div className="glass-panel p-12 rounded-3xl group transition-all duration-700 hover:border-white/30 silver-border-glow">
                        <span className="font-mono text-[9px] uppercase text-[var(--color-accent)] mb-4 block">Specialization</span>
                        <h3 className="font-serif text-4xl text-white mb-2">IBM Security Track</h3>
                        <p className="font-sans text-[var(--color-text-secondary)] mb-8">Integrated Corporate Framework</p>
                        <p className="text-sm text-white/50 leading-relaxed italic border-l border-white/20 pl-6">
                            "I am applying deep technical forensics and cloud security patterns to master enterprise-grade offensive methodologies."
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Education;
