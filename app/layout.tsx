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
        url: "https://kean-gech-wedding.vercel.app/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Kean & Gech Wedding Thumbnail",
      },
    ],
    type: "website",
    locale: "km_KH", 
    url: "https://kean-gech-wedding.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "លិខិតអញ្ជើញមង្គលអាពាហ៍ពិពាហ៍",
    description: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។! ❤️",
    images: ["https://kean-gech-wedding.vercel.app/thumbnail.jpg"],
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
        {/* ✅ Correct Open Graph Metadata for Telegram */}
        <meta property="og:title" content="Kean & Gech Wedding" />
        <meta property="og:description" content="សូមអញ្ជើញចូលរួមក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើង! ❤️" />
        <meta property="og:image" content="https://kean-gech-wedding.vercel.app/thumbnail.png?v=11" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kean-gech-wedding.vercel.app/" />

        {/* ✅ Fake Domain for Telegram */}
        <meta property="og:site_name" content="kean-gech-wedding.com" />

        {/* ✅ Twitter (X) Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kean & Gech Wedding" />
        <meta name="twitter:description" content="សូមអញ្ជើញចូលរួមក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើង! ❤️" />
        <meta name="twitter:image" content="https://kean-gech-wedding.vercel.app/thumbnail.jpg?v=11" />
      </head>
      <body className={`${moul.variable} ${battambang.variable} ${tangerine.variable} ${timesNewRoman.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
