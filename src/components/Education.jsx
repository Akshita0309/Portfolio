import { GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading index="07" label="Education" title="Academic background" />
      </Reveal>

      {profile.education.map((entry, i) => (
        <Reveal key={entry.degree} delay={i * 40}>
          <div
            className="rounded-lg border p-6 flex flex-col sm:flex-row sm:items-start gap-4"
            style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-raised)" }}
          >
            <span
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
              style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
            >
              <GraduationCap size={20} />
            </span>
            <div>
              <p
                className="text-xs mb-1"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                {entry.period}
              </p>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                {entry.degree}
              </h3>
              <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
                {entry.specialization}
              </p>
              <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                {entry.institution} <span aria-hidden="true">·</span> {entry.score}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
