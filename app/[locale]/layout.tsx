// app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";

// ---------------------------------------------------------------------------
// 1. GLOBAL STYLESHEET IMPORT
// Using the strict relative path to ensure the compiler finds globals.css
// sitting one level above the [locale] directory.
// ---------------------------------------------------------------------------
import "../globals.css";

// ---------------------------------------------------------------------------
// 2. GLOBAL COMPONENTS
// These components form the permanent shell of the foundation's application.
// ---------------------------------------------------------------------------
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ---------------------------------------------------------------------------
// 3. PREMIUM FONT PAIRING ARCHITECTURE
// Playfair Display establishes heritage, trust, and institutional authority.
// Plus Jakarta Sans provides flawless, modern readability for data and body copy.
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

// ---------------------------------------------------------------------------
// 4. INSTITUTIONAL METADATA
// This defines the SEO, social sharing, and browser footprint of the platform.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "Rajab Ali Welfare Foundation | Empowering Karachi",
  description: "Empowering families across Karachi through monthly ration drives, sustainable zakat management, and free quality education at Al-Noor Pakistan Academy.",
};

// ---------------------------------------------------------------------------
// 5. BULLETPROOF DICTIONARY LOADER
// Since you only created en.json and ur.json in the dictionaries folder, 
// we bypass external loaders and handle the dynamic imports natively here. 
// This prevents all "@/" or "../../" pathing crashes.
// ---------------------------------------------------------------------------
const getDictionary = async (locale: string) => {
  try {
    // If the URL is set to Urdu, fetch the Urdu JSON payload
    if (locale === 'ur') {
      return (await import('../../dictionaries/ur.json')).default;
    }
    // Otherwise, default to the English JSON payload
    return (await import('../../dictionaries/en.json')).default;
  } catch (error) {
    // Extreme Fallback: If JSON files are missing or moved, fail gracefully
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
// 6. THE MASTER LAYOUT COMPONENT
// This function wraps every single page on the website. It mathematically 
// calculates the language direction and injects the fonts.
// ---------------------------------------------------------------------------
export default async function RootLayout({
  children,
  params: { locale }, // Extract the dynamic locale ('en' or 'ur') directly from the URL
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  
  // A. Fetch the correct text payload based on the URL parameter
  const dictionary = await getDictionary(locale);

  // B. Mathematically determine the structural document direction 
  // RTL (Right-to-Left) for Urdu, LTR (Left-to-Right) for English
  const direction = locale === 'ur' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction} className="scroll-smooth">
      <body 
        className={`
          ${jakarta.variable} ${playfair.variable} font-sans 
          min-h-screen flex flex-col 
          bg-white text-[#0A192F] 
          antialiased selection:bg-[#1B4F9B] selection:text-white
        `}
      >
        {/* Pass the server-fetched dictionary and active locale into the Navbar.
          (Ensure your Navbar.tsx has been updated to accept these props!) 
        */}
        <Navbar dictionary={dictionary} locale={locale} />
        
        {/* The active page content renders inside this highly flexible main container */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Pass the server-fetched dictionary and active locale into the Footer.
          This completes the global internationalization loop.
        */}
        <Footer dictionary={dictionary} locale={locale} />
      </body>
    </html>
  );
}