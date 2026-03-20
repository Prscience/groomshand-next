import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const products = [
  {
    name: "Thrush Solution®",
    desc: "Aerosol spray with built-in hoof pick. Kills thrush and white line disease. Non-caustic, 360° continuous spray at any angle.",
    image: "/images/thrush-spray-card.jpg",
    badge: "Best Seller",
    badgeColor: "var(--color-primary)",
    bgGradient: "linear-gradient(135deg, #fef0e0 0%, #fce5cc 100%)",
    link: "https://groomshand.com/thrush-solution",
    price: "From $60",
  },
  {
    name: "Deep Thrush Gel®",
    desc: "Clinical strength gel that penetrates deep into the sulcus at 100 psi. Lasts up to 24 hours. USEF-FEI Compliant and antibiotic-free.",
    image: "/images/deep-thrush-gel.jpg",
    badge: "Clinical Strength",
    badgeColor: "var(--color-primary)",
    bgGradient: "linear-gradient(135deg, #e8eef8 0%, #dce6f2 100%)",
    link: "https://groomshand.com/deep-thrush-gel",
    price: "From $60",
  },
  {
    name: "Derma360 Wound Solution®",
    desc: "Advanced wound and skin treatment. Increases oxygen content to inhibit pathogens and accelerate healing. No steroids, no antibiotics.",
    image: "/images/derma360.png",
    badge: "Wound Care",
    badgeColor: "var(--color-accent)",
    bgGradient: "linear-gradient(135deg, #e8f3f0 0%, #d9ebe6 100%)",
    link: "https://groomshand.com/derma360-wound-solution",
    price: "From $60",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-primary)" }}
          >
            Our Products
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text)" }}
          >
            The Complete Equine Care Line
          </h2>
          <p
            className="mx-auto mt-4 max-w-[52ch] text-base"
            style={{ color: "var(--color-text-muted)" }}
          >
            Three targeted solutions trusted by professionals worldwide. Aerosol
            delivery means no mess, no waste — just results.
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-[480px] gap-8 md:max-w-none md:grid-cols-3">
          {products.map((product) => (
            <ScrollReveal key={product.name}>
              <div
                className="group overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-divider)",
                }}
              >
                {/* Image */}
                <div
                  className="relative flex aspect-square items-center justify-center overflow-hidden p-8"
                  style={{ background: product.bgGradient }}
                >
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide text-white"
                    style={{ background: product.badgeColor }}
                  >
                    {product.badge}
                  </span>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-auto w-3/4 object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="mb-4 text-sm tracking-widest text-amber-500">★★★★★</div>
                  <h3
                    className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold"
                    style={{ color: "var(--color-text)" }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-[family-name:var(--font-display)] text-lg font-bold"
                      style={{ color: "var(--color-text)" }}
                    >
                      {product.price}
                    </span>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 text-sm font-semibold transition-all"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Learn More
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
