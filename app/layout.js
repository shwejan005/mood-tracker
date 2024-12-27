import { Geist, Geist_Mono, Fugaz_One, Open_Sans } from "next/font/google"; // Import Fugaz_One
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"], 
});

export const metadata = {
  title: "Zen",
  description: "Track Your Mood Daily",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`${fugaz.className}  text-5xl md:text-6xl lg:text-7xl textGradient`}>
        Zen
      </h1>
    </header>
  );

  const footer = 
    <footer className="p-4 sm:p-8">
      Footer
    </footer>;

  return (
    <html lang="en">
      <body
        className={`${openSans.className} text-slate-700 antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
