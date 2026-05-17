const capabilities = [
  {
    title: "App Development",
    description:
      "We build web and mobile apps from the ground up. From early concept through launch and beyond — our team owns the full product lifecycle and ships software that stands up at scale.",
    accent: "from-violet-500 to-purple-600",
    glow: "rgba(124,58,237,0.3)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    points: ["Web & Mobile Products", "Full Product Lifecycle", "Consumer & B2B Apps", "Zero to Launch"],
  },
  {
    title: "Company Growth",
    description:
      "We grow the companies we build. Through product-led growth, distribution strategy, and relentless iteration, we move our businesses from early traction to market leadership.",
    accent: "from-cyan-500 to-blue-600",
    glow: "rgba(6,182,212,0.3)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    points: ["Product-Led Growth", "Distribution Strategy", "Revenue Expansion", "Market Leadership"],
  },
  {
    title: "Scale & Operations",
    description:
      "We build the infrastructure and teams that let our companies scale without breaking. From engineering to operations, we invest in the fundamentals that make a business durable.",
    accent: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    points: ["Cloud Infrastructure", "Engineering Teams", "Operational Excellence", "Long-Term Durability"],
  },
];

export default function Services() {
  return (
    <section id="what-we-do" className="py-28 px-6 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.4), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-violet-400 uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            We build. We operate.{" "}
            <span className="gradient-text">We grow.</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            We build, own, and operate internet companies and apps — from the
            first line of code to long-term market leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div key={cap.title} className="glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300">
              <div className={`h-1 w-full bg-gradient-to-r ${cap.accent}`} />

              <div className="p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white"
                  style={{ background: `radial-gradient(circle, ${cap.glow} 0%, transparent 70%)`, border: `1px solid ${cap.glow}` }}
                >
                  {cap.icon}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{cap.description}</p>

                <ul className="space-y-2">
                  {cap.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="w-1 h-1 rounded-full bg-slate-500 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
