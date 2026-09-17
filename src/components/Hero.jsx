import { useEffect, useState } from "react";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { profile } from "../data/profile";

const TERMINAL_LINES = [
  { prompt: "whoami", output: profile.name },
  { prompt: "cat focus.txt", output: "Full-stack development · AI/ML · Cloud" },
  {
    prompt: "stack --primary",
    output: "Java · Spring Boot · React · MySQL/PostgreSQL",
  },
  { prompt: "status", output: "Open to software engineering roles" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setMounted(true);
      return;
    }
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="home"
      className="container-page grid gap-12 pt-16 pb-20 md:pt-24 md:pb-28 md:grid-cols-[1.1fr_0.9fr] md:items-center"
    >
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <p className="section-label mb-4">Portfolio</p>
        <h1
          className="text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.05] font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {profile.name}
        </h1>
        <p
          className="mt-4 text-lg md:text-xl"
          style={{ color: "var(--text-muted)" }}
        >
          Computer Science Graduate <span aria-hidden="true">·</span> Software
          Development <span aria-hidden="true">·</span> AI/ML Enthusiast
        </p>
        <p
          className="mt-6 max-w-xl text-base leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {profile.intro}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg-sunken)" }}
          >
            View my projects
            <ArrowRight size={15} />
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors duration-150"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            <Download size={15} />
            Download resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium"
            style={{ color: "var(--text-muted)" }}
          >
            Contact me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-150"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-150"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.8s ease 0.15s, transform 0.8s ease 0.15s",
        }}
      >
        <div
          className="rounded-lg border overflow-hidden shadow-sm"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-raised)" }}
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3 border-b"
            style={{ borderColor: "var(--border)" }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#e6564c" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#e8b13d" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#4caf6e" }} />
            <span
              className="ml-3 text-xs"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              akshita@dev — zsh
            </span>
          </div>
          <div className="p-5" style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
            {TERMINAL_LINES.map((line, i) => (
              <div key={line.prompt} className={i > 0 ? "mt-4" : ""}>
                <p style={{ color: "var(--accent-2)" }}>
                  <span style={{ color: "var(--accent)" }}>❯</span> {line.prompt}
                </p>
                <p className="mt-1" style={{ color: "var(--text)" }}>
                  {line.output}
                </p>
              </div>
            ))}
            <p className="mt-4" style={{ color: "var(--accent)" }}>
              ❯ <span className="animate-pulse">▌</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
