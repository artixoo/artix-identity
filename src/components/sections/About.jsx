import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const About = () => {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-transparent px-6 md:px-24 relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-32" ref={contentRef}>

                {/* Header Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-8">
                        <span className="text-meta block mb-12 italic opacity-40">01 — Tactical Intel</span>
                        <h2 className="font-serif text-display text-5xl md:text-8xl text-white leading-[1.1] mb-12">
                            I am a <span className="italic silver-glow">Hacker</span>. I dismantle the complex to find the secure.
                        </h2>
                    </div>
                </div>

                {/* Narrative Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Main Bio */}
                    <div className="lg:col-span-7 space-y-12">
                        <p className="font-sans text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                            I’m an engineering student specializing in <span className="text-white italic">Computer Science and Cybersecurity</span>, with a deep focus on Full Stack Development. I work at the intersection of building secure systems and understanding exactly how they can be broken.
                        </p>

                        <div className="space-y-8 font-sans text-base text-white/50 leading-relaxed">
                            <p>
                                My primary interests include <span className="text-white/80">ethical hacking, network security, digital forensics, and system hardening</span> — while simultaneously crafting robust web applications using modern full stack technologies. I work with Kali Linux, VMware, penetration testing frameworks, and full stack tools like React, Node.js, Express, and MongoDB.
                            </p>
                            <p>
                                I’ve led teams in high-stakes hackathons and <span className="text-white/80 italic">CTFs</span>, where I’ve sharpened not only my technical arsenal but also my leadership and strategic planning under pressure. I enjoy the process of managing technical challenges and finding practical, secure solutions.
                            </p>
                            <p className="border-l border-white/10 pl-8 italic">
                                "I believe in learning by building, experimenting, and constantly improving. I am currently looking for opportunities to apply my cybersecurity and development skills to impactful real-world projects."
                            </p>
                        </div>
                    </div>

                    {/* Meta Data Sidebar */}
                    <div className="lg:col-span-5 flex flex-col gap-8">

                        <div className="glass-panel p-10 rounded-[40px] silver-border-glow">
                            <span className="text-meta !text-[9px] mb-6 block opacity-40">Philosophy</span>
                            <blockquote className="font-serif text-3xl text-white italic leading-snug">
                                "To me, security is not a product, but a <span className="not-italic silver-glow">process</span>. I maintain order through constant vigilance."
                            </blockquote>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="glass-panel p-8 rounded-[32px] silver-border-glow">
                                <span className="text-meta !text-[9px] mb-4 block opacity-40">Intel // Axiom</span>
                                <p className="font-mono text-[10px] text-white/60 tracking-wider uppercase italic leading-relaxed">
                                    95% of breaches start with human error. I build systems that account for the human variable.
                                </p>
                            </div>
                            <div className="glass-panel p-8 rounded-[32px] silver-border-glow">
                                <span className="text-meta !text-[9px] mb-4 block opacity-40">directive // goal</span>
                                <p className="font-mono text-[10px] text-white/60 tracking-wider uppercase italic leading-relaxed">
                                    To architect a decentralized future where privacy is a default, not a feature.
                                </p>
                            </div>
                        </div>

                        {/* Resume View Action */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel p-8 rounded-[32px] silver-border-glow group/resume flex items-center justify-between hover:border-white/40 transition-all duration-700 bg-white/[0.02]"
                        >
                            <div className="flex flex-col gap-1">
                                <span className="text-meta !text-[9px] opacity-40 uppercase tracking-widest">Protocol // ACCESS</span>
                                <span className="font-serif text-2xl text-white group-hover/resume:silver-glow transition-all">View Resume</span>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover/resume:text-white group-hover/resume:border-white/40 transition-all">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

        </div>
        </section >
    );
};

export default About;
