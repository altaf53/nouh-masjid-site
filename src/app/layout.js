import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nouh Islamic Centre of Canada - Scarborough Masjid",
  description:
    "Nouh Islamic Centre of Canada - Opening soon in Scarborough, ON. Prayer facilities, educational programs, youth and community engagement, and social services. All are welcome!",
  keywords: [
    "Masjid",
    "Islamic Centre",
    "Scarborough",
    "Salah",
    "Taraweeh",
    "Eid",
    "Youth Programs",
    "Food Bank",
    "Canada",
    "Nouh",
    "Education",
    "Community",
  ],
  authors: [{ name: "Nouh Islamic Centre of Canada" }],
  openGraph: {
    title: "Nouh Islamic Centre of Canada - Scarborough Masjid",
    description:
      "Opening soon! Prayer facilities, spiritual services, youth engagement, and social support. Join us in Scarborough, ON.",
    url: "https://nouh.ca",
    images: [
      {
        url: "YOUR_IMAGE_URL_HERE",
        width: 1200,
        height: 630,
        alt: "Nouh Islamic Centre of Canada Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
