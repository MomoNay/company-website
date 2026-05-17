export default function Hero() {
  return (
    <section
      className="relative flex min-h-[520px] items-center justify-center bg-[#0c2340] sm:min-h-[600px] lg:min-h-[680px]"
      aria-label="Orbit Drops LLC"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/nyc.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#0c2340]/72" />

      <div className="relative z-10 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full border-2 border-white/40 sm:h-44 sm:w-44">
            <div className="text-center">
              <p className="font-serif text-3xl italic leading-none sm:text-4xl">
                Orbit
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">
                Drops LLC
              </p>
            </div>
          </div>

          <p className="mx-auto max-w-lg text-sm font-light leading-relaxed tracking-wide text-white/85 sm:text-base">
            We build and scale companies.
          </p>
        </div>
      </div>
    </section>
  );
}
