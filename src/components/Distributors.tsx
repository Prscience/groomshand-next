import ScrollReveal from "./ScrollReveal";

const distributors = [
  { flag: "🇪🇺", country: "Europe", name: "Gibbins", url: "https://www.gibbins.co.uk/" },
  { flag: "🇬🇧", country: "United Kingdom", name: "Stromsholm", url: "https://www.stromsholm.co.uk/" },
  { flag: "🇫🇷", country: "France", name: "Handmade Shoes", url: "https://www.handmadeshoes-france.fr/" },
  { flag: "🇦🇺", country: "Australia", name: "The Tack Room", url: "https://thetackroom.com.au/" },
  { flag: "🇨🇦", country: "Canada", name: "High Country", url: "https://www.highcountryhorseshoes.ca/" },
];

export default function Distributors() {
  return (
    <section id="distributors" className="py-16 md:py-24" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-primary)" }}
          >
            Global Distribution
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text)" }}
          >
            Find a Retailer Near You
          </h2>
          <p
            className="mx-auto mt-4 max-w-[52ch] text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            Groom&apos;s Hand products are available through authorized distributors
            worldwide. RJ Matthews is the National Distributor in the USA.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
            {distributors.map((d) => (
              <a
                key={d.country}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border p-4 text-center no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md md:p-6"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-divider)",
                }}
              >
                <div className="mb-3 text-3xl">{d.flag}</div>
                <div
                  className="font-[family-name:var(--font-display)] text-sm font-bold"
                  style={{ color: "var(--color-text)" }}
                >
                  {d.country}
                </div>
                <div className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                  {d.name}
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
