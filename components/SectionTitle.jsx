export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-zinc-400">{description}</p>
      ) : null}
    </div>
  );
}
