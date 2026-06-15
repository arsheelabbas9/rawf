// app/[locale]/programs/page.tsx
import Link from 'next/link';

const getProgramsDictionary = async (locale: string) => {
  try {
    const dict = locale === 'ur' 
      ? (await import('../../../dictionaries/ur.json')).default 
      : (await import('../../../dictionaries/en.json')).default;
    return dict.programs;
  } catch (error) {
    console.error("Dictionary Load Error:", error);
    return {
      hero_label: "Pillars of Intervention",
      hero_title_1: "Charity requires empathy.",
      hero_title_2: "Change requires architecture.",
      hero_desc_1: "The Rajab Ali Welfare Foundation operates a strictly categorized portfolio of welfare initiatives. From Shariah-compliant Zakat distribution to highly optimized monthly food security logistics, every program is engineered for ",
      hero_desc_bold: "maximum communal impact and absolute zero financial waste.",
      doc_label: "Operational Doctrine",
      doc_title: "How we execute.",
      doc1_title: "Data-Driven Vetting",
      doc1_desc: "We reject the inefficiency of blind distribution. Every family, student, and individual receiving aid is heavily vetted through a localized verification matrix to ensure donor funds strictly reach those in absolute, documentable need.",
      doc2_title: "Segmented Allocation",
      doc2_desc: "Financial inflows are aggressively categorized. Zakat is mathematically isolated from General Sadqah to ensure uncompromising theological accuracy. Funds are allocated exclusively to the pillar designated by the donor.",
      p1_label: "Logistical Execution",
      p1_title_1: "Monthly Ration",
      p1_title_2: "Security.",
      p1_subtitle: "Eradicating daily hunger through hyper-localized, highly vetted supply chain management in Karachi.",
      p1_desc_1: "Food security is the absolute baseline of human dignity. Without it, academic pursuit, physical health, and economic mobility are fundamentally impossible.",
      p1_desc_2: "Our Monthly Ration Drive is the oldest and most meticulously optimized operational pillar of the foundation. We entirely bypass the inefficiencies and indignity of ad-hoc, public distribution by executing a highly structured, data-driven approach to local welfare.",
      vetting_label: "The Vetting Protocol",
      vetting_title: "Strict Eligibility",
      vetting_desc: "Families are not randomly selected. We conduct rigorous, localized background verification to ensure that monthly rations are delivered strictly to households experiencing genuine, documentable financial crises. This guarantees absolute zero donor funds are misallocated.",
      pkg_label: "The Standard Package",
      pkg_title: "Nutritional Baseline",
      pkg_desc: "Each monthly package is mathematically calculated to sustain an average family. Standard institutional boxes include premium-grade flour, bulk rice, cooking oil, essential pulses, sugar, and tea—procured directly at wholesale to maximize purchasing power.",
      ramadan_label: "Surge Capacity",
      ramadan_title: "Ramadan Scaling Operations",
      ramadan_desc: "During the holy month of Ramadan, our logistical capacity expands by over 300%. The foundation executes a massive mobilization effort to assemble and distribute specialized Ramadan Ration Packs, ensuring the most vulnerable demographics can observe their fasts with absolute dignity, peace, and nutritional security.",
      ramadan_btn: "Fund a Ration Box",
      p2_desc_1: "Zakat is not a standard charitable donation; it is a profound religious obligation. We treat the management of your Zakat with the absolute highest degree of corporate, theological, and spiritual severity.",
      p2_desc_2: "The Rajab Ali Welfare Foundation maintains a strictly segregated financial architecture for all designated Zakat funds. These assets are never mathematically mixed with our general operating funds or unrestricted Sadqah. They are isolated, audited, and distributed exclusively to recipients who strictly meet the Shariah compliance criteria of eligibility.",
      zakat_1_label: "Absolute Execution",
      zakat_1_title: "Zero Deduction Policy",
      zakat_1_desc: "Zero percent of designated Zakat funds are utilized for our administrative overhead, marketing, or general logistics. Every single rupee transferred to our Zakat protocol is delivered directly into the hands of the eligible, or utilized directly for their explicit academic and nutritional survival.",
      zakat_2_label: "Systemic Security",
      zakat_2_title: "Financial Segregation",
      zakat_2_desc: "We utilize a highly transparent WhatsApp verification pipeline embedded within our secure transfer terminal. When a donor designates a transfer as Zakat, it is immediately flagged by our administration and routed into a compliance-locked allocation pool, ensuring absolute theological accuracy.",
      p2_label: "Financial Integrity",
      p2_title_1: "Transparent",
      p2_title_2: "Zakat Protocol.",
      p2_subtitle_1: "Absolute Shariah compliance.",
      p2_subtitle_2: "Zero administrative deductions.",
      zakat_btn: "Allocate Zakat",
      p3_label: "Flagship Intervention",
      p3_title_1: "Al-Noor Pakistan",
      p3_title_2: "Academy",
      p3_desc: "Our premier educational institution and the crown jewel of our developmental efforts. We completely underwrite the tuition, books, stationary, and official uniforms for over 500 marginalized students. By offering a rigorous, free K-10 curriculum, we actively and permanently dismantle the cycle of generational poverty in our local communities.",
      p3_btn: "View Academy Overview",
      p4_label: "Operational Agility",
      p4_title_1: "General Welfare",
      p4_title_2: "Trust",
      p4_desc: "Not all human crises can be scheduled or categorized. The General Welfare Trust consists of unrestricted Sadqah and generalized operational donations. This critical liquidity allows the foundation to execute rapid response aid—funding emergency hospital bills, ad-hoc disaster relief, and unforeseen localized community crises instantly.",
      p4_btn: "Contribute Sadqah",
      footer_label: "Execution Protocol",
      footer_title_1: "Empower the",
      footer_title_2: "architecture.",
      footer_desc: "Every intervention detailed across this prospectus is powered exclusively by individual donor trust. Access our secure terminal to verify our institutional banking credentials and initiate your transfer.",
      footer_btn1: "Access Secure Terminal",
      footer_btn2: "Contact Administration"
    };
  }
};

