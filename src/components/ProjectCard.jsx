import { Link } from "react-router-dom";
import { Github, ArrowUpRight } from "lucide-react";
import { slugify } from "../utils/slug";

const isPlaceholder = (url) => !url || url.startsWith("YOUR_");

export default function ProjectCard({ project, featured = false }) {
  const slug = slugify(project.name);

  return (
    <article
      className="group h-full flex flex-col rounded-lg border p-6 transition-colors duration-200"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-raised)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="text-lg font-semibold leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.name}
        </h3>
        {featured ? (
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-[0.7rem]"
            style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
          >
            Featured
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech) => (
          <li
            key={tech}
            className="rounded-full border px-2.5 py-1 text-xs"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
        {!isPlaceholder(project.githubUrl) ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm"
            style={{ color: "var(--text)" }}
          >
            <Github size={15} /> Code
          </a>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 text-sm cursor-not-allowed"
            style={{ color: "var(--text-muted)" }}
            title="Add your GitHub URL in src/data/profile.js"
          >
            <Github size={15} /> Code
          </span>
        )}

        <Link
          to={`/projects/${slug}`}
          className="ml-auto inline-flex items-center gap-1 text-sm font-medium"
          style={{ color: "var(--accent)" }}
        >
          View details <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
