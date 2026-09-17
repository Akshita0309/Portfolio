import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-sunken)" }}
    >
      <div className="container-page py-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            {profile.name}
          </p>
          <p className="mt-1 max-w-sm text-sm" style={{ color: "var(--text-muted)" }}>
            Computer Science graduate building full-stack applications with
            Java, Spring Boot and React.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{ color: "var(--text-muted)" }}
          >
            <Linkedin size={17} />
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{ color: "var(--text-muted)" }}
          >
            <Github size={17} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" style={{ color: "var(--text-muted)" }}>
            <Mail size={17} />
          </a>
        </div>
      </div>

      <div
        className="container-page py-4 border-t flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} {profile.name}. Designed &amp; built by {profile.name}.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 text-xs self-start sm:self-auto"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowUp size={13} /> Back to top
        </a>
      </div>
    </footer>
  );
}
