import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const TransitionOverlay = () => {
    const containerRef = useRef(null);
    const mainTextRef = useRef(null);
    const subTextRef = useRef(null);
    const glintRef = useRef(null);
    const scanlineRef = useRef(null);
    const hudRef = useRef(null);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+!@#$%^&*()_=[]{}";
    const target = "UTKARSH";

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Audio effect for decryption
            const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/995/995-preview.mp3');
            audio.volume = 0.3;

            // 1. Initial State: Deep Void
            gsap.set([mainTextRef.current, subTextRef.current], { opacity: 0 });
            gsap.set(mainTextRef.current, { scale: 0.8, z: -100 });
            gsap.set(scanlineRef.current, { y: "-100%" });
            gsap.set(hudRef.current, { opacity: 0, scale: 1.1 });

            // 2. HUD & Scanline Entrance
            tl.to(hudRef.current, { opacity: 0.3, scale: 1, duration: 2, ease: "power2.out" })
                .to(scanlineRef.current, {
                    y: "100%",
                    duration: 2.5,
                    repeat: -1,
                    ease: "none",
                    opacity: 0.3
                }, 0);

            // 3. The Decryption Sequence
            const scrambleParams = { value: 0 };
            tl.to(mainTextRef.current, {
                opacity: 1,
                scale: 1,
                z: 0,
                duration: 1.5,
                ease: "expo.out",
                textShadow: "0 0 40px rgba(255, 255, 255, 0.2)"
            }, "-=1")
                .to(scrambleParams, {
                    value: 1,
                    duration: 3,
                    ease: "power2.inOut",
                    onUpdate: () => {
                        if (mainTextRef.current) {
                            let result = "";
                            for (let i = 0; i < target.length; i++) {
                                if (Math.random() < scrambleParams.value * 0.9) {
                                    result += target[i];
                                } else {
                                    result += chars[Math.floor(Math.random() * chars.length)];
                                }
                            }
                            mainTextRef.current.innerText = result;
                        }
                    }
                }, "-=0.5");

            // 4. Resolve & Metallic Shine (with sound!)
            tl.to(mainTextRef.current, {
                innerText: target,
                color: "#FFFFFF",
                textShadow: "0 0 120px rgba(255, 255, 255, 0.6)",
                duration: 0.1,
                ease: "none",
                onComplete: () => {
                    audio.play().catch(() => { }); // Play sound on completion
                }
            });

            tl.to(glintRef.current, {
                x: "250%",
                duration: 1,
                ease: "power3.inOut"
            }, "-=0.2");

            tl.to(subTextRef.current, {
                opacity: 0.5,
                y: 0,
                duration: 1.2,
                ease: "back.out(1.7)"
            }, "-=0.5");

            // 5. Cinematic Exit (Black Hole / Zoom)
            tl.to(containerRef.current, {
                opacity: 0,
                scale: 1.5,
                filter: 'blur(100px) brightness(2)',
                duration: 1.8,
                delay: 1.5,
                ease: "expo.in",
                onComplete: () => {
                    containerRef.current.style.display = 'none';
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[1000] bg-[#000000] flex flex-col items-center justify-center overflow-hidden p-6 perspective-container"
            style={{ perspective: '2000px' }}
        >
            {/* Cinematic HUD Background Image */}
            <div
                ref={hudRef}
                className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-0 mix-blend-lighten"
                style={{
                    backgroundImage: 'url("/assets/hud_bg.png")',
                    filter: 'grayscale(1) contrast(1.2) brightness(0.6)'
                }}
            ></div>

            {/* Tactical Scanline */}
            <div
                ref={scanlineRef}
                className="absolute inset-x-0 h-[2px] bg-white opacity-20 pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            ></div>

            {/* Main Content */}
            <div className="relative z-10 text-center space-y-12">
                <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-12 h-[1px] bg-white/10"></div>
                    <div className="font-mono text-[10px] tracking-[0.8em] text-white/30 uppercase italic">
                        Initializing_Protocol_Alpha_7
                    </div>
                    <div className="w-12 h-[1px] bg-white/10"></div>
                </div>

                {/* DECRYPTOR TEXT */}
                <div className="relative overflow-hidden inline-block px-12 py-6 glass-panel rounded-xl border-white/5">
                    <h1
                        ref={mainTextRef}
                        className="font-mono text-7xl md:text-[180px] font-black tracking-[0.15em] text-white select-none italic silver-glow drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
                    >
                        -------
                    </h1>
                    {/* Metallic Glint */}
                    <div
                        ref={glintRef}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full skew-x-[45deg] pointer-events-none blur-md"
                    ></div>
                </div>

                <div ref={subTextRef} className="opacity-0 translate-y-12 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-white silver-glow animate-pulse"></span>
                        <p className="font-mono text-[11px] uppercase tracking-[1.5em] text-white italic opacity-80">
                            DECRYPTION_SUCCESSFUL
                        </p>
                    </div>
                    <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] animate-[scan_2s_infinite]"></div>
                    </div>
                </div>
            </div>

            {/* Edge Glare / Vignette */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.95)_100%)]"></div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
};

export default TransitionOverlay;
