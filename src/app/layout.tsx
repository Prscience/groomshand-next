import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Groom's Hand™ — Professional Equine Hoof & Wound Care",
  description:
    "Vet & Farrier recommended aerosol thrush treatments and wound care for horses. Made in the USA by a third-generation farrier. No mess, no waste, no purple fingers.",
  openGraph: {
    title: "Groom's Hand™ — Professional Equine Hoof & Wound Care",
    description:
      "Vet & Farrier recommended aerosol thrush treatments and wound care. Made in USA.",
    images: ["/images/thrush-solution.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';})();`,
          }}
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800&f[]=satoshi@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
