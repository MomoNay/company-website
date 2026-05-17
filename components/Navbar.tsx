const navLinks = [
  { label: "About", href: "#about" },
  { label: "Focus Areas", href: "#focus" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="bg-[#0c2340] text-white">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xs font-semibold tracking-widest">
            OD
          </span>
          <span className="hidden text-sm font-semibold tracking-wide sm:block">
            Orbit Drops LLC
          </span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 transition-colors hover:text-white sm:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
