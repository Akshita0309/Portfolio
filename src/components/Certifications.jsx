import { Award, ExternalLink, FileText } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const isPlaceholder = (value) => !value || value.startsWith("YOUR_");

export default function Certifications() {
  return (
    <section id="certifications" className="container-page py-16 md:py-24">
      <Reveal>
        <SectionHeading
          index="05"
          label="Certifications"
          title="Certifications & credentials"
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 30}>
            <div
              className="h-full rounded-lg border p-5 flex flex-col"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-raised)" }}
            >
              <Award size={18} style={{ color: "var(--accent)" }} />
              <h3 className="mt-3 text-sm font-semibold leading-snug">{cert.name}</h3>
              <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                {cert.issuer}
              </p>
              {cert.description ? (
                <p className="mt-2 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {cert.description}
                </p>
              ) : null}

              <dl className="mt-3 space-y-1 text-xs" style={{ color: "var(--text-muted)" }}>
                <div className="flex justify-between gap-2">
                  <dt>Completed</dt>
                  <dd style={{ fontFamily: "var(--font-mono)" }}>
                    {isPlaceholder(cert.date) ? "Add date" : cert.date}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt>Credential ID</dt>
                  <dd style={{ fontFamily: "var(--font-mono)" }}>
                    {isPlaceholder(cert.credentialId) ? "—" : cert.credentialId}
                  </dd>
                </div>
              </dl>

              <div
                className="mt-4 pt-3 border-t flex items-center gap-4"
                style={{ borderColor: "var(--border)" }}
              >
                {!isPlaceholder(cert.certificateUrl) ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium"
                    style={{ color: "var(--text)" }}
                  >
                    <FileText size={13} /> Certificate
                  </a>
                ) : null}
                {!isPlaceholder(cert.verifyUrl) ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    <ExternalLink size={13} /> Verify
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
