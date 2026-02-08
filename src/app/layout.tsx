import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elango M | AI/ML Systems Engineer",
  description:
    "Portfolio of Elango Murugan, an AI/ML Systems Engineer at IIT Madras specializing in machine learning, AI systems, and modern web technologies.",
  authors: [{ name: "Elango Murugan", url: "https://elango-portfolio.vercel.app" }],
  keywords: [
    "Elango Murugan",
    "AI/ML System Engineer",
    "AI/ML Systems Engineer",
    "AI Engineer",
    "Machine Learning",
    "IIT Madras",
    "Python Developer",
    "FastAPI",
    "Deep Learning",
    "TensorFlow",
  ],
  creator: "Elango Murugan",
  publisher: "Elango Murugan",
  openGraph: {
    title:
      "Elango M | AI/ML Systems Engineer",
    description:
      "AI/ML Systems Engineer building deployable AI solutions. Explore Elango's work in machine learning, deep learning, and AI-driven applications.",
    url: "https://elango-portfolio.vercel.app",
    siteName: "Elango Murugan Portfolio",
    locale: "en_US",
    images: [
      {
        url: "https://elango-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elango M Portfolio Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ElangoMurugan",
    creator: "@ElangoMurugan",
    title: "Elango M | AI/ML Systems Engineer",
    description:
      "AI/ML Systems Engineer building deployable AI solutions that turn research into real-world impact.",
    images: ["https://elango-portfolio.vercel.app/og-image.png"],
  },
  verification: {
    google: "HnQ_mDFvRM1nT6izoblIVK3cqE45cLzQ7CEIL_L_iAE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} enable-motion underline-links`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <Navbar />
          <ScrollProgress />
          <div className="pt-24">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
