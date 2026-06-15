// app/[locale]/about/page.tsx
import Link from 'next/link';

// ============================================================================
// BULLETPROOF DICTIONARY LOADER WITH GRACEFUL FALLBACKS
// Ensures the page never crashes, even if a key is missing in the JSON file.
// ============================================================================
const getAboutDictionary = async (locale: string) => {
  try {
    const dict = locale === 'ur' 
      ? (await import('../../../dictionaries/ur.json')).default 
      : (await import('../../../dictionaries/en.json')).default;
    // Some dictionary JSON files may export the localized sections at the root
    // or under an "about" key. Tolerate both shapes to avoid runtime/TS errors.
    return (dict as any).about ?? dict;
  } catch (error) {
    console.error("Dictionary Load Error:", error);
    // Hardcoded fallback to prevent runtime crashes during translation updates
    return {
      hero_subtitle: "Institutional Heritage & Vision",
      hero_title_1: "Born from a simple realization,",
      hero_title_2: "built for generational change.",
      hero_desc: "The Rajab Ali Welfare Foundation was not conceptualized in a corporate boardroom. It was born directly on the streets of Karachi, forged by an inescapable moral obligation to our neighbors. We believe that charity is not merely an act of giving, but a structural intervention against the cycle of poverty.",
      ethos_subtitle: "Core Ethos",
      ethos_title: "Why we operate.",
      ethos_1_title: "Systemic, Not Temporary",
      ethos_1_desc: "We refuse to settle for temporary relief. Supplying a single meal solves the problem of a single day. Our focus is heavily weighted toward structural empowerment—specifically education and sustained monthly food security—to permanently alter a family's financial trajectory.",
      ethos_2_title: "Absolute Human Dignity",
      ethos_2_desc: "Poverty strips individuals of their autonomy. Our operational logistics are designed to distribute aid, particularly Zakat and Rations, with the utmost discretion and respect. We do not just deliver commodities; we restore agency.",
      origin_year: "2020",
      origin_subtitle: "The Catalyst",
      origin_desc: "Establishment of the foundation by Haji Hussain in loving memory of his father, Rajab Ali. A transition from localized observation to systemic, structural intervention.",
      origin_p1: "In the midst of 2020, our founder, Haji Hussain, observed a recurring and deeply unsettling hardship directly from the counter of his local grocery store in Karachi.",
      origin_p2: "A grocery store is a unique vantage point into the financial reality of a community. Day after day, Haji Hussain watched as hardworking families from the immediate neighborhood repeatedly struggled to afford the absolute most basic daily commodities necessary for survival. He witnessed the quiet dignity of parents having to return essential food items to the shelves because they simply fell a few rupees short.",
      origin_p3: "The mathematical discrepancy between what these families required to live with basic human dignity and what they could actually afford was not just an economic statistic—it was a profound human crisis unfolding before his eyes every single day.",
      quote_subtitle: "The Paradigm Shift",
      quote_1: "Temporary relief was ",
      quote_2: "structurally insufficient.",
      quote_desc: "Realizing that ad-hoc, intermittent charity—giving a bag of flour one day, or covering a minor bill the next—could not dismantle the systemic nature of the poverty he was witnessing, Haji Hussain formalized his efforts. He understood that to create lasting change, the response needed to be as structured and relentless as the poverty it sought to eradicate.",
      origin_p4_1: "Driven by this realization, he established a formalized institution. Named in the profound and loving memory of his late father, the ",
      origin_p4_bold: "Rajab Ali Welfare Foundation",
      origin_p4_2: " was officially born.",
      origin_p5: "What commenced as a highly localized, personal effort to discreetly distribute essential food supplies has systematically scaled into a registered NGO. Today, our operational mandate extends far beyond immediate food relief, encompassing large-scale, Shariah-compliant Zakat management and the funding of completely free, rigorous academic schooling through our flagship initiative: Al-Noor Pakistan Academy.",
      compliance_subtitle: "Corporate Governance & Audit",
      compliance_title_1: "Absolute transparency.",
      compliance_title_2: "Unshakeable trust.",
      compliance_1_title: "Official NGO Registration",
      compliance_1_num: "No. 6707725",
      compliance_1_desc: "We operate as a fully registered and legally compliant Non-Governmental Organization within Pakistan. By maintaining strict legal registration, we ensure all financial inflows (Zakat, Sadqah) and logistical outflows are subject to transparent regulatory oversight and rigorous internal auditing.",
      compliance_2_title: "Operational Headquarters",
      compliance_2_loc: "Soldier Bazar, Karachi",
      compliance_2_desc: "Our central base of operations remains exactly where our mission started. By maintaining a heavily localized physical footprint, we intentionally execute an extremely low administrative overhead philosophy, guaranteeing that the maximum possible percentage of donor funds reaches the recipients directly.",
      evo_subtitle: "The Evolution",
      evo_title_1: "From localized food distribution ",
      evo_title_2: "to institutional education.",
      evo_desc_1: "As the foundation matured, our strategy evolved. We recognized that while monthly ration drives stabilize a family's immediate physical health, it is ",
      evo_desc_bold: "education",
      evo_desc_2: " that fundamentally alters a family's economic future. This realization directly birthed Al-Noor Pakistan Academy, a facility currently educating 500+ students completely free of charge. We evolved from feeding bodies to empowering minds.",
      evo_btn: "Explore Al-Noor Academy",
      footer_subtitle: "Direct Engagement",
      footer_title: "Become part of the legacy.",
      footer_desc: "The foundation's operational capability relies on individuals who share our uncompromising belief in human dignity. Review our active programs or securely transfer your Zakat to support our ongoing mission.",
      footer_btn_1: "Support Our Mission",
      footer_btn_2: "View Our Programs"
    };
  }
};

