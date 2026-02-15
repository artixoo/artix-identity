import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Achievements = () => {
    const sectionRef = useRef(null);

    const achievements = [
        { title: 'Rank 1 / Echelon', org: 'SVNIT Surat', date: '17 Jan 2026', desc: 'Secured 1st position in the Echelon cybersecurity competition.' },
        { title: '6th Position / Shaastra', org: 'IIT Madras', date: '15 Dec 2025', desc: 'Secured 6th position in Shaastra 2026 (Grand Finals).' },
        { title: 'Top 23 / Bypass CTF', org: 'AIT Pune', date: '27 Dec 2025', desc: 'Secured a position in the Top 23 teams in Bypass CTF.' },
        { title: 'Top 25 / Nite CTF', org: 'MIT Manipal', date: '12 Dec 2025', desc: 'Secured a position in the Top 25 teams in Nite CTF.' }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current.querySelectorAll('.ach-card'),
                { opacity: 0, y: 30 },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="section-padding bg-transparent px-6 md:px-24">
            <div className="max-w-screen-xl mx-auto">
                <span className="text-meta block mb-20 text-center italic silver-glow opacity-40">06 / Wins</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((ach, i) => (
                        <div key={i} className="ach-card glass-panel p-10 rounded-[32px] border-white/5 hover:border-white/20 transition-all duration-700 silver-border-glow group">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-meta text-white/30">{ach.org}</span>
                                <span className="font-mono text-xs text-[var(--color-accent)] opacity-40 italic">{ach.date}</span>
                            </div>
                            <h3 className="font-serif text-2xl text-white mb-4 group-hover:silver-glow transition-all">{ach.title}</h3>
                            <p className="font-sans text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                {ach.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
