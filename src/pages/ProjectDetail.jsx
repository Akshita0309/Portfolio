import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { profile } from "../data/profile";
import { slugify } from "../utils/slug";

const isPlaceholder = (url) => !url || url.startsWith("YOUR_");

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = profile.projects.find((p) => slugify(p.name) === slug);

  if (!project) {
    return (
      <div className="container-page py-24 text-center">
        <p className="section-label mb-3">Not found</p>
        <h1 className="text-2xl font-semibold mb-4" style={{ fontFamily: "var(--font-display)" }}>
          We couldn't find that project.
        </h1>
        <Link to="/#projects" className="text-sm font-medium" style={{ color: "var(--accent)" }}>
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="container-page py-14 md:py-20 max-w-3xl">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm mb-8"
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowLeft size={15} /> Back to projects
      </Link>

      {project.featured ? (
        <span
          className="inline-block rounded-full px-2.5 py-1 text-[0.7rem] mb-4"
          style={{ backgroundColor: "var(--accent-soft)", color: "var(--accent-strong)" }}
        >
          Featured project
        </span>
      ) : null}

      <h1
        className="text-3xl md:text-4xl font-semibold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {project.name}
      </h1>

      <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {!isPlaceholder(project.githubUrl) ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm"
            style={{ borderColor: "var(--border)" }}
          >
            <Github size={15} /> View code
          </a>
        ) : null}
        {!isPlaceholder(project.liveUrl) ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg-sunken)" }}
          >
            <ExternalLink size={15} /> Live demo
          </a>
        ) : null}
      </div>

      <section className="mt-10">
        <h2 className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
          Technologies
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border px-3 py-1 text-xs"
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
      </section>

      {project.features?.length ? (
        <section className="mt-10">
          <h2 className="text-sm font-medium mb-3" style={{ color: "var(--text)" }}>
            Key features
          </h2>
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-2.5 text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                <span aria-hidden="true" style={{ color: "var(--accent)" }}>
                  —
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
