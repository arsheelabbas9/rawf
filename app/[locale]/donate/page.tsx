// app/[locale]/donate/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// ============================================================================
// BULLETPROOF DICTIONARY LOADER WITH GRACEFUL FALLBACKS
// Protects the server-side render from crashing if JSON keys are missing.
// ============================================================================
const getDonateDictionary = async (locale: string) => {
  try {
    const dict = locale === 'ur' 
      ? (await import('../../../dictionaries/ur.json')).default 
      : (await import('../../../dictionaries/en.json')).default;
    return dict.donate;
  } catch (error) {
    console.error("Dictionary Load Error:", error);
    // Hardcoded fallback to prevent runtime crashes
    return {
      hero_label: "Support Our Mission",
      hero_title_1: "Your contribution drives",
      hero_title_2: "generational change.",
      hero_desc: "We operate on a model of absolute transparency. Whether you are fulfilling your Zakat obligations or offering general Sadqah, your funds are directly channeled into our educational and welfare infrastructures.",
      term_label: "Direct Institutional Transfer",
      bank_title: "JS Bank Limited",
      bank_branch: "Soldier Bazar Branch (9203)",
      bank_acc_label: "Account Title",
      bank_acc_name: "Rajab Ali Welfare Foundation",
      bank_iban_label: "IBAN / Account Number",
      bank_iban: "PK88JSBL9203000001407535",
      wallet_title: "Digital Wallets",
      wallet_subtitle: "Zero-Fee Mobile Transfers",
      wallet_platforms: "Supported Platforms",
      wallet_acc_label: "Mobile Account Number",
      wallet_acc_num: "0335-2745614",
      wallet_title_label: "Account Title:",
      wallet_title_name: "Haji Hussain",
      verify_title: "Verification Protocol",
      verify_desc: "To ensure absolute accounting transparency and proper allocation of your specific Zakat or Sadqah funds, please follow our 3-step verification process.",
      step1_num: "01",
      step1_title: "Execute Transfer",
      step1_desc: "Transfer your intended amount via your banking portal or digital wallet to the details provided.",
      step2_num: "02",
      step2_title: "Capture Receipt",
      step2_desc: "Save the digital transaction receipt or take a screenshot indicating a successful transfer.",
      step3_num: "03",
      step3_title: "Verify via WhatsApp",
      step3_desc: "Send the receipt to Haji Hussain to confirm allocation (e.g., General Fund vs. Zakat).",
      verify_btn: "Initiate Verification",
      alloc_title: "Designated Allocations",
      alloc_desc: "You maintain full authority over your contribution. Upon WhatsApp verification, specify which of the following pillars you wish your funds to support. Unspecified funds default to our General Welfare Trust.",
      cat1_title: "Zakat Fund",
      cat1_desc: "Strictly separated and distributed according to Islamic Shariah compliance to eligible, deeply vetted families.",
      cat2_title: "Ration Security",
      cat2_desc: "Direct funding for our monthly distribution drives, providing essential food commodities to combat local hunger.",
      cat3_title: "Education Sponsorship",
      cat3_desc: "Underwrites the tuition, uniform, and textbook costs for students at Al-Noor Academy who cannot afford subsidized fees.",
      cat4_title: "General Trust",
      cat4_desc: "Flexible Sadqah utilized where the community needs it most urgently, ensuring operational agility."
    };
  }
};

