// app/[locale]/academy/page.tsx
import Image from 'next/image';
import Link from 'next/link';

// ============================================================================
// BULLETPROOF DICTIONARY LOADER WITH GRACEFUL FALLBACKS
// Ensures the page never crashes if a translation key is temporarily missing.
// ============================================================================
const getAcademyDictionary = async (locale: string) => {
  try {
    const dict = locale === 'ur' 
      ? (await import('../../../dictionaries/ur.json')).default 
      : (await import('../../../dictionaries/en.json')).default;
    return dict.academy;
  } catch (error) {
    console.error("Dictionary Load Error:", error);
    // Hardcoded fallback to prevent runtime crashes
    return {
      hero_label: "Institutional Flagship",
      hero_title_1: "Al-Noor Pakistan",
      hero_title_2: "Academy.",
      hero_desc_1: "We operate under a singular, uncompromising belief: ",
      hero_desc_bold: "financial hardship must never dictate a child’s intellectual potential.",
      hero_desc_2: "Al-Noor Academy exists to provide completely free, rigorous academic schooling to over 500 marginalized students, structurally dismantling the cycle of generational poverty in Karachi.",
      stat1_val: "500+",
      stat1_label: "Active Students",
      stat2_val: "K-10",
      stat2_label: "Curriculum Level",
      pillar1_num: "01.",
      pillar1_title: "Complete Access",
      pillar1_desc: "For deeply vetted families, we systematically absorb 100% of all academic costs. This includes tuition, standardized textbooks, stationary, and seasonal uniforms. We mathematically eliminate financial barriers.",
      pillar2_num: "02.",
      pillar2_title: "Academic Rigor",
      pillar2_desc: "We execute a highly structured, modern curriculum beginning at the foundational Montessori level. This pathway extends uninterrupted through to Matriculation (Grade X), actively preparing students for higher education.",
      pillar3_num: "03.",
      pillar3_title: "Moral Character",
      pillar3_desc: "True education transcends the textbook. We foster psychological confidence, cultural identity, and moral character through heavily organized institutional events, building community leaders, not just test-takers.",
      arc1_label: "Archive I // Cognitive Expansion",
      arc1_title_1: "Fostering individual creativity",
      arc1_title_2: "and expressive joy.",
      arc1_desc: "Education is not simply rote memorization. We actively encourage our students to build, create, and express themselves. Through structured arts and crafts, students learn fine motor skills, resourcefulness, and the pure joy of bringing imagination into reality.",
      arc1_img1: "01 // Classroom Interaction",
      arc1_img2: "02 // Material Application",
      arc1_img3: "03 // Creative Projects",
      arc2_label: "Archive II // Moral Grounding",
      arc2_title_1: "Spiritual devotion and the",
      arc2_title_2: "shaping of character.",
      arc2_desc_1: "Academic brilliance without moral grounding is structurally incomplete. A core pillar of the Al-Noor Academy experience is the deliberate cultivation of Islamic values, ethics, and psychological confidence through our institutional Naat, Qirat, and Eid Milad un Nabi assemblies.",
      arc2_desc_2: "These gatherings are heavily anticipated milestones. By standing before their peers to recite, students develop profound self-assurance, a deep connection to their faith, and the vocal articulation skills necessary to become commanding, ethical leaders in their future communities.",
      arc2_badge: "Eid Milad Un Nabi",
      arc3_label: "Archive III // Institutional Support",
      arc3_title_1: "Removing the physical barriers",
      arc3_title_2: "to educational success.",
      arc3_desc: "We recognize that poverty affects the holistic child. Beyond tuition, we regularly provision our students with high-quality tangible resources—from structural pencil cases and geometry boxes to lunchboxes and celebratory treats—ensuring every child feels valued, equipped, and equal.",
      arc4_label: "Archive IV // Social Cohesion",
      arc4_title_1: "Building courage through",
      arc4_title_2: "community engagement.",
      arc4_desc_1: "A child must understand how to navigate a community to succeed in the broader world. Through meticulously organized assemblies and vibrant stage performances, we instill a profound sense of cultural identity and public courage within our student body.",
      arc4_desc_2: "Whether it is young girls presenting confidently on stage in their best attire, or the entire student body gathered to listen to guest speakers and faculty, these events break the routine of intense academic study. It teaches them that diversity is a strength, participation is expected, and their voices fundamentally matter.",
      footer_label: "Direct Call To Action",
      footer_title: "Secure their future.",
      footer_desc: "Every textbook, every uniform, and every structural milestone documented across this academy is funded via transparent Zakat and Sadqah allocations. Stand with us to preserve this educational environment.",
      footer_btn1: "Fund Education Now",
      footer_btn2: "Contact Administration"
    };
  }
};

