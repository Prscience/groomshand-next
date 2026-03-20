import ScrollReveal from "./ScrollReveal";

export default function CtaBanner() {
  return (
    <section
      className="py-16 text-center text-white md:py-24"
      style={{
        background: "linear-gradient(135deg, var(--color-primary) 0%, #8b410b 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl lg:text-5xl">
            Ready to Upgrade Your Hoof Care?
          </h2>
          <p className="mx-auto mb-8 max-w-[48ch] text-base opacity-90">
            Free shipping on wholesale orders. Experience the difference that
            professional-grade aerosol delivery makes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://groomshand.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-8 py-4 text-base font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ color: "var(--color-primary)" }}
            >
              Shop Wholesale
            </a>
            <a
              href="https://groomshand.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
