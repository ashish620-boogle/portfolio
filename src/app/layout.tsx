import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ashish Kumar | AR/VR & GenAI Engineer",
  description:
    "Portfolio of Ashish Kumar featuring AR/VR systems, data science, and GenAI projects, research, and experience.",
  openGraph: {
    title: "Ashish Kumar | AR/VR & GenAI Engineer",
    description:
      "Neo-brutalist portfolio showcasing AR/VR systems, data science, and GenAI projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashish Kumar | AR/VR & GenAI Engineer",
    description:
      "Neo-brutalist portfolio showcasing AR/VR systems, data science, and GenAI projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
