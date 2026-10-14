import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and applies a single, subtle reveal transition the first
 * time the element scrolls into view. Respects prefers-reduced-motion by
 * rendering content visible immediately in that case.
 *
 * Fail-safe: if IntersectionObserver isn't available, doesn't fire for any
 * reason, or the element is already on-screen at mount, a fallback timer
 * forces the content visible so nothing can get stuck hidden.
 */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (
      prefersReduced ||
      !node ||
      typeof IntersectionObserver === "undefined"
    ) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);

    const fallback = window.setTimeout(() => setVisible(true), 1000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
