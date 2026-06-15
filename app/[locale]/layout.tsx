// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ---------------------------------------------------------------------------
// PREMIUM FONT PAIRING ARCHITECTURE
// ---------------------------------------------------------------------------
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700']
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const notoUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: '--font-urdu',
  display: 'swap',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Rajab Ali Welfare Foundation | Empowering Karachi",
  description: "Empowering families across Karachi through monthly ration drives, sustainable zakat management, and free quality education at Al-Noor Pakistan Academy.",
};

const getDictionary = async (locale: string) => {
  try {
    if (locale === 'ur') {
      return (await import('../../dictionaries/ur.json')).default;
    }
    return (await import('../../dictionaries/en.json')).default;
  } catch (error) {
    console.error("Dictionary Load Error:", error);
    return {
      navigation: {
        home: "Home",
        about: "About Us",
        programs: "Programs",
        academy: "Al-Noor Pakistan Academy",
        contact: "Contact",
        donate: "Donate Now",
        language: "Language:"
      }
    };
  }
};

// ---------------------------------------------------------------------------
// THE MASTER LAYOUT COMPONENT
// ---------------------------------------------------------------------------
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  
  // Next.js 15+ Requirement: Await the params Promise
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const direction = locale === 'ur' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body 
        className={`
          ${jakarta.variable} ${playfair.variable} ${notoUrdu.variable} 
          min-h-screen flex flex-col 
          bg-white text-[#0A192F] 
          antialiased selection:bg-[#1B4F9B] selection:text-white
        `}
        style={locale === 'ur' ? { fontFamily: 'var(--font-urdu), serif' } : { fontFamily: 'var(--font-jakarta), sans-serif' }}
      >
        <Navbar dictionary={dictionary} locale={locale} />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer dictionary={dictionary} locale={locale} />
      </body>
    </html>
  );
}