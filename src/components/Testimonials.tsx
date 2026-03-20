import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "Groom's Hand Thrush Solution is the best product I have used. I use it on hoofs, cuts and rain rot. Easy to use and protects the hoof. Never go without it.",
    author: "Velvet S.",
  },
  {
    quote:
      "Groom's Hand Derma360 is the easiest application I've ever experienced. No more hoping I'll coat the whole wound. It's also clear so no stains on my dog's fur!",
    author: "Mary B.",
  },
  {
    quote:
      "My gelding's feet looked amazing after using Thrush Solution consistently. The aerosol makes it so much easier than the old brush-on products I used to deal with.",
    author: "Amazon Verified Buyer",
  },
  {
    quote:
      "As a professional farrier, I've tried every thrush product on the market. Groom's Hand is the only one I recommend to my clients. The aerosol delivery is a game changer.",
    author: "Professional Farrier Review",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ background: "var(--color-bg)" }}>
      <div className="mx-auto max-w-[1200px] px-6">
        <ScrollReveal className="mb-12 text-center md:mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-primary)" }}
          >
            Testimonials
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-3xl font-extrabold md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text)" }}
          >
            Trusted by Professionals
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <ScrollReveal key={t.author}>
              <div
                className="rounded-2xl border p-8"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-divider)",
                }}
              >
                <div className="mb-4 text-sm tracking-widest text-amber-500">★★★★★</div>
                <blockquote
                  className="mb-5 text-base italic leading-relaxed"
                  style={{ color: "var(--color-text)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <cite
                  className="text-sm font-semibold not-italic"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  — {t.author}
                </cite>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
