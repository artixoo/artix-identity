import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Experience = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current.querySelectorAll('.exp-item'),
                { opacity: 0, x: -30, filter: 'blur(10px)' },
                {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power2.out"
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const jobs = [
        { role: 'Team Leader', org: 'Xaenithra', date: '09/2025 - Present', desc: 'I lead offensive security cycles and orchestrate complex vulnerability assessments, bridging the gap between high-level strategy and technical execution.' },
        { role: 'Core Team Member', org: 'Cysecsphere Club CU', date: '09/2025 - Present', desc: 'I am building offensive security ecosystems and fostering a community of technical excellence through hands-on research and mentorship.' },
        { role: 'Community Contributor', org: 'Brainly.in', date: '04/2020 - 01/2022', desc: 'I created LaTeX-based math and academic content, streamlining complex documentation for technical communities and ensuring technical accuracy in educational materials.' }
    ];

    return (
        <section ref={sectionRef} className="section-padding bg-transparent px-6 md:px-24 border-t border-white/5">
            <div className="max-w-screen-xl mx-auto">
                <span className="text-meta block mb-24 text-center silver-glow opacity-40">03 / My Protocol History</span>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {jobs.map((job, i) => (
                        <div key={i} className="exp-item glass-panel p-12 rounded-[32px] group hover:border-white/20 transition-all duration-1000 silver-border-glow">
                            <span className="text-meta block mb-8 italic">{job.date}</span>
                            <h3 className="font-serif text-display text-4xl text-white mb-3 group-hover:silver-glow transition-all duration-500">{job.role}</h3>
                            <p className="font-mono text-[11px] uppercase text-white/30 mb-10 tracking-[0.2em]">{job.org}</p>
                            <p className="font-sans text-base text-white/50 leading-relaxed group-hover:text-white transition-colors duration-700">
                                {job.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
