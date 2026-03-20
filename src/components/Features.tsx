import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "No Purple Fingers",
    text: "Aerosol spray delivery means clean, easy application every time. No more messy brush-on treatments staining your hands and clothes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Formaldehyde Free",
    text: "Safe, non-caustic formula without harsh chemicals. No petroleum-based products. Gentle on hooves, tough on thrush.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "360° Continuous Spray",
    text: "Bag-in-bottle aerosol technology works at any angle, even upside down. Reach every part of the hoof effortlessly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Built-In Hoof Pick",
    text: "Every bottle comes with an integrated hoof pick attached. One tool, complete treatment — no extra gear needed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "1.5x More Formula",
    text: "Get 50% more product than typical treatments. Less frequent replacement, more value per can for busy professionals.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
        <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2H9z" />
        <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
      </svg>
    ),
  },
  {
    title: "USEF-FEI Compliant",
    text: "Competition-safe formulas. Antibiotic-free Deep Thrush Gel meets regulatory requirements for show and competitive horses.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-surface-2)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-primary)" }}
          >
            What Sets Us Apart
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text)" }}
          >
            Built by a Farrier, for Professionals
          </h2>
          <p
            className="mx-auto mt-4 max-w-[52ch] text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            20+ years of hands-on experience in every can. Here&apos;s why equine
            professionals trust Groom&apos;s Hand.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((feature) => (
            <ScrollReveal key={feature.title}>
              <div
                className="rounded-2xl border p-8 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-divider)",
                }}
              >
                <div
                  className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--color-primary-light)",
                    color: "var(--color-primary)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  className="mb-3 font-[family-name:var(--font-display)] text-lg font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {feature.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
