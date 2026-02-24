import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/data/siteConfig";

/** Animated typing effect for the hero tagline */
function TypingEffect({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(true), 500);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayedText}
      {showCursor && <span className="animate-blink text-accent">|</span>}
    </span>
  );
}

/** Hero section for the home page with greeting, bio, and tech stack */
export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 animate-fade-in">
        {/* Headshot */}
        <img
          src="/headshot.jpg"
          alt={siteConfig.name}
          className="mx-auto mb-8 h-52 w-52 rounded-full border-2 border-accent/30 object-cover shadow-lg shadow-accent/10"
        />

        <p className="mb-4 font-mono text-sm text-accent md:text-base">
          Hello world, I&apos;m
        </p>

        <h1 className="mb-4 font-mono text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        <p className="mb-4 font-mono text-lg text-gray-400 md:text-xl">
          <TypingEffect text={siteConfig.tagline} />
        </p>

        <p className="mb-8 inline-flex items-center gap-1.5 text-sm text-gray-500">
          <FiMapPin size={14} />
          {siteConfig.location}
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-gray-400 leading-relaxed">
          {siteConfig.bio}
        </p>

        {/* CTA */}
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <Link to="/projects">
            <Button variant="primary">View My Work</Button>
          </Link>
          <Link to="/contact">
            <Button variant="secondary">Get in Touch</Button>
          </Link>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {siteConfig.techStack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
