import type { Metadata } from "next";
import { Geist, Geist_Mono, Fira_Code } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/AppLayout";
import AuditorProvider from "@/components/providers/AuditorProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blockapex Auditor Portfolio",
  description: "Securing the decentralized future. View the track record and expertise of Blockapex auditors.",
  openGraph: {
    title: "Blockapex Auditor Portfolio",
    description: "Securing the decentralized future. View the track record and expertise of Blockapex auditors.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockapex Auditor Portfolio",
    description: "Securing the decentralized future. View the track record and expertise of Blockapex auditors.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased`}
      >
        <AuditorProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </AuditorProvider>
      </body>
    </html>
  );
}
