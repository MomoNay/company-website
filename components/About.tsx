export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2 className="section-heading text-[#0c2340] font-serif text-3xl sm:text-4xl lg:text-[2.75rem]">
            Building and Scaling Internet Businesses Through Operator-Led
            Execution.
          </h2>
        </div>

        <div className="space-y-6 text-[15px] leading-[1.75] text-[#4a5568]">
          <p>
            Orbit Drops LLC is a builder and operator of internet companies.
          </p>
          <p>
            Our portfolio spans direct-to-consumer e-commerce brands, SaaS
            platforms, and consumer applications. From product development
            through growth, infrastructure, and eventual exit, we remain
            hands-on owners focused on durable value creation.
          </p>

          <blockquote className="border-l-4 border-[#1e4d7b] pl-6 pt-2">
            <p className="font-serif text-xl italic leading-snug text-[#1e4d7b] sm:text-2xl">
              &ldquo;We are operators first. Every company we launch is built to
              compound.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
