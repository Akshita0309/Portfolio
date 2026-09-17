import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading index="01" label="About" title="Background" />
      </Reveal>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-5 max-w-2xl">
            {profile.aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <dl className="grid grid-cols-2 gap-5">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border p-5"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-raised)" }}
              >
                <dt
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}
                >
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
