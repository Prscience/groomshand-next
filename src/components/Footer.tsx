import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="border-t py-12 pb-8"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-divider)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logo.jpg"
              alt="Groom's Hand"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <p className="max-w-[32ch] text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              Professional equine hoof and wound care, created by a
              third-generation farrier in Ocala, Florida.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/groomshandthrush/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/Groomshand/",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "YouTube",
                  href: "https://www.youtube.com/channel/UC_groomshand",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-all"
                  style={{
                    background: "var(--color-surface-2)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4
              className="mb-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide"
              style={{ color: "var(--color-text)" }}
            >
              Products
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                ["Thrush Solution", "https://groomshand.com/thrush-solution"],
                ["Deep Thrush Gel", "https://groomshand.com/deep-thrush-gel"],
                ["Derma360", "https://groomshand.com/derma360-wound-solution"],
                ["Wholesale", "https://groomshand.com/shop"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm no-underline transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide"
              style={{ color: "var(--color-text)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                ["About", "https://groomshand.com/about"],
                ["Find Retailers", "https://groomshand.com/retailers"],
                ["Contact", "https://groomshand.com/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm no-underline transition-colors hover:text-[var(--color-primary)]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 font-[family-name:var(--font-display)] text-sm font-bold tracking-wide"
              style={{ color: "var(--color-text)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <li>
                <a href="mailto:accuhoof@gmail.com" className="no-underline transition-colors hover:text-[var(--color-primary)]" style={{ color: "inherit" }}>
                  accuhoof@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+13524487773" className="no-underline transition-colors hover:text-[var(--color-primary)]" style={{ color: "inherit" }}>
                  (352) 448-7773
                </a>
              </li>
              <li>275 SW 60th Ave</li>
              <li>Ocala, FL 34474</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs md:flex-row"
          style={{
            borderColor: "var(--color-divider)",
            color: "var(--color-text-faint)",
          }}
        >
          <span>&copy; 2026 Accuhoof Inc. All rights reserved.</span>
          <a
            href="https://www.perplexity.ai/computer"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-[var(--color-primary)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}
