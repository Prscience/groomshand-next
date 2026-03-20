"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-surface-2) 0%, var(--color-bg) 100%)",
      }}
    >
      <div className="mx-auto grid min-h-[85vh] max-w-[1200px] items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-0">
        {/* Text content */}
        <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              color: "var(--color-primary)",
              background: "var(--color-primary-light)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Vet &amp; Farrier Recommended
          </div>

          <h1
            className="mb-6 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] md:text-5xl lg:text-6xl"
            style={{ color: "var(--color-text)" }}
          >
            Professional Hoof Care,{" "}
            <span style={{ color: "var(--color-primary)" }}>Reinvented.</span>
          </h1>

          <p
            className="mb-8 max-w-[48ch] text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            No mess. No waste. No purple fingers. Aerosol thrush treatment and
            wound care trusted by top farriers, vets, and equestrians worldwide.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://groomshand.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-8 py-4 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "var(--color-primary)" }}
            >
              Shop Products
            </a>
            <button
              onClick={() => document.getElementById('distributors')?.scrollIntoView({ behavior: 'smooth' })}
              className="cursor-pointer rounded-xl border-[1.5px] px-8 py-4 text-base font-semibold transition-all hover:-translate-y-0.5"
              style={{
                color: "var(--color-primary)",
                borderColor: "var(--color-primary)",
              }}
            >
              Find Retailers
            </button>
          </div>

          {/* Stats */}
          <div
            className="mt-10 flex gap-8 border-t pt-8 md:gap-10"
            style={{ borderColor: "var(--color-divider)" }}
          >
            {[
              { value: "20+", label: "Years of farrier experience" },
              { value: "5★", label: "Average customer rating" },
              { value: "6", label: "Countries distributed" },
            ].map((stat) => (
              <div key={stat.label} className="text-left">
                <div
                  className="font-[family-name:var(--font-display)] text-2xl font-extrabold md:text-3xl"
                  style={{ color: "var(--color-text)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-1 text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image — fully visible, proper containment */}
        <div className="relative flex items-center justify-center md:justify-end">
          <div className="relative w-full max-w-[520px]">
            <Image
              src="/images/thrush-solution.png"
              alt="Groom's Hand Thrush Solution aerosol spray next to a treated horse hoof"
              width={960}
              height={880}
              priority
              className="h-auto w-full rounded-2xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
