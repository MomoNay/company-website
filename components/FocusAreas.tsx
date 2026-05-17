const areas = [
  {
    label: "Commerce",
    title: "E-Commerce Brands",
    description:
      "Direct-to-consumer brands built for scale — from positioning and supply chain to acquisition and retention.",
    href: "#about",
    featured: false,
  },
  {
    label: "Software",
    title: "SaaS & Applications",
    description:
      "B2B and B2C software products designed for customer satisfaction and long-term enterprise value.",
    href: "#about",
    featured: false,
  },
  {
    label: "Strategy",
    title: "Build-to-Exit Model",
    description:
      "We incubate, operate, and scale ventures with a clear path to liquidity, treating every launch as a long-term asset.",
    href: "#about",
    featured: true,
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export default function FocusAreas() {
  return (
    <section id="focus" className="bg-[#e4eaf0] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="section-heading mb-12 text-center text-2xl font-bold uppercase tracking-[0.12em] text-[#0c2340] sm:text-3xl">
          Focus Areas
        </h2>

        <div className="grid gap-0 md:grid-cols-3">
          {areas.map((area) => (
            <article
              key={area.title}
              className={`flex flex-col border border-[#b8c5d4] p-8 md:border-r-0 md:last:border-r ${
                area.featured ? "bg-[#c5d4e4] md:border-r" : "bg-white"
              }`}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5a6b7d]">
                {area.label}
              </p>
              <h3 className="mb-4 text-lg font-bold leading-snug text-[#0c2340]">
                {area.title}
              </h3>
              <p className="mb-8 flex-1 text-sm leading-relaxed text-[#4a5568]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
