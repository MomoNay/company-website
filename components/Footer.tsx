export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Orbit Drops LLC. All rights reserved.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#what-we-do" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
            What We Do
          </a>
          <a href="#contact" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
            Contact
          </a>
          <a href="mailto:orbitdropsllc@gmail.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors duration-200">
            orbitdropsllc@gmail.com
          </a>
        </nav>
      </div>
    </footer>
  );
}
