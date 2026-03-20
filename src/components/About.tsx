import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  "Shod Kentucky Derby winner Giacamo",
  "Shod Belmont Stakes winner Summer Bird",
  "Worked with 2024 Olympic show jumping qualifiers",
  "Based in Ocala, FL — horse capital of the world",
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24" style={{ background: "var(--color-surface-2)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal>
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/sam-mckee.jpg"
                alt="Samuel McKee, founder of Groom's Hand, with Carissimo25"
                width={600}
                height={750}
                className="h-auto w-full object-cover"
                style={{ aspectRatio: "4/5" }}
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-primary)" }}
              >
                Our Story
              </p>
              <h2
                className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl"
                style={{ color: "var(--color-text)" }}
              >
                Created by a Third-Generation Farrier
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Samuel McKee has been shoeing horses since age 16 — over 20 years in
                the trade. Based in Ocala, Florida, he&apos;s worked with Kentucky Derby
                winners, Belmont winners, Grand Prix champions, and Olympic-level
                competitors.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                Frustrated with messy, outdated thrush treatments, Sam created
                Groom&apos;s Hand to deliver a cleaner, more effective solution for
                the modern equine professional.
              </p>
              <div className="mt-2 flex flex-col gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3 text-sm" style={{ color: "var(--color-text)" }}>
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{ color: "var(--color-success)" }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
