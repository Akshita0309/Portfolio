import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading index="03" label="Experience" title="Where I've worked" />
      </Reveal>

      <ol className="relative border-l pl-8" style={{ borderColor: "var(--border)" }}>
        {profile.experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 60} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden="true"
            />
            <p
              className="text-xs mb-1"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              {job.period}
            </p>
            <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              {job.role}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: "var(--accent)" }}>
              {job.company}
            </p>
            <p
              className="mt-3 max-w-2xl text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {job.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
