import type { Metadata } from "next";
import { Moul, Battambang, Tangerine } from 'next/font/google';
import "./globals.css";

const moul = Moul({
  subsets: ['khmer'],
  weight: '400',
  display: 'swap',
  variable: '--font-moul', 
});

const battambang = Battambang({
  subsets: ['khmer'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-battambang',
});

const tangerine = Tangerine({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-tangerine',
});

const timesNewRoman = {
  variable: '--font-times-new-roman',
};


export const metadata: Metadata = {
  title: "លិខិតអញ្ជើញមង្គលអាពាហ៍ពិពាហ៍",
  description: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។! ❤️",
  openGraph: {
    title: "លិខិតអញ្ជើញមង្គលអាពាហ៍ពិពាហ៍",
    description: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។! ❤️",
    images: [
      {
        url: "https://i.imgur.com/iaWHRYZ.jpeg",
        width: 1200,
        height: 630,
        alt: "Kean & Gech Wedding Thumbnail",
      },
    ],
    type: "website",
    locale: "km_KH", 
    url: "https://i.imgur.com/iaWHRYZ.jpeg",
  },
  twitter: {
    card: "summary_large_image",
    title: "លិខិតអញ្ជើញមង្គលអាពាហ៍ពិពាហ៍",
    description: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។! ❤️",
    images: ["https://i.imgur.com/iaWHRYZ.jpeg"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />

        {/* ✅ Corrected Open Graph (OG) Meta Tags */}
        <meta property="og:title" content="លិខិតអញ្ជើញមង្គលអាពាហ៍ពិពាហ៍" />
        <meta property="og:description" content="យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ..." />
        <meta property="og:image" content="https://i.imgur.com/iaWHRYZ.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kean-gech-wedding.vercel.app/" />

        {/* ✅ Fake Domain Name for Telegram */}
        <meta property="og:site_name" content="kean-gech-wedding.vercel.app" />

        {/* ✅ Corrected Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="លិខិតអញ្ជើញមង្គលអាពាហ៍ពិពាហ៍" />
        <meta name="twitter:description" content="យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ..." />
        <meta name="twitter:image" content="https://i.imgur.com/iaWHRYZ.jpeg" />
      </head>
      <body className={`${moul.variable} ${battambang.variable} ${tangerine.variable} ${timesNewRoman.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