// ============================================================================
// ASYNC PAGE COMPONENT
// Dynamically receives the locale parameter from the Next.js App Router
// ============================================================================
export default async function About({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  // Fetch the localized text payload
  const dict = await getAboutDictionary(locale);

  return (
    <main className="w-full bg-white selection:bg-[#0A192F] selection:text-white flex flex-col min-h-screen overflow-hidden">
      
      {/* =======================================================================
        SECTION 1: THE REFINED EDITORIAL HERO
        Perfectly scaled typography. Clean, professional, and deeply authoritative.
        =======================================================================
      */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 border-b border-slate-200 bg-white">
        
        {/* Subtle Architectural Grid Lines */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
          <div className="absolute left-6 md:left-16 lg:left-24 top-0 w-px h-full bg-slate-100"></div>
          <div className="absolute right-6 md:right-16 lg:right-24 top-0 w-px h-full bg-slate-100"></div>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full">
          
          <header className="mb-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-16 md:w-24 bg-[#1B4F9B]" aria-hidden="true"></div>
              <h2 className="font-jakarta text-[10px] md:text-xs uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B]">
                {dict.hero_subtitle}
              </h2>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A192F] leading-[1.05] tracking-tight max-w-5xl">
              {dict.hero_title_1} <br />
              <span className="text-[#1B4F9B] italic pr-8">{dict.hero_title_2}</span>
            </h1>
          </header>

          <div className="mt-12 border-t border-slate-200 pt-12 max-w-4xl">
            <p className="font-jakarta text-[#1B4F9B] text-xl md:text-2xl leading-relaxed font-semibold tracking-tight">
              {dict.hero_desc}
            </p>
          </div>

        </div>
      </section>

      {/* =======================================================================
        SECTION 2: THE PHILOSOPHY OF INTERVENTION
        Expanding the depth of the foundation's core beliefs.
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="md:col-span-1">
              <h3 className="font-jakarta text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] mb-4">
                {dict.ethos_subtitle}
              </h3>
              <h4 className="font-playfair text-3xl font-bold text-[#0A192F] tracking-tight leading-snug">
                {dict.ethos_title}
              </h4>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <article>
                <div className="w-10 h-10 border border-[#1B4F9B]/20 flex items-center justify-center mb-6 text-[#1B4F9B] font-playfair font-bold text-lg">
                  I
                </div>
                <h5 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.ethos_1_title}</h5>
                <p className="font-jakarta text-sm text-[#475569] leading-relaxed font-medium">
                  {dict.ethos_1_desc}
                </p>
              </article>
              <article>
                <div className="w-10 h-10 border border-[#1B4F9B]/20 flex items-center justify-center mb-6 text-[#1B4F9B] font-playfair font-bold text-lg">
                  II
                </div>
                <h5 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.ethos_2_title}</h5>
                <p className="font-jakarta text-sm text-[#475569] leading-relaxed font-medium">
                  {dict.ethos_2_desc}
                </p>
              </article>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 3: THE DEEP ORIGIN NARRATIVE (2020)
        Expanded copy detailing the psychological catalyst at the grocery store.
        =======================================================================
      */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Context Sidebar */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-40">
                <div className="font-playfair text-[#1B4F9B] text-7xl font-bold opacity-10 mb-6 leading-none tracking-tighter">
                  {dict.origin_year}
                </div>
                <h3 className="font-jakarta text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] mb-6 border-l-2 border-[#1B4F9B] pl-4">
                  {dict.origin_subtitle}
                </h3>
                <p className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium mb-8">
                  {dict.origin_desc}
                </p>
                <div className="h-px w-full bg-slate-100"></div>
              </div>
            </div>

            {/* Editorial Manifesto */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none font-jakarta text-[#0A192F] leading-[2] font-medium">
                
                <p className="first-letter:font-playfair first-letter:text-[5rem] first-letter:font-bold first-letter:text-[#1B4F9B] first-letter:mr-4 first-letter:mt-2 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                  {dict.origin_p1}
                </p>
                
                <p className="mt-8">
                  {dict.origin_p2}
                </p>

                <p className="mt-6">
                  {dict.origin_p3}
                </p>

                {/* Deep Dive Pull Quote */}
                <div className="my-16 p-12 md:p-16 border-y border-[#1B4F9B]/20 bg-[#F8FAFC] relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#1B4F9B]" aria-hidden="true"></div>
                  <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] block mb-6">
                    {dict.quote_subtitle}
                  </span>
                  <h4 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A192F] mb-6 tracking-tight leading-[1.2]">
                    "{dict.quote_1}<span className="italic text-[#1B4F9B]">{dict.quote_2}</span>"
                  </h4>
                  <p className="text-[#475569] text-base leading-relaxed m-0">
                    {dict.quote_desc}
                  </p>
                </div>

                <p>
                  {dict.origin_p4_1}<strong className="font-extrabold text-[#1B4F9B]">{dict.origin_p4_bold}</strong>{dict.origin_p4_2} 
                </p>
                <p className="mt-6">
                  {dict.origin_p5}
                </p>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 4: INSTITUTIONAL COMPLIANCE & GOVERNANCE
        A stark, highly geometric block verifying the NGO's legal status.
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-[#0A192F] border-y-8 border-[#1B4F9B] relative overflow-hidden">
        
        {/* Subtle geometric background overlay for the dark section */}
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs><pattern id="gov-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1"/></pattern></defs>
            <rect width="100%" height="100%" fill="url(#gov-grid)" />
          </svg>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          
          <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-2xl">
              <span className="font-jakarta text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#4793FF] block mb-6">
                {dict.compliance_subtitle}
              </span>
              <h2 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {dict.compliance_title_1} <br className="hidden md:block"/> {dict.compliance_title_2}
              </h2>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 bg-[#0A192F]">
            
            {/* Compliance Block 1 */}
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors duration-500">
              <div className="w-14 h-14 bg-[#1B4F9B] flex items-center justify-center text-white mb-10">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-jakarta text-xs uppercase tracking-[0.3em] font-extrabold text-[#4793FF] mb-4">
                {dict.compliance_1_title}
              </h3>
              <p className="font-mono text-3xl md:text-4xl font-bold text-white tracking-[0.1em] mb-6">
                {dict.compliance_1_num}
              </p>
              <p className="font-jakarta text-sm text-slate-300 leading-relaxed font-medium">
                {dict.compliance_1_desc}
              </p>
            </div>

            {/* Compliance Block 2 */}
            <div className="p-12 md:p-16 hover:bg-white/5 transition-colors duration-500">
              <div className="w-14 h-14 bg-[#1B4F9B] flex items-center justify-center text-white mb-10">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-jakarta text-xs uppercase tracking-[0.3em] font-extrabold text-[#4793FF] mb-4">
                {dict.compliance_2_title}
              </h3>
              <p className="font-playfair text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                {dict.compliance_2_loc}
              </p>
              <p className="font-jakarta text-sm text-slate-300 leading-relaxed font-medium">
                {dict.compliance_2_desc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 5: SCALING IMPACT (The Evolution)
        Connecting the 2020 origin to the current state (Academy & Rations).
        =======================================================================
      */}
      <section className="py-24 md:py-40 bg-white border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="font-jakarta text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] block mb-6">
              {dict.evo_subtitle}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1] tracking-tight mb-10">
              {dict.evo_title_1} <br className="hidden md:block"/> {dict.evo_title_2}
            </h2>
            <p className="font-jakarta text-base md:text-lg text-[#475569] leading-relaxed font-medium mb-16">
              {dict.evo_desc_1}<strong className="text-[#0A192F] font-bold">{dict.evo_desc_bold}</strong>{dict.evo_desc_2}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
              {/* i18n ROUTING: Dynamic Locale injected into the URL parameter */}
              <Link 
                href={`/${locale}/academy`}
                className="group inline-flex items-center justify-center gap-3 font-jakarta text-xs uppercase tracking-[0.2em] font-extrabold bg-transparent text-[#0A192F] border-2 border-[#0A192F] px-10 py-5 hover:bg-[#0A192F] hover:text-white transition-colors duration-500"
              >
                {dict.evo_btn}
                <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 6: TERMINAL ACTION FOOTER
        Completely unified, high-end white-and-blue minimalist frame.
        =======================================================================
      */}
      <section className="py-32 md:py-40 bg-[#F8FAFC] relative">
        <div className="absolute top-0 left-1/2 w-px h-full bg-slate-200 transform -translate-x-1/2 hidden lg:block" aria-hidden="true"></div>
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#1B4F9B]"></div>
            <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B]">
              {dict.footer_subtitle}
            </span>
            <div className="h-px w-8 bg-[#1B4F9B]"></div>
          </div>

          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-[#0A192F] tracking-tight mb-8">
            {dict.footer_title}
          </h2>
          
          <p className="font-jakarta text-[#475569] text-base md:text-lg font-medium max-w-2xl mb-12 leading-relaxed">
            {dict.footer_desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            {/* i18n ROUTING: Dynamic Locale injected into the URL parameter */}
            <Link 
              href={`/${locale}/donate`}
              className="group inline-flex items-center justify-center gap-3 font-jakarta text-xs uppercase tracking-[0.2em] font-extrabold bg-[#0A192F] text-white px-12 py-5 hover:bg-[#1B4F9B] transition-colors duration-500 shadow-sm"
            >
              {dict.footer_btn_1}
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link 
              href={`/${locale}/programs`}
              className="font-jakarta text-xs uppercase tracking-[0.2em] font-extrabold bg-transparent text-[#0A192F] border border-[#0A192F] px-12 py-5 hover:bg-white transition-colors duration-500"
            >
              {dict.footer_btn_2}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}