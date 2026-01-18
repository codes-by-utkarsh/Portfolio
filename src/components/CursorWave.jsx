import React, { useEffect, useRef } from 'react';

const CursorWave = () => {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Mouse move handler
        const onMouseMove = (e) => {
            pointsRef.current.push({
                x: e.clientX,
                y: e.clientY,
                age: 0
            });
        };
        window.addEventListener('mousemove', onMouseMove);

        // Animation Loop
        const animate = () => {
            const points = pointsRef.current;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Filter out old points
            pointsRef.current = points.filter(p => p.age < 25); // Short life for "short wave"

            ctx.beginPath();
            // Draw smooth curve
            for (let i = 0; i < pointsRef.current.length - 1; i++) {
                const pt = pointsRef.current[i];
                const nextPt = pointsRef.current[i + 1];

                // Age points
                pt.age += 1;

                ctx.lineTo(pt.x, pt.y);

                // Dynamic styling
                const opacity = 1 - (pt.age / 25);
                ctx.strokeStyle = `rgba(0, 255, 65, ${opacity})`;
                ctx.lineWidth = (1 - (pt.age / 25)) * 3;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(nextPt.x, nextPt.y);
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
            }}
        />
    );
};

export default CursorWave;
