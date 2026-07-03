export default function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.25em] text-orange-300">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        {desc && <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{desc}</p>}
      </div>
    </section>
  );
}