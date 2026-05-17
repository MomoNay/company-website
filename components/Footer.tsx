const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0c2340] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-white/25">
              <span className="font-serif text-2xl italic">OD</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              Orbit Drops LLC — builder and operator of e-commerce brands, SaaS
              products, and consumer applications.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:text-right">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/50">
              Inquiries
            </p>
            <a
              href="mailto:orbitdropsllc@gmail.com"
              className="text-sm text-white/90 transition-colors hover:text-white"
            >
              orbitdropsllc@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-8 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Orbit Drops LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
