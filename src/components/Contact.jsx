import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading
          index="08"
          label="Contact"
          title="Get in touch"
          description="Have a role, project or question in mind? I'd like to hear from you."
        />
      </Reveal>

      <Reveal>
        <ul className="space-y-4">
            <li>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm"
                style={{ color: "var(--text)" }}
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Mail size={15} />
                </span>
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm"
                style={{ color: "var(--text)" }}
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Linkedin size={15} />
                </span>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-sm"
                style={{ color: "var(--text)" }}
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Github size={15} />
                </span>
                GitHub
              </a>
            </li>
        </ul>
      </Reveal>
    </section>
  );
}
