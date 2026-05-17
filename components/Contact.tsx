export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-violet-500/10 pointer-events-none" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/5 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="text-sm font-medium text-cyan-400 uppercase tracking-widest mb-4">
          Contact
        </p>

        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
          Let&apos;s build{" "}
          <span className="gradient-text">something real.</span>
        </h2>

        <p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re looking to partner, join our team, or explore what
          we&apos;re working on — we&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:orbitdropsllc@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            orbitdropsllc@gmail.com
          </a>
        </div>

        <p className="text-sm text-slate-600">
          Orbit Drops LLC &mdash; Building and growing internet companies.
        </p>
      </div>
    </section>
  );
}
