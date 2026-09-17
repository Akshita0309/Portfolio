import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CATEGORY_LABELS = {
  languages: "Programming languages",
  frontend: "Frontend",
  backend: "Backend",
  databases: "Databases",
  tools: "DevOps & tools",
  cloud: "Cloud",
  ai: "AI / ML",
};

export default function Skills() {
  const categories = Object.entries(profile.skills);

  return (
    <section id="skills" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading
          index="02"
          label="Skills"
          title="Technical skills"
          description="Grouped by area — the tools and technologies I use most."
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(([key, items], i) => (
          <Reveal key={key} delay={i * 40}>
            <div
              className="h-full rounded-lg border p-5"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-raised)",
                borderLeftWidth: "3px",
                borderLeftColor: "var(--accent)",
              }}
            >
              <h3 className="text-sm font-medium mb-3.5" style={{ color: "var(--text)" }}>
                {CATEGORY_LABELS[key] ?? key}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-full border px-3 py-1 text-xs"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
