// Background Animation System
class BackgroundAnimation {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.waves = [];
        this.setupCanvas();
        this.createParticles();
        this.createWaves();
        this.animate();
        this.handleResize();
    }

    setupCanvas() {
        this.canvas.id = 'background-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        document.body.insertBefore(this.canvas, document.body.firstChild);
        this.resize();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    handleResize() {
        window.addEventListener('resize', () => this.resize());
    }

    createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 4 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: Math.random() * 0.5 + 0.2,
                opacity: Math.random() * 0.5 + 0.3,
                hue: Math.random() * 60 + 180, // Blue to cyan range
                layer: Math.random() // For parallax effect
            });
        }
    }

    createWaves() {
        for (let i = 0; i < 3; i++) {
            this.waves.push({
                y: this.canvas.height * (0.3 + i * 0.2),
                amplitude: 30 + i * 20,
                frequency: 0.01 - i * 0.002,
                speed: 0.02 + i * 0.01,
                offset: 0,
                opacity: 0.1 - i * 0.02,
                hue: 200 + i * 20
            });
        }
    }

    drawWaves(time) {
        this.waves.forEach(wave => {
            this.ctx.beginPath();
            this.ctx.moveTo(0, wave.y);

            for (let x = 0; x <= this.canvas.width; x += 5) {
                const y = wave.y + Math.sin(x * wave.frequency + wave.offset) * wave.amplitude;
                this.ctx.lineTo(x, y);
            }

            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.closePath();

            const gradient = this.ctx.createLinearGradient(0, wave.y - wave.amplitude, 0, this.canvas.height);
            gradient.addColorStop(0, `hsla(${wave.hue}, 70%, 50%, ${wave.opacity})`);
            gradient.addColorStop(1, `hsla(${wave.hue}, 70%, 30%, 0)`);

            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            wave.offset += wave.speed;
        });
    }

    drawParticles(mouseX, mouseY) {
        this.particles.forEach(particle => {
            // Parallax effect based on mouse position
            const parallaxX = (mouseX - this.canvas.width / 2) * particle.layer * 0.02;
            const parallaxY = (mouseY - this.canvas.height / 2) * particle.layer * 0.02;

            // Draw particle with glow
            this.ctx.beginPath();
            this.ctx.arc(
                particle.x + parallaxX,
                particle.y + parallaxY,
                particle.size,
                0,
                Math.PI * 2
            );

            // Glow effect
            const gradient = this.ctx.createRadialGradient(
                particle.x + parallaxX,
                particle.y + parallaxY,
                0,
                particle.x + parallaxX,
                particle.y + parallaxY,
                particle.size * 3
            );
            gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`);
            gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`);

            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Wrap around screen
            if (particle.x < -10) particle.x = this.canvas.width + 10;
            if (particle.x > this.canvas.width + 10) particle.x = -10;
            if (particle.y > this.canvas.height + 10) {
                particle.y = -10;
                particle.x = Math.random() * this.canvas.width;
            }

            // Subtle color shift
            particle.hue += 0.1;
            if (particle.hue > 240) particle.hue = 180;
        });
    }

    drawGradientBackground(time) {
        // Animated gradient background
        const gradient = this.ctx.createLinearGradient(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );

        const hue1 = 200 + Math.sin(time * 0.001) * 20;
        const hue2 = 220 + Math.cos(time * 0.0015) * 20;

        gradient.addColorStop(0, `hsl(${hue1}, 60%, 5%)`);
        gradient.addColorStop(0.5, `hsl(${hue2}, 50%, 8%)`);
        gradient.addColorStop(1, `hsl(${hue1 + 10}, 40%, 3%)`);

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    animate(time = 0) {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Get mouse position for parallax
        const mouseX = window.mouseX || this.canvas.width / 2;
        const mouseY = window.mouseY || this.canvas.height / 2;

        // Draw layers
        this.drawGradientBackground(time);
        this.drawWaves(time);
        this.drawParticles(mouseX, mouseY);

        requestAnimationFrame((t) => this.animate(t));
    }
}

// Track mouse position for parallax
window.mouseX = window.innerWidth / 2;
window.mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
    window.mouseX = e.clientX;
    window.mouseY = e.clientY;
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new BackgroundAnimation();
    });
} else {
    new BackgroundAnimation();
}
