import type { Metadata } from "next";
import { Caveat, DM_Sans, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-display", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-script", subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: "Sandip Sharma | React & React Native Developer", template: "%s | Sandip Sharma" },
  description: "Sandip Sharma is a React and React Native developer in Mumbai, building thoughtful web and mobile products with 2+ years of professional experience.",
  applicationName: "Sandip Sharma Portfolio",
  openGraph: {
    type: "website",
    siteName: "Sandip Sharma",
    title: "Sandip Sharma | React & React Native Developer",
    description: "Building digital experiences that make an impact. React, Next.js and React Native development from Mumbai, India.",
    images: [{ url: "/open-graph.svg", width: 1200, height: 630, alt: "Sandip Sharma, React and React Native Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandip Sharma | React & React Native Developer",
    description: "React, Next.js and React Native development from Mumbai, India.",
    images: ["/open-graph.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${manrope.variable} ${caveat.variable}`}>
        <ThemeProvider>
          <a className="skip-link" href="#main-content">Skip to content</a>
          <SiteHeader />
          <div id="main-content">{children}</div>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