export default async function Programs({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const dict = await getProgramsDictionary(locale);

  return (
    <main className="w-full bg-white selection:bg-[#0A192F] selection:text-white flex flex-col min-h-screen overflow-hidden">
      
      {/* SECTION 1: THE MONOLITHIC EDITORIAL HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 border-b border-slate-200 bg-white">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
          <div className="absolute left-6 md:left-16 lg:left-24 top-0 w-px h-full bg-slate-100"></div>
          <div className="absolute right-6 md:right-16 lg:right-24 top-0 w-px h-full bg-slate-100"></div>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full">
          <header className="mb-12">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-16 md:w-24 bg-[#1B4F9B]" aria-hidden="true"></div>
              <h2 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B]">
                {dict.hero_label}
              </h2>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#0A192F] leading-[1.05] tracking-tight max-w-5xl">
              {dict.hero_title_1} <br />
              <span className="text-[#1B4F9B] italic pr-8">{dict.hero_title_2}</span>
            </h1>
          </header>

          <div className="mt-12 border-t border-slate-200 pt-12 max-w-4xl">
            <p className="text-[#1B4F9B] text-xl md:text-2xl leading-relaxed font-semibold tracking-tight">
              {dict.hero_desc_1}<span className="text-[#0A192F] font-extrabold">{dict.hero_desc_bold}</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: LOGISTICAL METHODOLOGY */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="md:col-span-1">
              <h3 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] mb-4">{dict.doc_label}</h3>
              <h4 className="font-playfair text-3xl font-bold text-[#0A192F] tracking-tight leading-snug">{dict.doc_title}</h4>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
              <article>
                <div className="w-10 h-10 border border-[#1B4F9B]/20 flex items-center justify-center mb-6 text-[#1B4F9B] font-playfair font-bold text-lg">I</div>
                <h5 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.doc1_title}</h5>
                <p className="text-sm text-[#475569] leading-relaxed font-medium">{dict.doc1_desc}</p>
              </article>
              <article>
                <div className="w-10 h-10 border border-[#1B4F9B]/20 flex items-center justify-center mb-6 text-[#1B4F9B] font-playfair font-bold text-lg">II</div>
                <h5 className="font-playfair text-xl font-bold text-[#0A192F] mb-3">{dict.doc2_title}</h5>
                <p className="text-sm text-[#475569] leading-relaxed font-medium">{dict.doc2_desc}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PROGRAM 01 - RATION SECURITY */}
      <section className="py-24 md:py-40 bg-white relative border-b border-slate-100">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-40">
                <div className="font-playfair text-[#1B4F9B] text-[8rem] font-bold opacity-5 mb-6 leading-none tracking-tighter">01</div>
                <h3 className="text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] mb-6 border-l-2 border-[#1B4F9B] pl-4">{dict.p1_label}</h3>
                <h4 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] tracking-tight leading-[1.1] mb-6">
                  {dict.p1_title_1} <br/><span className="italic text-[#1B4F9B]">{dict.p1_title_2}</span>
                </h4>
                <p className="text-sm text-[#475569] leading-[1.8] font-medium mb-8">{dict.p1_subtitle}</p>
                <div className="h-px w-full bg-slate-100"></div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none text-[#0A192F] leading-[2] font-medium mb-16">
                <p className="first-letter:font-playfair first-letter:text-[6rem] first-letter:font-bold first-letter:text-[#1B4F9B] first-letter:mr-5 first-letter:mt-2 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                  {dict.p1_desc_1}
                </p>
                <p className="mt-8 text-[#475569]">{dict.p1_desc_2}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200">
                <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-200 bg-white hover:bg-[#F8FAFC] transition-colors duration-500 group">
                  <h5 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] mb-5">{dict.vetting_label}</h5>
                  <h6 className="font-playfair text-2xl md:text-3xl font-bold text-[#0A192F] mb-5 tracking-tight">{dict.vetting_title}</h6>
                  <p className="text-sm text-[#475569] leading-[1.8] font-medium">{dict.vetting_desc}</p>
                </div>
                <div className="p-10 md:p-14 bg-white hover:bg-[#F8FAFC] transition-colors duration-500 group">
                  <h5 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] mb-5">{dict.pkg_label}</h5>
                  <h6 className="font-playfair text-2xl md:text-3xl font-bold text-[#0A192F] mb-5 tracking-tight">{dict.pkg_title}</h6>
                  <p className="text-sm text-[#475569] leading-[1.8] font-medium">{dict.pkg_desc}</p>
                </div>
              </div>

              <div className="mt-16 p-12 md:p-16 border-l-8 border-[#1B4F9B] bg-[#F8FAFC] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#1B4F9B] opacity-[0.03] rounded-full transform translate-x-1/3 -translate-y-1/3" aria-hidden="true"></div>
                <h5 className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] mb-4">{dict.ramadan_label}</h5>
                <h6 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A192F] mb-6 tracking-tight">{dict.ramadan_title}</h6>
                <p className="text-base text-[#475569] leading-[1.8] mb-10 font-medium">{dict.ramadan_desc}</p>
                <Link href={`/${locale}/donate`} className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] hover:text-[#0A192F] transition-colors">
                  {dict.ramadan_btn} 
                  <svg className="w-5 h-5 transform transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROGRAM 02 - ZAKAT MANAGEMENT */}
      <section className="py-32 md:py-48 bg-[#0A192F] relative border-y-8 border-[#1B4F9B] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="zakat-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="1"/></pattern></defs><rect width="100%" height="100%" fill="url(#zakat-grid)" /></svg>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-white leading-[2] font-medium mb-20">
                <p className="first-letter:font-playfair first-letter:text-[6.5rem] first-letter:font-bold first-letter:text-[#4793FF] first-letter:mr-6 first-letter:mt-2 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                  {dict.p2_desc_1}
                </p>
                <p className="mt-10 text-slate-300">{dict.p2_desc_2}</p>
              </div>

              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 bg-white/5 p-12 md:p-14 border border-white/10 hover:border-[#4793FF]/50 transition-colors duration-500">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#1B4F9B] flex items-center justify-center text-white shadow-lg"><span className="font-playfair font-bold text-2xl">100%</span></div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#4793FF] mb-3">{dict.zakat_1_label}</h5>
                    <h6 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{dict.zakat_1_title}</h6>
                    <p className="text-sm text-slate-300 leading-[1.8] font-medium">{dict.zakat_1_desc}</p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 bg-white/5 p-12 md:p-14 border border-white/10 hover:border-[#4793FF]/50 transition-colors duration-500">
                  <div className="w-16 h-16 flex-shrink-0 bg-[#1B4F9B] flex items-center justify-center text-white shadow-lg">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#4793FF] mb-3">{dict.zakat_2_label}</h5>
                    <h6 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">{dict.zakat_2_title}</h6>
                    <p className="text-sm text-slate-300 leading-[1.8] font-medium">{dict.zakat_2_desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 order-1 lg:order-2 relative">
              <div className="sticky top-40 lg:pl-16">
                <div className="font-playfair text-[#4793FF] text-[8rem] font-bold opacity-10 mb-6 leading-none tracking-tighter">02</div>
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#4793FF] mb-6 border-l-2 border-[#4793FF] pl-4">{dict.p2_label}</h3>
                <h4 className="font-playfair text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                  {dict.p2_title_1} <br/><span className="italic text-[#4793FF]">{dict.p2_title_2}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-[1.8] font-medium mb-12">
                  {dict.p2_subtitle_1} <br/> {dict.p2_subtitle_2}
                </p>
                <div className="h-px w-full bg-white/10 mb-12"></div>
                <Link href={`/${locale}/donate`} className="group inline-flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] font-extrabold bg-white text-[#0A192F] px-10 py-6 hover:bg-[#4793FF] hover:text-white transition-colors duration-500 w-full shadow-2xl">
                  {dict.zakat_btn}
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRAM 03 & 04 - ACADEMY & GENERAL TRUST */}
      <section className="py-32 md:py-48 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            <div className="relative group border border-slate-200 bg-[#F8FAFC] p-12 md:p-16 hover:shadow-2xl transition-all duration-700 hover:bg-white">
              <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#1B4F9B] transition-all duration-700 ease-in-out group-hover:w-full"></div>
              <div className="pt-8">
                <div className="font-playfair text-[#1B4F9B] text-[7rem] font-bold opacity-5 mb-8 leading-none tracking-tighter">03</div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] mb-5">{dict.p3_label}</h3>
                <h4 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 tracking-tight leading-[1.1]">
                  {dict.p3_title_1} <br/> {dict.p3_title_2}
                </h4>
                <p className="text-sm text-[#475569] leading-[1.9] font-medium mb-12">{dict.p3_desc}</p>
                <Link href={`/${locale}/academy`} className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] hover:text-[#1B4F9B] transition-colors pb-3 border-b-2 border-[#0A192F] hover:border-[#1B4F9B]">
                  {dict.p3_btn}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

            <div className="relative group border border-slate-200 bg-[#F8FAFC] p-12 md:p-16 hover:shadow-2xl transition-all duration-700 hover:bg-white">
              <div className="absolute top-0 left-0 w-24 h-[3px] bg-[#1B4F9B] transition-all duration-700 ease-in-out group-hover:w-full"></div>
              <div className="pt-8">
                <div className="font-playfair text-[#1B4F9B] text-[7rem] font-bold opacity-5 mb-8 leading-none tracking-tighter">04</div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] mb-5">{dict.p4_label}</h3>
                <h4 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] mb-8 tracking-tight leading-[1.1]">
                  {dict.p4_title_1} <br/> {dict.p4_title_2}
                </h4>
                <p className="text-sm text-[#475569] leading-[1.9] font-medium mb-12">{dict.p4_desc}</p>
                <Link href={`/${locale}/donate`} className="inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] hover:text-[#1B4F9B] transition-colors pb-3 border-b-2 border-[#0A192F] hover:border-[#1B4F9B]">
                  {dict.p4_btn}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: TERMINAL ACTION FOOTER */}
      <section className="py-32 md:py-48 bg-[#F8FAFC] relative">
        <div className="absolute top-0 left-1/2 w-px h-full bg-slate-200 transform -translate-x-1/2 hidden lg:block" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-slate-200" aria-hidden="true"></div>
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-12 bg-[#1B4F9B]"></div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B]">{dict.footer_label}</span>
            <div className="h-px w-12 bg-[#1B4F9B]"></div>
          </div>

          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#0A192F] tracking-tight mb-10 leading-[1.05]">
            {dict.footer_title_1} <br className="hidden md:block"/> {dict.footer_title_2}
          </h2>
          
          <p className="text-[#475569] text-lg md:text-xl font-medium max-w-3xl mb-16 leading-relaxed">
            {dict.footer_desc}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <Link href={`/${locale}/donate`} className="group inline-flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em] font-extrabold bg-[#0A192F] text-white px-14 py-6 hover:bg-[#1B4F9B] transition-colors duration-500 shadow-xl">
              {dict.footer_btn1}
              <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link href={`/${locale}/contact`} className="text-[11px] uppercase tracking-[0.3em] font-extrabold bg-transparent text-[#0A192F] border-2 border-[#0A192F] px-14 py-6 hover:bg-white transition-colors duration-500 flex items-center justify-center">
              {dict.footer_btn2}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}