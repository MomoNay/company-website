const areas = [
  {
    title: "E-Commerce Brands",
    description:
      "Direct-to-consumer brands built for scale — from product positioning and supply chain to paid acquisition and retention.",
    href: "#about",
  },
  {
    title: "SaaS & Software",
    description:
      "B2B and B2C software products designed for recurring revenue, operational leverage, and long-term enterprise value.",
    href: "#about",
  },
  {
    title: "Consumer Applications",
    description:
      "Mobile and web applications developed in-house, launched with disciplined go-to-market, and grown through product-led execution.",
    href: "#about",
  },
  {
    title: "Build-to-Exit Model",
    description:
      "We incubate, operate, and scale ventures with a clear path to liquidity — treating every launch as a long-term asset.",
    href: "#contact",
  },
];

function ArrowIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function FocusAreas() {
  return (
    <section
      id="focus"
      className="relative bg-[#0c2340] py-20 text-white lg:py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-[#0c2340]/88" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mb-14 text-center text-2xl font-bold uppercase tracking-[0.12em] text-white sm:text-3xl">
          Focus Areas
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {areas.map((area) => (
            <div key={area.title}>
              <h3 className="mb-4 text-lg font-bold leading-snug">{area.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-white/75">{area.description}</p>
              <a
                href={area.href}
                className="link-arrow text-white/90 hover:text-white"
              >
                Learn More
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
