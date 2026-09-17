import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

// NOTE ON FUTURE GITHUB API INTEGRATION
// -----------------------------------------------------------------------
// `profile.repositories` in src/data/profile.js holds manually curated
// repository highlights (name, description, technologies, stars, url).
// To later pull this data live instead of editing it by hand, replace the
// static array with a fetch to the GitHub REST API, for example:
//
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
//       .then((res) => res.json())
//       .then(setRepos);
//   }, []);
//
// No token is required for public read-only access at low request volumes.
// This component does not perform that fetch yet — it renders the curated
// `profile.projects` data so the site works without any external calls.

export default function Projects() {
  return (
    <section id="projects" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading
          index="04"
          label="Projects"
          title="Things I've built"
          description="A mix of full-stack applications and focused, single-purpose systems."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {profile.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 40} className="h-full">
            <ProjectCard project={project} featured={project.featured} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
