"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-[6px] z-50 border-b transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
      style={{
        background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderColor: "var(--color-divider)",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6 md:h-[72px]">
        {/* Logo */}
        <a href="#" aria-label="Groom's Hand Home">
          <Image
            src="/images/logo.jpg"
            alt="Groom's Hand"
            width={140}
            height={36}
            className="h-7 w-auto md:h-9"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {[
            ["products", "Products"],
            ["about", "About"],
            ["testimonials", "Reviews"],
            ["distributors", "Retailers"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="cursor-pointer text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-primary)]"
              style={{ color: "var(--color-text-muted)" }}
            >
              {label}
            </button>
          ))}
          <a
            href="https://groomshand.com/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide transition-colors hover:text-[var(--color-primary)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Shop
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-surface-2)]"
            style={{ color: "var(--color-text-muted)" }}
          >
            {theme === "dark" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Mobile toggle */}
          <button
            className="flex flex-col gap-[5px] md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className="block h-0.5 w-7 rounded-full transition-transform"
              style={{
                background: "var(--color-text)",
                transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block h-0.5 w-7 rounded-full transition-opacity"
              style={{
                background: "var(--color-text)",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 w-7 rounded-full transition-transform"
              style={{
                background: "var(--color-text)",
                transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="flex flex-col gap-4 border-t px-6 py-8 md:hidden"
          style={{
            background: "var(--color-bg)",
            borderColor: "var(--color-divider)",
          }}
          aria-label="Mobile navigation"
        >
          {[
            ["products", "Products"],
            ["about", "About"],
            ["testimonials", "Reviews"],
            ["distributors", "Retailers"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="cursor-pointer border-b py-3 text-left text-lg font-medium"
              style={{
                color: "var(--color-text)",
                borderColor: "var(--color-divider)",
              }}
            >
              {label}
            </button>
          ))}
          <a
            href="https://groomshand.com/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b py-3 text-lg font-medium"
            style={{
              color: "var(--color-text)",
              borderColor: "var(--color-divider)",
              textDecoration: "none",
            }}
          >
            Shop
          </a>
        </nav>
      )}
    </header>
  );
}
