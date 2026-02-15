import React, { useEffect, useRef } from 'react';

const Starfield = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];
        const STAR_COUNT = 400;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    z: Math.random() * canvas.width, // Depth
                    size: Math.random() * 1.5,
                    opacity: Math.random(),
                    speed: Math.random() * 0.5 + 0.1
                });
            }
        };

        const handleMouseMove = (e) => {
            mouse.current.x = (e.clientX - window.innerWidth / 2) / 100;
            mouse.current.y = (e.clientY - window.innerHeight / 2) / 100;
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                const zScale = (canvas.width / star.z);
                const pX = (star.x - canvas.width / 2) * zScale;
                const pY = (star.y - canvas.height / 2) * zScale;

                const offsetX = mouse.current.x * zScale * 2;
                const offsetY = mouse.current.y * zScale * 2;

                const x = pX + canvas.width / 2 + offsetX;
                const y = pY + canvas.height / 2 + offsetY;
                const s = star.size * zScale;

                const flicker = Math.sin(Date.now() * 0.001 * star.speed) * 0.3 + 0.7;

                ctx.beginPath();
                ctx.arc(x, y, s, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * flicker})`;
                ctx.fill();

                star.z -= star.speed;
                if (star.z <= 0) star.z = canvas.width;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 bg-void"
            style={{ filter: 'blur(0.5px)' }}
        />
    );
};

export default Starfield;
