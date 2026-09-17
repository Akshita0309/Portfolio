import { Github, Linkedin, Sparkles, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = {
  LinkedIn: Linkedin,
  GitHub: Github,
};

export default function Profiles() {
  return (
    <section id="profiles" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading
          index="06"
          label="Profiles"
          title="Learning & professional profiles"
          description="Where to find my work and ongoing learning. Extend src/data/profile.js to add more platforms — LeetCode, HackerRank, GeeksforGeeks, Credly, Coursera, Udemy, Microsoft Learn or Kaggle."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.learningProfiles.map((item, i) => {
          const Icon = ICONS[item.platform] ?? Sparkles;
          return (
            <Reveal key={item.platform} delay={i * 40}>
              <div
                className="h-full rounded-lg border p-6 flex flex-col"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-raised)" }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ backgroundColor: "var(--accent-2-soft)", color: "var(--accent-2)" }}
                  >
                    <Icon size={18} />
                  </span>
                  {item.achievement ? (
                    <span
                      className="rounded-full px-2.5 py-1 text-[0.7rem]"
                      style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
                    >
                      {item.achievement}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-base font-semibold">{item.platform}</h3>
                <p className="mt-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                  {item.description}
                </p>
                <p
                  className="mt-3 text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
                >
                  @{item.username}
                </p>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {item.buttonLabel} <ExternalLink size={14} />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