// ============================================================================
// ASYNC PAGE COMPONENT
// Dynamically receives the locale parameter from the Next.js App Router
// ============================================================================
export default async function Donate({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  // Fetch the localized text payload
  const dict = await getDonateDictionary(locale);

  return (
    <main className="w-full bg-white selection:bg-[#1B4F9B] selection:text-white flex flex-col min-h-screen">
      
      {/* =======================================================================
        SECTION 1: PAGE HEADER
        Minimalist, high-impact introductory section.
        =======================================================================
      */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="absolute top-0 left-1/2 w-px h-full bg-slate-200 transform -translate-x-1/2 hidden lg:block" aria-hidden="true"></div>
        <div className="max-w-[85rem] mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-5 mb-8">
              <div className="h-px w-12 bg-[#1B4F9B]" aria-hidden="true"></div>
              <span className="font-jakarta text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B]">
                {dict.hero_label}
              </span>
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#0A192F] tracking-tight leading-[1.05] mb-8">
              {dict.hero_title_1} <br className="hidden md:block" />
              <span className="text-[#1B4F9B]">{dict.hero_title_2}</span>
            </h1>
            <p className="font-jakarta text-[#475569] text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              {dict.hero_desc}
            </p>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 2: SECURE TRANSFER TERMINALS & PROTOCOL
        The core financial data presented with institutional fidelity.
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: The Banking & Wallet Terminals */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="font-jakarta text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#0A192F]">
                  {dict.term_label}
                </h2>
                <div className="h-px flex-grow bg-slate-100" aria-hidden="true"></div>
              </div>

              {/* Terminal 1: Institutional Bank Transfer */}
              <div className="border border-slate-200 bg-white shadow-[0_8px_40px_rgb(0,0,0,0.03)] relative overflow-hidden group mb-8">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1B4F9B]" aria-hidden="true"></div>
                
                <div className="p-10 md:p-12">
                  <div className="flex items-start justify-between mb-10 border-b border-slate-100 pb-8">
                    <div>
                      <h3 className="font-playfair text-3xl font-bold text-[#0A192F] tracking-tight mb-2">{dict.bank_title}</h3>
                      <p className="font-jakarta text-xs uppercase tracking-[0.15em] text-slate-400 font-bold">{dict.bank_branch}</p>
                    </div>
                    <div className="w-12 h-12 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center text-[#1B4F9B]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>

                  <dl className="space-y-8">
                    <div>
                      <dt className="font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] mb-2">{dict.bank_acc_label}</dt>
                      <dd className="font-jakarta text-lg md:text-xl font-bold text-[#0A192F]">{dict.bank_acc_name}</dd>
                    </div>
                    
                    <div>
                      <dt className="font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] mb-3">{dict.bank_iban_label}</dt>
                      <dd className="relative">
                        <div className="font-mono text-base md:text-xl font-bold text-[#1B4F9B] bg-[#F8FAFC] border border-slate-200 p-5 md:p-6 tracking-[0.1em] break-all">
                          {dict.bank_iban}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Terminal 2: Unified Digital Wallets */}
              <div className="border border-slate-200 bg-white shadow-[0_8px_40px_rgb(0,0,0,0.03)] relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0A192F]" aria-hidden="true"></div>
                
                <div className="p-10 md:p-12">
                  <div className="flex items-start justify-between mb-8 border-b border-slate-100 pb-6">
                    <div>
                      <h3 className="font-playfair text-2xl font-bold text-[#0A192F] tracking-tight mb-2">{dict.wallet_title}</h3>
                      <p className="font-jakarta text-xs uppercase tracking-[0.15em] text-slate-400 font-bold">{dict.wallet_subtitle}</p>
                    </div>
                    <div className="w-12 h-12 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center text-[#0A192F]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                      </svg>
                    </div>
                  </div>

                  {/* Unified Wallet Layout */}
                  <div className="flex flex-col gap-6">
                    
                    {/* Supported Providers Logos */}
                    <div className="flex items-center gap-6 pb-2">
                      <span className="font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-slate-400">
                        {dict.wallet_platforms}
                      </span>
                      <div className="flex items-center gap-5">
                        <Image 
                          src="/Easypaisa.webp" 
                          alt="EasyPaisa" 
                          width={100} 
                          height={35} 
                          className="object-contain h-6 w-auto"
                        />
                        <Image 
                          src="/sadapay.png" 
                          alt="SadaPay" 
                          width={100} 
                          height={35} 
                          className="object-contain h-7 w-auto"
                        />
                      </div>
                    </div>

                    <dl>
                      <dt className="font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] mb-3">{dict.wallet_acc_label}</dt>
                      <dd className="relative">
                        <div className="font-mono text-xl md:text-2xl font-bold text-[#0A192F] bg-[#F8FAFC] border border-slate-200 p-5 md:p-6 tracking-[0.2em]">
                          {dict.wallet_acc_num}
                        </div>
                      </dd>
                      <dd className="font-jakarta text-xs text-slate-500 font-semibold mt-4 flex items-center gap-2">
                        <span className="uppercase tracking-[0.1em]">{dict.wallet_title_label}</span> 
                        <span className="text-[#0A192F] font-bold">{dict.wallet_title_name}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: The Verification Pipeline */}
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <h2 className="font-playfair text-3xl font-bold text-[#0A192F] mb-8 tracking-tight">
                  {dict.verify_title}
                </h2>
                <p className="font-jakarta text-[#475569] text-sm leading-relaxed mb-12 font-medium">
                  {dict.verify_desc}
                </p>

                <div className="space-y-10 relative">
                  {/* Connecting Line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-px bg-slate-100 -z-10" aria-hidden="true"></div>
                  
                  {/* Step 1 */}
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-[#1B4F9B] flex items-center justify-center font-jakarta text-[10px] font-extrabold text-[#1B4F9B]">
                      {dict.step1_num}
                    </div>
                    <div>
                      <h4 className="font-jakarta text-sm uppercase tracking-[0.15em] font-extrabold text-[#0A192F] mb-2">{dict.step1_title}</h4>
                      <p className="font-jakarta text-sm text-slate-500 leading-relaxed">{dict.step1_desc}</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border-2 border-[#1B4F9B] flex items-center justify-center font-jakarta text-[10px] font-extrabold text-[#1B4F9B]">
                      {dict.step2_num}
                    </div>
                    <div>
                      <h4 className="font-jakarta text-sm uppercase tracking-[0.15em] font-extrabold text-[#0A192F] mb-2">{dict.step2_title}</h4>
                      <p className="font-jakarta text-sm text-slate-500 leading-relaxed">{dict.step2_desc}</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 relative">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1B4F9B] flex items-center justify-center font-jakarta text-[10px] font-extrabold text-white shadow-md">
                      {dict.step3_num}
                    </div>
                    <div className="w-full">
                      <h4 className="font-jakarta text-sm uppercase tracking-[0.15em] font-extrabold text-[#0A192F] mb-2">{dict.step3_title}</h4>
                      <p className="font-jakarta text-sm text-slate-500 leading-relaxed mb-6">{dict.step3_desc}</p>
                      
                      <a 
                        href="https://wa.me/923352745614?text=Salam%20Haji%20Hussain,%20I%20have%20just%20made%20a%20donation%20to%20the%20Rajab%20Ali%20Welfare%20Foundation." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center w-full sm:w-auto gap-3 bg-white border border-[#1B4F9B] text-[#1B4F9B] hover:bg-[#1B4F9B] hover:text-white px-8 py-4 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all duration-500 shadow-sm"
                        aria-label="Verify Donation via WhatsApp"
                      >
                        <svg className="w-4 h-4 fill-current transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                        </svg>
                        {dict.verify_btn}
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 3: FUND ALLOCATION CATEGORIES
        Grid outlining exactly where donor money can be directed.
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-16">
          <header className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-[#0A192F] mb-6 tracking-tight">
              {dict.alloc_title}
            </h2>
            <p className="font-jakarta text-[#475569] text-base leading-relaxed font-medium">
              {dict.alloc_desc}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Category 1: Zakat */}
            <div className="bg-white border border-slate-200 p-8 group hover:border-[#1B4F9B] transition-colors duration-500">
              <h3 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.cat1_title}</h3>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed font-medium">
                {dict.cat1_desc}
              </p>
            </div>

            {/* Category 2: Rations */}
            <div className="bg-white border border-slate-200 p-8 group hover:border-[#1B4F9B] transition-colors duration-500">
              <h3 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.cat2_title}</h3>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed font-medium">
                {dict.cat2_desc}
              </p>
            </div>

            {/* Category 3: Education */}
            <div className="bg-white border border-slate-200 p-8 group hover:border-[#1B4F9B] transition-colors duration-500">
              <h3 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.cat3_title}</h3>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed font-medium">
                {dict.cat3_desc}
              </p>
            </div>

            {/* Category 4: General Sadqah */}
            <div className="bg-white border border-slate-200 p-8 group hover:border-[#1B4F9B] transition-colors duration-500">
              <h3 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.cat4_title}</h3>
              <p className="font-jakarta text-xs text-slate-500 leading-relaxed font-medium">
                {dict.cat4_desc}
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}