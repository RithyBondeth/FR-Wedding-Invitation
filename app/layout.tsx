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
  description: "យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${moul.variable} ${battambang.variable} ${tangerine.variable} ${timesNewRoman.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
