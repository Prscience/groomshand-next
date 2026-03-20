const trustItems = [
  {
    label: "Formaldehyde Free",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: "Long Lasting Formula",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: "Made in the USA",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    label: "Non-Caustic Formula",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
  },
  {
    label: "360° Spray Technology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <div
      className="border-b py-6"
      style={{
        background: "var(--color-surface)",
        borderColor: "var(--color-divider)",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-6 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-10">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 whitespace-nowrap text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            <span className="h-5 w-5 shrink-0" style={{ color: "var(--color-primary)" }}>
              {item.icon}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
