// components/Footer.tsx
import Link from 'next/link';

// ============================================================================
// BULLETPROOF FALLBACK ENGINE
// Protects the UI from crashing if the JSON dictionary keys are temporarily missing.
// ============================================================================
const fallbackFooter = {
  brand_name: "Rajab Ali Welfare Foundation",
  brand_desc: "Empowering communities across Karachi through sustainable Zakat management, monthly ration drives, and 100% free education at Al-Noor Pakistan Academy.",
  reg_no: "Reg No. 6707725",
  directory: "Directory",
  nav_about: "About Us",
  nav_programs: "Welfare Programs",
  nav_academy: "Al-Noor Pakistan Academy",
  nav_contact: "Contact Us",
  direct_transfer: "Direct Institutional Transfer",
  bank: "Bank",
  bank_name: "JS Bank Limited",
  branch: "Branch",
  branch_name: "Soldier Bazar (9203)",
  acc_title: "Account Title",
  acc_name: "Rajab Ali Welfare Foundation",
  iban_label: "IBAN / Account Number",
  iban_num: "PK88JSBL9203000001407535",
  connect: "Connect",
  copyright: "Rajab Ali Welfare Foundation. All rights reserved.",
  developer: "Designed And Developed By Arsheel Abbas"
};

// ============================================================================
// COMPONENT SIGNATURE
// Explicitly accepts the 'dictionary' and 'locale' props from layout.tsx
// ============================================================================
export default function Footer({ 
  dictionary, 
  locale 
}: { 
  dictionary?: any; 
  locale?: string; 
}) {
  
  // Safely extract the footer data, deploying the fallback if necessary
  const d = dictionary?.footer_main || fallbackFooter;
  const currentLocale = locale || 'en'; // Defaults to english if locale drops

  // Dynamically map the navigation links using the dictionary and locale route
  const navLinks = [
    { name: d.nav_about, path: `/${currentLocale}/about` },
    { name: d.nav_programs, path: `/${currentLocale}/programs` },
    { name: d.nav_academy, path: `/${currentLocale}/academy` },
    { name: d.nav_contact, path: `/${currentLocale}/contact` }
  ];

  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Section 1: Institutional Brand (Col 1-5) */}
          <div className="md:col-span-5 lg:col-span-4 pr-0 lg:pr-8">
            <h2 className="font-playfair text-2xl font-bold text-[#0A192F] tracking-tight mb-5">
              {d.brand_name}
            </h2>
            <p className="text-[#475569] text-sm leading-relaxed mb-6">
              {d.brand_desc}
            </p>
            <div className="inline-flex items-center gap-3 bg-[#F8FAFC] border border-slate-200 px-3 py-2 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1B4F9B]"></div>
              <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
                {d.reg_no}
              </span>
            </div>
          </div>

          {/* Section 2: Directory with Animated Underline (Col 6-8) */}
          <nav className="md:col-span-3 lg:col-span-3 lg:pl-8" aria-label="Footer Navigation">
            <h3 className="font-jakarta text-xs uppercase tracking-[0.15em] font-extrabold text-[#0A192F] mb-6">
              {d.directory}
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="group relative inline-flex items-center text-sm font-medium text-[#475569] hover:text-[#1B4F9B] transition-colors duration-300 pb-1"
                  >
                    <span className="relative z-10">{link.name}</span>
                    {/* The sleek, origin-expanding underline effect */}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#1B4F9B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Section 3: Refined Donation Terminal (Col 9-12) */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="bg-gradient-to-br from-white to-[#F8FAFC] border border-slate-200 rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
              <h3 className="font-jakarta text-xs uppercase tracking-[0.15em] font-extrabold text-[#0A192F] mb-5">
                {d.direct_transfer}
              </h3>
              
              <address className="not-italic space-y-3 text-sm mb-6 border-b border-slate-200 pb-5">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium text-xs">{d.bank}</span>
                  <span className="text-[#0A192F] font-semibold">{d.bank_name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium text-xs">{d.branch}</span>
                  <span className="text-[#0A192F] font-semibold">{d.branch_name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium text-xs">{d.acc_title}</span>
                  <span className="text-[#0A192F] font-semibold">{d.acc_name}</span>
                </div>
              </address>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                {/* Clean IBAN Display */}
                <div className="w-full sm:w-auto">
                  <span className="block text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">{d.iban_label}</span>
                  <span className="font-mono text-sm font-bold text-[#1B4F9B] bg-white border border-slate-200 px-3 py-1.5 rounded inline-block shadow-sm">
                    {d.iban_num}
                  </span>
                </div>

                {/* Ghost WhatsApp Button */}
                <a 
                  href="https://wa.me/923352745614" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-white border border-[#1B4F9B] text-[#1B4F9B] hover:bg-[#1B4F9B] hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-400 ease-in-out whitespace-nowrap shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current transition-transform duration-400 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                      </svg>
                      {d.connect}
                    </a>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Sub-footer Legal Bar */}
            <div className="mt-16 pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <p>© {new Date().getFullYear()} {d.copyright}</p>
              <div className="flex gap-8">
                <a 
                  href="https://www.linkedin.com/in/arsheel-abbas" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#1B4F9B] transition-colors"
                >
                  {d.developer}
                </a>
              </div>
            </div>
          </div>
        </footer>
      );
    }