import { useEffect, useRef } from "react";

export default function NetworkBackground({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height;
    const particles = [];
    const maxParticles = 50; // Fewer particles to match the sparse starry look
    const connectionDistance = 180;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3; // Slower movement
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1.5;
        this.glowSize = Math.random() * 15 + 10;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw(ctx, isDark) {
        // Core particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "#c084fc" : "#8b5cf6";
        
        // Add glow effect
        ctx.shadowBlur = this.glowSize;
        ctx.shadowColor = isDark ? "#a855f7" : "#8b5cf6";
        
        ctx.fill();
        
        // Reset shadow for lines
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    let animationId;

    const draw = () => {
      animationId = requestAnimationFrame(draw);

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === "dark";
      const lineColorBase = isDark ? "168, 85, 247" : "139, 92, 246";

      particles.forEach((p) => {
        p.update();
        p.draw(ctx, isDark);
      });

      for (let i = 0; i < maxParticles; i++) {
        for (let j = i + 1; j < maxParticles; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColorBase}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} />;
}
