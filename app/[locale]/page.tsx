// app/[locale]/page.tsx
import Link from 'next/link';

const getHomeDictionary = async (locale: string) => {
  try {
    const dict = locale === 'ur' 
      ? (await import('../../dictionaries/ur.json')).default 
      : (await import('../../dictionaries/en.json')).default;
    return dict.home;
  } catch (error) {
    console.error("Dictionary Load Error:", error);
    return {
      hero_label: "Rajab Ali Welfare Foundation",
      hero_title_1: "We are all here",
      hero_title_2: "on earth to",
      hero_title_3: "help others.",
      hero_desc: "Empowering families across Karachi through highly structured monthly ration drives, sustainable Zakat management, and accessible, highly subsidized, and fully sponsored education at Al-Noor Pakistan Academy.",
      btn_donate: "Make a Donation",
      btn_programs: "Our Programs",
      scroll: "Scroll",
      quote: "\"If we have the means to ease another person's burden, it is not just charity—it is our fundamental responsibility.\"",
      quote_author: "Haji Hussain",
      quote_role: "Founder, Established 2020",
      heritage_label: "Our Heritage & Mission",
      heritage_title: "Born from a simple realization in a local grocery store.",
      heritage_p1: "In 2020, our founder, Haji Hussain, observed a recurring hardship from the counter of his grocery store. He watched as families from the neighborhood repeatedly struggled to afford the most basic daily commodities necessary to survive. The discrepancy between what families needed and what they could afford was a profound catalyst for action.",
      heritage_p2_1: "Realizing that temporary, ad-hoc help was structurally insufficient, he established the ",
      heritage_p2_bold: "Rajab Ali Welfare Foundation",
      heritage_p2_2: " in loving memory of his father, Rajab Ali. What began as a highly localized effort to distribute essential food supplies has systematically grown into a registered institution driving sustainable, generational change across Karachi.",
      heritage_p3: "Today, our operational mandate extends far beyond immediate relief. Through the establishment of Al-Noor Pakistan Academy, we are actively dismantling the cycle of poverty by providing an accessible, rigorous academic curriculum—fully sponsored for families facing financial hardship, and heavily subsidized for the wider community.",
      heritage_p4: "Every initiative we launch—from our Ramadan Special Appeals to our structured Zakat Collection facilities—is built upon a foundation of absolute transparency, community trust, and an unwavering commitment to human dignity.",
      heritage_btn: "Read the Full Institutional History",
      impact_title: "Measurable Operational Impact",
      impact_desc: "Our infrastructure is designed for absolute maximum efficiency. Every resource allocated to the foundation is directly and transparently channeled into our core welfare and academic programs.",
      stat1_label: "Active Students",
      stat1_val: "500+",
      stat1_desc: "Benefiting from fully sponsored and highly subsidized tuition.",
      stat2_label: "Academic Scope",
      stat2_val: "K-10",
      stat2_desc: "Comprehensive curriculum from Montessori through Grade X.",
      stat3_label: "Ration Drives",
      stat3_val: "Monthly",
      stat3_desc: "Consistent, structural food security provided to vetted local families.",
      pillars_label: "Pillars of Intervention",
      pillars_title: "Structured programs designed for generational uplift.",
      pillars_btn: "View Complete Details",
      prog1_title: "Al-Noor Pakistan Academy",
      prog1_desc: "Our flagship educational institution providing highly accessible academic schooling. We provide fully sponsored education, textbooks, and uniforms for those who cannot afford it, alongside nominally subsidized fees for the broader community, ensuring financial barriers never halt a child's potential.",
      prog1_btn: "Explore the Academy",
      prog2_title: "Monthly Ration Security",
      prog2_desc: "Structured monthly distributions of essential commodities (flour, rice, oil, pulses, sugar) to thoroughly vetted local families. Operations are heavily scaled and expanded during the holy month of Ramadan to meet increased community needs.",
      prog2_btn: "View Distribution Details",
      prog3_title: "Transparent Zakat Fund",
      prog3_desc: "Meticulously segregated funding pools ensuring absolute Islamic financial compliance. Donors hold authority to designate their funds specifically for educational sponsorships, direct food relief, or the general welfare trust.",
      prog3_btn: "Contribute Zakat"
    };
  }
};

