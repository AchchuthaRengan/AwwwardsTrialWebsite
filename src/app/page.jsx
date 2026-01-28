"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Scene from "../components/Scene";

const highlights = [
  {
    title: "Immersive Storytelling",
    copy: "WebGL-driven moments align with tactile typography and bold gradients."
  },
  {
    title: "Fluid Motion",
    copy: "Lenis smooth scrolling orchestrates section reveals with cinematic ease."
  },
  {
    title: "Fibre Crafted",
    copy: "React Three Fibre powers our responsive 3D hero and ambient lighting."
  }
];

export default function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Awwwards Submission 2024</p>
          <h1>
            Luminous <span>Orbit</span> Studio
          </h1>
          <p className="hero__copy">
            A sculpted digital experience blending WebGL artistry, smooth motion, and
            bold editorial typography.
          </p>
          <div className="hero__actions">
            <button className="button">Request Invitation</button>
            <button className="button button--ghost">View Case Study</button>
          </div>
          <div className="hero__meta">
            <div>
              <span>Launch</span>
              <strong>Jan 2025</strong>
            </div>
            <div>
              <span>Category</span>
              <strong>Studio Portfolio</strong>
            </div>
            <div>
              <span>Stack</span>
              <strong>Next.js 16 · WebGL · Lenis</strong>
            </div>
          </div>
        </div>
        <div className="hero__canvas">
          <Scene />
          <div className="hero__glow" />
        </div>
      </section>

      <section className="highlights">
        <div className="highlights__header">
          <h2>Crafted for impact</h2>
          <p>
            Designed as an Awwwards-ready submission, every detail is tuned for
            elegance, speed, and motion.
          </p>
        </div>
        <div className="highlights__grid">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Ready for the jury?</h2>
          <p>
            Submit with confidence and let the immersive narrative do the talking.
          </p>
        </div>
        <button className="button button--light">Start Submission</button>
      </section>
    </main>
  );
}
