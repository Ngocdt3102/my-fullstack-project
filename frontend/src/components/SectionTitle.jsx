export default function SectionTitle({ eyebrow, title, desc, center = true }) {
  return (
    <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-8 max-w-3xl"}>
      <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-500">{eyebrow}</p>
      <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl">{title}</h2>
      {desc && <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p>}
    </div>
  );
}