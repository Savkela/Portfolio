import React, { useEffect, useRef } from 'react';

const Background = () => {
    const canvasRef = useRef();
    const ctxRef = useRef();
    const particlesRef = useRef([]);
    const pointRef = useRef({ x: 0, y: 0 });
    const hueRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
        const body = document.body;

        body.style.backgroundColor = 'black';
        body.style.overflow = 'hidden';
        body.appendChild(canvas);

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        pointRef.current = { x: width / 2, y: height / 2 };

        function Particle() { }

        Particle.prototype = {
            init() {
                this.hue = hueRef.current;
                this.alpha = 0;
                this.size = this.random(1, 5);
                this.x = this.random(0, width);
                this.y = this.random(0, height);
                this.velocity = this.size * 0.5;
                this.changed = null;
                this.changedFrame = 0;
                this.maxChangedFrames = 30;
                return this;
            },
            draw() {
                ctxRef.current.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
                ctxRef.current.beginPath();
                ctxRef.current.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                ctxRef.current.stroke();
                this.update();
            },
            update() {
                if (this.changed) {
                    this.alpha *= 0.92;
                    this.size += 2;
                    this.changedFrame++;
                    if (this.changedFrame > this.maxChangedFrames) {
                        this.reset();
                    }
                } else if (this.distance(pointRef.current.x, pointRef.current.y) < 60) {
                    this.changed = true;
                } else {
                    let dx = pointRef.current.x - this.x;
                    let dy = pointRef.current.y - this.y;
                    let angle = Math.atan2(dy, dx);

                    this.alpha += 0.01;
                    this.x += this.velocity * Math.cos(angle);
                    this.y += this.velocity * Math.sin(angle);
                    this.velocity += 0.02;
                }
            },
            reset() {
                this.init();
            },
            distance(x, y) {
                return Math.hypot(x - this.x, y - this.y);
            },
            random(min, max) {
                return Math.random() * (max - min) + min;
            },
        };

        function animate() {
            ctxRef.current.fillStyle = 'rgba(0,0,0, .2)';
            ctxRef.current.fillRect(0, 0, width, height);
            particlesRef.current.forEach((p) => {
                p.draw();
            });
            hueRef.current += 0.3;
            window.requestAnimationFrame(animate);
        }

        function touches(e) {
            pointRef.current.x = e.touches ? e.touches[0].clientX : e.clientX;
            pointRef.current.y = e.touches ? e.touches[0].clientY : e.clientY;
        }

        function setup() {
            for (let i = 0; i < 200; i++) {
                setTimeout(() => {
                    let p = new Particle().init();
                    particlesRef.current.push(p);
                }, i * 10);
            }

            canvas.addEventListener('mousemove', touches);
            canvas.addEventListener('touchmove', touches);
            canvas.addEventListener('mouseleave', () => {
                pointRef.current = { x: width / 2, y: height / 2 };
            });
            window.addEventListener('resize', () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
                pointRef.current = { x: width / 2, y: height / 2 };
            });
            animate();
        }

        setup();
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Background;
