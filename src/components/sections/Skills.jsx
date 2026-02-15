import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Skill bar reveals
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        { cat: 'Systems', items: ['C / C++', 'Python / Bash', 'TypeScript / SQL'] },
        { cat: 'Offensive', items: ['Pentesting', 'Web Security', 'Binary Exploit'] },
        { cat: 'Tactical', items: ['Burp Suite', 'Metasploit', 'Kali Linux'] },
        { cat: 'Full Stack', items: ['MERN Stack', 'React / Node', 'Tailwind / Git'] }
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-transparent px-6 md:px-24">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center mb-32">
                    <span className="text-meta block mb-8 italic opacity-40">04 / Tactical Stack</span>
                    <h2 className="font-serif text-display text-5xl md:text-8xl text-white mb-8">My Arsenal.</h2>
                    <p className="font-serif text-display text-2xl text-white italic opacity-40 silver-glow">Combat Ready</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {skills.map((group, i) => (
                        <div key={i} className="glass-panel p-10 rounded-3xl group hover:border-[var(--color-accent)]/30 transition-all duration-700">
                            <span className="text-meta block mb-8 text-[var(--color-accent)]">{group.cat}</span>
                            <div className="space-y-4">
                                {group.items.map((skill, j) => (
                                    <div key={j} className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                                        <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
