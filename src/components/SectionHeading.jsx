export default function SectionHeading({ index, label, title, description }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="section-label mb-3">
        {index ? `${index} / ` : ""}
        {label}
      </p>
      <h2
        className="text-3xl md:text-4xl font-semibold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className="mt-3 max-w-xl text-base"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
