import type { Metadata } from "next";
import { Archivo_Black, Lexend_Mega, Public_Sans } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend_Mega({
  variable: "--font-lexend",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public",
  weight: ["400", "700"],
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
      <body
        className={`${archivo.variable} ${lexend.variable} ${publicSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
