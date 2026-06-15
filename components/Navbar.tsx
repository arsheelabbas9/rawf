// components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// ============================================================================
// COMPONENT SIGNATURE
// Upgraded to explicitly accept the 'dictionary' payload and 'locale' string 
// passed down from the server-side RootLayout. This eliminates the TS error.
// ============================================================================
export default function Navbar({ 
  dictionary, 
  locale 
}: { 
  dictionary: any; 
  locale: string; 
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook to get the current active route (e.g., '/en/about' or '/ur/programs')
  const pathname = usePathname();

  // ============================================================================
  // DYNAMIC LANGUAGE ROUTING PROTOCOL
  // This function mathematically swaps the language code in the URL without 
  // throwing the user back to the homepage. 
  // Example: User is on '/en/about' -> Clicks UR -> Redirects to '/ur/about'
  // ============================================================================
  const redirectedPathName = (targetLocale: string) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    // segments[0] is empty string (before the first slash)
    // segments[1] is the current locale ('en' or 'ur')
    segments[1] = targetLocale; 
    return segments.join('/');
  };

  // ============================================================================
  // DYNAMIC NAVIGATION LINKS
  // Pulling exact text from the active dictionary payload while maintaining 
  // strict localization in the pathing.
  // ============================================================================
  const navLinks = [
    { name: dictionary.navigation.home, path: `/${locale}` },
    { name: dictionary.navigation.about, path: `/${locale}/about` },
    { name: dictionary.navigation.programs, path: `/${locale}/programs` },
    { name: dictionary.navigation.academy, path: `/${locale}/academy` },
    { name: dictionary.navigation.contact, path: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* ===================================================================
              INSTITUTIONAL IDENTITY / OFFICIAL LOGO 
              Clicking the logo now securely routes back to the localized homepage
              =================================================================== */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center">
                <Image 
                  src="/RAWF_LOGO.png"
                  alt="Rajab Ali Welfare Foundation Official Logo"
                  width={64}
                  height={64}
                  quality={100}
                  priority
                  className="object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-playfair text-xl font-bold text-[#0A192F] tracking-tight leading-none">
                  Rajab Ali Welfare Foundation
                </span>
                <span className="font-jakarta text-[9px] uppercase tracking-[0.2em] text-[#1B4F9B] font-bold mt-1.5">
                  Est. 2020
                </span>
              </div>
            </Link>
          </div>

          {/* ===================================================================
              DESKTOP NAVIGATION ARCHITECTURE
              =================================================================== */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path}
                    className="group relative inline-flex items-center font-jakarta text-xs uppercase tracking-[0.1em] font-bold text-[#475569] hover:text-[#0A192F] transition-colors duration-300 py-2"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1B4F9B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            {/* ===================================================================
                DYNAMIC DESKTOP LANGUAGE TOGGLE (EN / UR)
                Upgraded from static buttons to Next.js <Link> components to
                trigger actual server-side localization swaps. Visual active states
                are determined mathematically via the 'locale' prop.
                =================================================================== */}
            <div className="flex items-center gap-2 font-jakarta text-xs font-bold tracking-widest text-[#0A192F]">
              <Link 
                href={redirectedPathName('en')}
                className={`${locale === 'en' ? 'text-[#1B4F9B] underline-offset-4 underline' : 'text-slate-400 hover:text-[#0A192F]'} transition-all`}
              >
                EN
              </Link>
              <span className="text-slate-300">/</span>
              <Link 
                href={redirectedPathName('ur')}
                className={`${locale === 'ur' ? 'text-[#1B4F9B] underline-offset-4 underline' : 'text-slate-400 hover:text-[#0A192F]'} transition-all`}
              >
                UR
              </Link>
            </div>

            {/* ===================================================================
                DONATE ACTION BUTTON
                Pulls text from the JSON dictionary to dynamically adapt
                =================================================================== */}
            <Link 
              href={`/${locale}/donate`}
              className="font-jakarta text-xs uppercase tracking-widest font-bold bg-[#1B4F9B] text-white px-7 py-3.5 rounded-lg hover:bg-[#0A192F] transition-colors duration-400 shadow-sm hover:shadow-md"
            >
              {dictionary.navigation.donate}
            </Link>
          </nav>

          {/* ===================================================================
              MOBILE MENU TOGGLE
              =================================================================== */}
          <div className="lg:hidden flex items-center gap-4">
            <Link 
              href={`/${locale}/donate`}
              className="font-jakarta text-[10px] uppercase tracking-widest font-bold bg-[#1B4F9B] text-white px-4 py-2 rounded-md transition-colors"
            >
              {dictionary.navigation.donate}
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#0A192F] p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ===================================================================
          MOBILE NAVIGATION DROPDOWN (DYNAMIC)
          =================================================================== */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <ul className="flex flex-col px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-jakarta text-sm uppercase tracking-widest font-bold text-[#0A192F] pb-2 border-b border-slate-50"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            
            <li className="pt-2">
              <div className="flex items-center gap-4 font-jakarta text-sm font-bold tracking-widest text-[#0A192F]">
                <span className="text-slate-400">{dictionary.navigation.language}</span>
                
                {/* Dynamic Mobile Language Switcher */}
                <Link 
                  href={redirectedPathName('en')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${locale === 'en' ? 'text-[#1B4F9B] underline-offset-4 underline' : 'text-slate-400 hover:text-[#0A192F]'} transition-all`}
                >
                  EN
                </Link>
                <span className="text-slate-300">/</span>
                <Link 
                  href={redirectedPathName('ur')}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${locale === 'ur' ? 'text-[#1B4F9B] underline-offset-4 underline' : 'text-slate-400 hover:text-[#0A192F]'} transition-all`}
                >
                  UR
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}