// ============================================================================
// ASYNC PAGE COMPONENT
// Dynamically receives the locale parameter from the Next.js App Router
// ============================================================================
export default async function Academy({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  // Fetch the localized text payload
  const dict = await getAcademyDictionary(locale);

  return (
    <main className="w-full bg-white selection:bg-[#0A192F] selection:text-white flex flex-col min-h-screen overflow-hidden">
      
      {/* =======================================================================
        SECTION 1: THE MONOLITHIC EDITORIAL HERO
        Flawless white space, perfect alignment, and monolithic blue typography.
        =======================================================================
      */}
      <section className="relative min-h-[90vh] flex flex-col justify-center border-b border-slate-200 bg-white">
        
        {/* Structural Grid Lines for High-End Corporate Feel */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
          <div className="absolute left-6 md:left-16 lg:left-24 top-0 w-px h-full bg-slate-100"></div>
          <div className="absolute right-6 md:right-16 lg:right-24 top-0 w-px h-full bg-slate-100"></div>
          <div className="absolute left-0 bottom-32 w-full h-px bg-slate-100"></div>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10 w-full pt-32 pb-20">
          
          <header className="mb-16">
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-16 md:w-24 bg-[#1B4F9B]" aria-hidden="true"></div>
              <h2 className="font-jakarta text-[10px] md:text-xs uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B]">
                {dict.hero_label}
              </h2>
            </div>
            
            <h1 className="font-playfair text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold text-[#0A192F] leading-[0.9] tracking-tighter max-w-6xl">
              {dict.hero_title_1} <br />
              <span className="text-[#1B4F9B] italic pr-8">{dict.hero_title_2}</span>
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end mt-16 md:mt-24 border-t border-slate-200 pt-12">
            <div className="lg:col-span-7">
              <p className="font-jakarta text-[#1B4F9B] text-xl md:text-3xl leading-[1.4] font-semibold max-w-3xl tracking-tight">
                {dict.hero_desc_1}<span className="text-[#0A192F] font-extrabold">{dict.hero_desc_bold}</span> 
              </p>
            </div>
            
            <div className="lg:col-span-5 flex flex-col gap-8 pb-4">
              <p className="font-jakarta text-sm text-[#475569] leading-relaxed font-medium">
                {dict.hero_desc_2}
              </p>
              <div className="flex gap-10">
                <div className="flex flex-col border-l-2 border-[#1B4F9B] pl-5">
                  <span className="font-playfair text-4xl font-bold text-[#0A192F] tracking-tighter">{dict.stat1_val}</span>
                  <span className="font-jakarta text-[9px] uppercase tracking-[0.25em] font-extrabold text-[#475569] mt-2">{dict.stat1_label}</span>
                </div>
                <div className="flex flex-col border-l-2 border-[#1B4F9B] pl-5">
                  <span className="font-playfair text-4xl font-bold text-[#0A192F] tracking-tighter">{dict.stat2_val}</span>
                  <span className="font-jakarta text-[9px] uppercase tracking-[0.25em] font-extrabold text-[#475569] mt-2">{dict.stat2_label}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =======================================================================
        SECTION 2: CORE ARCHITECTURE (THE PILLARS)
        Deep contrast, exotic tracking, strict geometric layouts.
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-white border-b border-slate-200 relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200">
            
            {/* Pillar 1 */}
            <article className="bg-white p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-[#F8FAFC] transition-colors duration-500 group">
              <div className="font-playfair text-5xl font-bold text-[#1B4F9B] mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{dict.pillar1_num}</div>
              <h3 className="font-jakarta text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] mb-5">{dict.pillar1_title}</h3>
              <p className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium">
                {dict.pillar1_desc}
              </p>
            </article>

            {/* Pillar 2 */}
            <article className="bg-white p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-[#F8FAFC] transition-colors duration-500 group">
              <div className="font-playfair text-5xl font-bold text-[#1B4F9B] mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{dict.pillar2_num}</div>
              <h3 className="font-jakarta text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] mb-5">{dict.pillar2_title}</h3>
              <p className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium">
                {dict.pillar2_desc}
              </p>
            </article>

            {/* Pillar 3 */}
            <article className="bg-white p-12 md:p-16 hover:bg-[#F8FAFC] transition-colors duration-500 group">
              <div className="font-playfair text-5xl font-bold text-[#1B4F9B] mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{dict.pillar3_num}</div>
              <h3 className="font-jakarta text-[11px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] mb-5">{dict.pillar3_title}</h3>
              <p className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium">
                {dict.pillar3_desc}
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =======================================================================
        NARRATIVE ARCHIVE 1: THE CREATIVE MIND (Arts, Crafts & Joy)
        Images: anpa8, anpa10, anpa9
        Refactored to lock specific aspect ratios, eliminating uneven clipping.
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          
          <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <span className="font-jakarta text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] block mb-6">
                {dict.arc1_label}
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1] tracking-tight">
                {dict.arc1_title_1} <br className="hidden md:block"/> {dict.arc1_title_2}
              </h2>
            </div>
            <p className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium max-w-lg">
              {dict.arc1_desc}
            </p>
          </header>

          {/* Aspect-Locked Symmetric Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="flex flex-col bg-[#F8FAFC] border border-slate-200 p-3 group">
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src="/images/academy/anpa8.jpg" 
                  alt="Joyful Classroom Experience" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
              <div className="mt-4 font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#0A192F]">
                {dict.arc1_img1}
              </div>
            </div>

            <div className="flex flex-col bg-[#F8FAFC] border border-slate-200 p-3 group">
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src="/images/academy/anpa10.jpg" 
                  alt="Student holding craft project" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
              <div className="mt-4 font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#0A192F]">
                {dict.arc1_img2}
              </div>
            </div>

            <div className="flex flex-col bg-[#F8FAFC] border border-slate-200 p-3 group">
              <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src="/images/academy/anpa9.jpg" 
                  alt="Student displaying sheep craft" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
              <div className="mt-4 font-jakarta text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#0A192F]">
                {dict.arc1_img3}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =======================================================================
        NARRATIVE ARCHIVE 2: SPIRITUAL DEVOTION (Milad, Naat, Gatherings)
        Images: anpa5, anpa6
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative flex flex-col gap-6">
              <div className="w-full h-[350px] border border-slate-200 shadow-sm relative group overflow-hidden bg-white p-2">
                <img src="/images/academy/anpa5.jpg" alt="Eid Milad un Nabi Naat Recitation" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-6 left-6 bg-white px-4 py-2 font-jakarta text-[9px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] border border-slate-200 shadow-sm">
                  {dict.arc2_badge}
                </div>
              </div>
              <div className="w-4/5 ml-auto h-[250px] border border-slate-200 shadow-sm relative -mt-20 z-10 group overflow-hidden bg-white p-2">
                <img src="/images/academy/anpa6.jpg" alt="Girls gathering for religious assembly" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
              </div>
            </div>

            <article className="order-1 lg:order-2 relative z-10">
              <header className="mb-8">
                <span className="font-jakarta text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] block mb-4">
                  {dict.arc2_label}
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1] tracking-tight">
                  {dict.arc2_title_1} <br/> {dict.arc2_title_2}
                </h2>
              </header>
              <div className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium space-y-6">
                <p>
                  {dict.arc2_desc_1}
                </p>
                <p>
                  {dict.arc2_desc_2}
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* =======================================================================
        NARRATIVE ARCHIVE 3: TANGIBLE WELFARE (Lunchboxes, Pencil Cases)
        Images: anpa4, anpa7, anpa1
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <span className="font-jakarta text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] block mb-6">
              {dict.arc3_label}
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1] tracking-tight mb-6">
              {dict.arc3_title_1} <br/> {dict.arc3_title_2}
            </h2>
            <p className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium">
              {dict.arc3_desc}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[450px] bg-white border border-slate-200 p-3 shadow-sm group overflow-hidden relative">
              <img src="/images/academy/anpa7.jpg" alt="Students receiving pencil cases" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-[#0A192F]/0 group-hover:bg-[#0A192F]/5 transition-colors duration-500"></div>
            </div>
            <div className="h-[450px] bg-white border border-slate-200 p-3 shadow-sm group overflow-hidden relative md:-translate-y-8">
              <img src="/images/academy/anpa4.jpg" alt="Young boys with lunchboxes" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-[#0A192F]/0 group-hover:bg-[#0A192F]/5 transition-colors duration-500"></div>
            </div>
            <div className="h-[450px] bg-white border border-slate-200 p-3 shadow-sm group overflow-hidden relative">
              <img src="/images/academy/anpa1.jpg" alt="Students with Children's Day cards and chocolates" className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-[#0A192F]/0 group-hover:bg-[#0A192F]/5 transition-colors duration-500"></div>
            </div>
          </div>

        </div>
      </section>

      {/* =======================================================================
        NARRATIVE ARCHIVE 4: COMMUNITY & CONFIDENCE (Stage & Assembly)
        Images: anpa3, anpa2
        =======================================================================
      */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <article className="relative z-10">
              <header className="mb-8">
                <span className="font-jakarta text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] block mb-4">
                  {dict.arc4_label}
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1] tracking-tight">
                  {dict.arc4_title_1} <br/> {dict.arc4_title_2}
                </h2>
              </header>
              <div className="font-jakarta text-sm text-[#475569] leading-[1.8] font-medium space-y-6">
                <p>
                  {dict.arc4_desc_1}
                </p>
                <p>
                  {dict.arc4_desc_2}
                </p>
              </div>
            </article>

            <div className="relative h-[600px] w-full">
              {/* Assembly Image */}
              <div className="absolute right-0 bottom-0 w-[85%] h-[400px] border border-slate-200 shadow-lg z-10 bg-white p-2 group overflow-hidden">
                <img 
                  src="/images/academy/anpa2.jpg" 
                  alt="Student Assembly" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              {/* Stage Performance Image */}
              <div className="absolute left-0 top-0 w-[70%] h-[350px] border border-slate-200 shadow-2xl z-20 bg-white p-2 group overflow-hidden">
                <img 
                  src="/images/academy/anpa3.jpg" 
                  alt="Girls performing on stage" 
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =======================================================================
        SECTION 7: TERMINAL ACTION FOOTER
        Completely unified, high-end white-and-blue minimalist frame.
        =======================================================================
      */}
      <section className="py-32 md:py-40 bg-white relative">
        {/* Structural center line to maintain the platform's layout architecture */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-slate-100 transform -translate-x-1/2 hidden lg:block" aria-hidden="true"></div>
        
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24 relative z-10 text-center flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#1B4F9B]"></div>
            <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B]">
              {dict.footer_label}
            </span>
            <div className="h-px w-8 bg-[#1B4F9B]"></div>
          </div>

          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-[#0A192F] tracking-tight mb-8">
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
              {dict.footer_btn1}
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            {/* i18n ROUTING: Dynamic Locale injected into the URL parameter */}
            <Link 
              href={`/${locale}/contact`}
              className="font-jakarta text-xs uppercase tracking-[0.2em] font-extrabold bg-transparent text-[#0A192F] border border-[#0A192F] px-12 py-5 hover:bg-[#F8FAFC] transition-colors duration-500"
            >
              {dict.footer_btn2}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}