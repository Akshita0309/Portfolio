import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email address.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Enter a subject.";
    if (!form.message.trim()) next.message = "Enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(form.subject.trim());
    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    );
    const mailtoLink = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
    setForm(initialForm);
  };

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

      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${profile.email}`}
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

        <Reveal delay={80}>
          {submitted ? (
            <div
              role="status"
              className="rounded-lg border p-6 flex items-start gap-3"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-raised)",
              }}
            >
              <CheckCircle2 size={20} style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-medium">Message ready to send.</p>
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  This form isn't wired up to an email service yet, so nothing
                  was sent — connect one in{" "}
                  <code style={{ fontFamily: "var(--font-mono)" }}>
                    Contact.jsx
                  </code>{" "}
                  to make it live.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Send another message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  error={errors.name}
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  error={errors.email}
                />
              </div>
              <Field
                label="Subject"
                id="subject"
                value={form.subject}
                onChange={handleChange("subject")}
                error={errors.subject}
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-1.5"
                  style={{ color: "var(--text)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className="w-full rounded-md border px-3.5 py-2.5 text-sm outline-none"
                  style={{
                    borderColor: errors.message ? "#c94a3f" : "var(--border)",
                    backgroundColor: "var(--bg)",
                    color: "var(--text)",
                  }}
                />
                {errors.message ? (
                  <p
                    id="message-error"
                    className="mt-1 text-xs"
                    style={{ color: "#c94a3f" }}
                  >
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-transform duration-150 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg-sunken)",
                }}
              >
                Send message <Send size={15} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", value, onChange, error }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm mb-1.5"
        style={{ color: "var(--text)" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-md border px-3.5 py-2.5 text-sm outline-none"
        style={{
          borderColor: error ? "#c94a3f" : "var(--border)",
          backgroundColor: "var(--bg)",
          color: "var(--text)",
        }}
      />
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1 text-xs"
          style={{ color: "#c94a3f" }}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
