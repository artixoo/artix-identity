import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const inner = innerRef.current;

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: "power3.out"
            });
            gsap.to(inner, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "none"
            });
        };

        const handleHover = () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
            gsap.to(inner, { scale: 0.5, opacity: 1, duration: 0.3 });
        };

        const handleUnhover = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
            gsap.to(inner, { scale: 1, opacity: 0.5, duration: 0.3 });
        };

        window.addEventListener('mousemove', moveCursor);

        const interactives = document.querySelectorAll('a, button, .group');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleUnhover);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div className="hidden lg:block">
            {/* Main Crosshair Wrapper */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 pointer-events-none z-[9999] border border-white/20 origin-center"
            >
                {/* 4 Corner Markers */}
                <div className="absolute top-0 left-0 w-1 h-[1px] bg-white/40"></div>
                <div className="absolute top-0 left-0 h-1 w-[1px] bg-white/40"></div>

                <div className="absolute top-0 right-0 w-1 h-[1px] bg-white/40"></div>
                <div className="absolute top-0 right-0 h-1 w-[1px] bg-white/40"></div>

                <div className="absolute bottom-0 left-0 w-1 h-[1px] bg-white/40"></div>
                <div className="absolute bottom-0 left-0 h-1 w-[1px] bg-white/40"></div>

                <div className="absolute bottom-0 right-0 w-1 h-[1px] bg-white/40"></div>
                <div className="absolute bottom-0 right-0 h-1 w-[1px] bg-white/40"></div>
            </div>

            {/* Inner Dot/Reticle */}
            <div
                ref={innerRef}
                className="fixed top-0 left-0 w-1 h-1 -ml-[2px] -mt-[2px] pointer-events-none z-[9999] bg-white opacity-50 origin-center"
            ></div>
        </div>
    );
};

export default CustomCursor;