export default async function Home({ 
  params 
}: { 
  params: Promise<{ locale: string }> 
}) {
  const { locale } = await params;
  const dict = await getHomeDictionary(locale);

  return (
    <main className="w-full bg-white selection:bg-[#1B4F9B] selection:text-white flex flex-col min-h-screen">
      
      {/* SECTION 1: ARCHITECTURAL HERO */}
      <section aria-label="Introduction" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" aria-hidden="true">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1B4F9B" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
          </svg>
        </div>

        <div className="hidden lg:block absolute left-12 top-0 w-px h-full bg-slate-100 z-0" aria-hidden="true"></div>
        <div className="hidden lg:block absolute right-12 top-0 w-px h-full bg-slate-100 z-0" aria-hidden="true"></div>
        <div className="hidden lg:block absolute left-1/2 top-0 w-px h-[15vh] bg-slate-100 z-0" aria-hidden="true"></div>

        <div className="relative z-10 max-w-[85rem] mx-auto px-6 lg:px-16 w-full pt-24 pb-28">
          <div className="flex flex-col items-start max-w-5xl">
            <div className="flex items-center gap-5 mb-14">
              <div className="h-px w-16 bg-[#1B4F9B]" aria-hidden="true"></div>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-extrabold text-[#1B4F9B]">
                {dict.hero_label}
              </span>
            </div>
            
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold text-[#0A192F] tracking-tight leading-[0.92] mb-12">
              <span className="block mb-3">{dict.hero_title_1}</span>
              <span className="block mb-3 text-[#1B4F9B]">{dict.hero_title_2}</span>
              <span className="block relative w-fit">
                {dict.hero_title_3}
                <svg className="absolute w-full h-4 -bottom-3 left-0 text-slate-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-center w-full mt-6">
              <div className="md:col-span-7">
                <p className="text-[#475569] text-base md:text-lg leading-relaxed font-medium">
                  {dict.hero_desc}
                </p>
              </div>
              
              <div className="md:col-span-5 flex flex-col sm:flex-row gap-5">
                <Link 
                  href={`/${locale}/donate`}
                  className="group relative inline-flex justify-center items-center text-[11px] uppercase tracking-[0.2em] font-extrabold bg-[#0A192F] text-white px-9 py-5 overflow-hidden transition-all duration-500 hover:bg-[#1B4F9B] w-full sm:w-auto shadow-sm"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {dict.btn_donate}
                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href={`/${locale}/programs`}
                  className="group inline-flex justify-center items-center text-[11px] uppercase tracking-[0.2em] font-extrabold bg-transparent text-[#0A192F] border border-[#0A192F] px-9 py-5 hover:bg-[#F8FAFC] transition-colors duration-500 w-full sm:w-auto"
                >
                  {dict.btn_programs}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-12 hidden lg:flex flex-col items-center gap-6 z-10 pb-10" aria-hidden="true">
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#1B4F9B] transform rotate-90 origin-right translate-x-1/2">
            {dict.scroll}
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#1B4F9B] to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: INSTITUTIONAL HERITAGE */}
      <section aria-labelledby="heritage-heading" className="relative py-32 md:py-40 bg-white border-b border-slate-100">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <figure className="lg:col-span-5 relative m-0">
              <div className="sticky top-40">
                <div className="absolute -left-6 top-0 w-1.5 h-24 bg-[#1B4F9B]" aria-hidden="true"></div>
                <svg className="w-12 h-12 text-slate-100 mb-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="font-playfair text-3xl md:text-[2.5rem] text-[#0A192F] leading-[1.25] font-bold mb-12 tracking-tight">
                  {dict.quote}
                </blockquote>
                <figcaption className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-[#1B4F9B] font-playfair font-bold text-2xl" aria-hidden="true">HH</div>
                  <div>
                    <div className="text-sm uppercase tracking-[0.2em] font-extrabold text-[#0A192F]">{dict.quote_author}</div>
                    <div className="text-[10px] text-[#475569] uppercase tracking-[0.15em] mt-1.5 font-bold">{dict.quote_role}</div>
                  </div>
                </figcaption>
              </div>
            </figure>

            <article className="lg:col-span-7">
              <header className="flex items-center gap-5 mb-12">
                <h2 id="heritage-heading" className="text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#1B4F9B] whitespace-nowrap">
                  {dict.heritage_label}
                </h2>
                <div className="h-px w-full bg-slate-100" aria-hidden="true"></div>
              </header>

              <h3 className="font-playfair text-3xl md:text-5xl font-bold text-[#0A192F] leading-tight mb-14 tracking-tight">
                {dict.heritage_title}
              </h3>

              <div className="prose prose-lg prose-slate max-w-none text-[#475569] leading-[2.2]">
                <p className="first-letter:font-playfair first-letter:text-7xl first-letter:font-bold first-letter:text-[#0A192F] first-letter:mr-4 first-letter:mt-2 first-letter:float-left first-line:uppercase first-line:tracking-widest">
                  {dict.heritage_p1}
                </p>
                <p className="mt-8">
                  {dict.heritage_p2_1}<strong className="font-extrabold text-[#0A192F]">{dict.heritage_p2_bold}</strong>{dict.heritage_p2_2}
                </p>
                
                <div className="my-14 p-10 md:p-12 border border-slate-200 bg-[#F8FAFC] relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#1B4F9B]" aria-hidden="true"></div>
                  <p className="text-[#0A192F] font-bold text-lg md:text-xl leading-relaxed m-0 tracking-tight">
                    {dict.heritage_p3}
                  </p>
                </div>

                <p>{dict.heritage_p4}</p>
              </div>

              <div className="mt-16">
                <Link href={`/${locale}/about`} className="group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#0A192F] hover:text-[#1B4F9B] transition-colors pb-3 border-b-2 border-[#0A192F] hover:border-[#1B4F9B]">
                  {dict.heritage_btn}
                  <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
            
          </div>
        </div>
      </section>

      {/* SECTION 3: IMPACT */}
      <section aria-labelledby="impact-heading" className="bg-[#F8FAFC] py-32 border-b border-slate-200">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-16">
          <header className="text-center max-w-3xl mx-auto mb-20">
            <h2 id="impact-heading" className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] mb-6 tracking-tight">
              {dict.impact_title}
            </h2>
            <p className="text-[#475569] text-base leading-relaxed font-medium">
              {dict.impact_desc}
            </p>
          </header>

          <dl className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-white border border-slate-200 shadow-sm relative z-10">
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col items-center text-center group">
              <dt className="order-2 text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#0A192F] mb-3 mt-6">{dict.stat1_label}</dt>
              <dd className="order-1 font-playfair text-6xl lg:text-7xl font-bold text-[#1B4F9B] transform transition-transform duration-700 group-hover:-translate-y-2">{dict.stat1_val}</dd>
              <dd className="order-3 text-sm text-slate-500 leading-relaxed font-medium max-w-[200px]">{dict.stat1_desc}</dd>
            </div>
            <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col items-center text-center group">
              <dt className="order-2 text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#0A192F] mb-3 mt-6">{dict.stat2_label}</dt>
              <dd className="order-1 font-playfair text-6xl lg:text-7xl font-bold text-[#1B4F9B] transform transition-transform duration-700 group-hover:-translate-y-2">{dict.stat2_val}</dd>
              <dd className="order-3 text-sm text-slate-500 leading-relaxed font-medium max-w-[200px]">{dict.stat2_desc}</dd>
            </div>
            <div className="p-12 md:p-16 flex flex-col items-center text-center group">
              <dt className="order-2 text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#0A192F] mb-3 mt-6">{dict.stat3_label}</dt>
              <dd className="order-1 font-playfair text-6xl lg:text-7xl font-bold text-[#1B4F9B] transform transition-transform duration-700 group-hover:-translate-y-2">{dict.stat3_val}</dd>
              <dd className="order-3 text-sm text-slate-500 leading-relaxed font-medium max-w-[200px]">{dict.stat3_desc}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* SECTION 4: PROGRAMS */}
      <section aria-labelledby="programs-heading" className="py-32 md:py-40 bg-white">
        <div className="max-w-[85rem] mx-auto px-6 lg:px-16">
          <header className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-5 mb-8">
                <div className="h-px w-12 bg-[#1B4F9B]" aria-hidden="true"></div>
                <h2 id="programs-heading" className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B]">
                  {dict.pillars_label}
                </h2>
              </div>
              <p className="font-playfair text-4xl md:text-[3.25rem] font-bold text-[#0A192F] leading-[1.1] tracking-tight">
                {dict.pillars_title}
              </p>
            </div>
            <Link href={`/${locale}/programs`} className="hidden md:inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] font-extrabold text-[#0A192F] hover:text-[#1B4F9B] transition-colors whitespace-nowrap group">
              {dict.pillars_btn}
              <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="group border border-slate-200 bg-white p-10 lg:p-12 hover:border-[#1B4F9B] transition-colors duration-700 relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1B4F9B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" aria-hidden="true"></div>
              <div className="w-16 h-16 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center mb-10 text-[#1B4F9B]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
              </div>
              <h3 className="font-playfair text-[1.75rem] font-bold text-[#0A192F] mb-5 tracking-tight leading-snug">{dict.prog1_title}</h3>
              <p className="text-sm text-[#475569] leading-[1.8] mb-10 flex-grow font-medium">{dict.prog1_desc}</p>
              <Link href={`/${locale}/academy`} className="mt-auto inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#1B4F9B] group-hover:text-[#0A192F] transition-colors w-fit">
                {dict.prog1_btn}
                <svg className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </article>

            <article className="group border border-slate-200 bg-white p-10 lg:p-12 hover:border-[#1B4F9B] transition-colors duration-700 relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1B4F9B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" aria-hidden="true"></div>
              <div className="w-16 h-16 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center mb-10 text-[#1B4F9B]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5v5.625c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V10.5M4.5 10.5h15M4.5 10.5H3.375c-.621 0-1.125.504-1.125 1.125v2.25c0 .621.504 1.125 1.125 1.125H4.5m15 0V15" /></svg>
              </div>
              <h3 className="font-playfair text-[1.75rem] font-bold text-[#0A192F] mb-5 tracking-tight leading-snug">{dict.prog2_title}</h3>
              <p className="text-sm text-[#475569] leading-[1.8] mb-10 flex-grow font-medium">{dict.prog2_desc}</p>
              <Link href={`/${locale}/programs`} className="mt-auto inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#1B4F9B] group-hover:text-[#0A192F] transition-colors w-fit">
                {dict.prog2_btn}
                <svg className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </article>

            <article className="group border border-slate-200 bg-white p-10 lg:p-12 hover:border-[#1B4F9B] transition-colors duration-700 relative overflow-hidden flex flex-col h-full shadow-sm hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1B4F9B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" aria-hidden="true"></div>
              <div className="w-16 h-16 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center mb-10 text-[#1B4F9B]">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>
              </div>
              <h3 className="font-playfair text-[1.75rem] font-bold text-[#0A192F] mb-5 tracking-tight leading-snug">{dict.prog3_title}</h3>
              <p className="text-sm text-[#475569] leading-[1.8] mb-10 flex-grow font-medium">{dict.prog3_desc}</p>
              <Link href={`/${locale}/donate`} className="mt-auto inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#1B4F9B] group-hover:text-[#0A192F] transition-colors w-fit">
                {dict.prog3_btn}
                <svg className="w-4 h-4 transform transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

    </main>
  );
}