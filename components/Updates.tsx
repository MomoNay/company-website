const updates = [
  {
    date: "Q1 2026",
    title: "Expanding Our Consumer Brand Portfolio",
    href: "#about",
    featured: false,
  },
  {
    date: "January 2026",
    title: "New SaaS Platform Enters Private Beta",
    href: "#focus",
    featured: false,
  },
  {
    date: "December 2025",
    title: "Operator-Led Growth Framework Across Portfolio Companies",
    href: "#about",
    featured: true,
  },
];

function ArrowIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Updates() {
  return (
    <section id="updates" className="bg-[#e4eaf0] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="section-heading mb-12 text-center text-2xl font-bold uppercase tracking-[0.12em] text-[#0c2340] sm:text-3xl">
          Latest Updates
        </h2>

        <div className="grid gap-0 md:grid-cols-3">
          {updates.map((item) => (
            <article
              key={item.title}
              className={`flex flex-col border border-[#b8c5d4] p-8 md:border-r-0 md:last:border-r ${
                item.featured
                  ? "bg-[#c5d4e4] md:border-r"
                  : "bg-white"
              }`}
            >
              <time className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#5a6b7d]">
                {item.date}
              </time>
              <h3 className="mb-8 flex-1 text-lg font-bold leading-snug text-[#0c2340]">
                {item.title}
              </h3>
              <a
                href={item.href}
                className="link-arrow text-[#1e4d7b] hover:text-[#2d6ba3]"
              >
                Read More
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
