import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu when the viewport is resized back to desktop.
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur transition-[padding] duration-200"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)",
      }}
    >
      <div
        className={`container-page flex items-center justify-between ${
          scrolled ? "py-2.5" : "py-4"
        } transition-[padding] duration-200`}
      >
        <a
          href="#home"
          className="font-semibold text-lg tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
          aria-label={`${profile.name} — home`}
        >
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-md mr-2 align-middle text-sm"
            style={{
              backgroundColor: "var(--accent-soft)",
              color: "var(--accent-strong)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {profile.initials}
          </span>
          <span className="align-middle">{profile.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-150"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg-sunken)" }}
          >
            <Download size={15} />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border"
            style={{ borderColor: "var(--border)" }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-sm border-b last:border-none"
              style={{ borderColor: "var(--border)", color: "var(--text)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg-sunken)" }}
          >
            <Download size={15} />
            Download resume
          </a>
        </nav>
      ) : null}
    </header>
  );
}
