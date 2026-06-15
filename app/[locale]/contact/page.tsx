// app/[locale]/contact/page.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const fallbackDict = {
  hero_label: "Institutional Communications",
  hero_title_1: "Transparency demands",
  hero_title_2: "absolute accessibility.",
  hero_desc_1: "Whether you are a philanthropic partner, a corporate sponsor, or a donor verifying a Zakat transfer, the Rajab Ali Welfare Foundation maintains an ",
  hero_desc_bold: "open, direct line to our core administration.",
  dir_hq: "HQ",
  dir_label: "Global Directory",
  dir_title_1: "Direct lines of",
  dir_title_2: "communication.",
  dir_desc: "Initiate a dialogue with our administration regarding operational logistics, Zakat verification, or institutional partnerships.",
  wa_label: "Primary Digital Line",
  wa_title: "WhatsApp Verification",
  wa_admin: "Admin: Haji Hussain",
  wa_desc: "The fastest and most direct method to verify Zakat transfers, confirm ration box allocations, and receive immediate operational updates.",
  wa_btn: "Message 0335-2745614",
  hq_label: "Physical Infrastructure",
  hq_title: "Soldier Bazar, Karachi",
  hq_reg: "NGO Reg No. 6707725",
  hq_desc: "Our operational headquarters remains deeply embedded in the community we serve. All administrative functions, vetting protocols, and logistics are coordinated from this central node.",
  form_label: "Formal Correspondence",
  form_title: "Submit an institutional inquiry.",
  form_desc: "For corporate sponsorships, press inquiries, or detailed philanthropic partnerships, please utilize our formal digital transmission protocol. Our administration reviews all submissions and establishes contact within 24 operational hours.",
  notice_title: "Inquiry Routing Notice",
  notice_1: "To verify a recent donation or Zakat transfer, please use the WhatsApp channel directly instead of this form.",
  notice_2: "Ensure all corporate or institutional details are accurate to expedite routing.",
  field_name: "Full Name",
  field_email: "Institutional Email Address",
  field_subject: "Subject of Inquiry",
  field_message: "Official Correspondence",
  btn_transmitting: "Transmitting Protocol...",
  btn_transmit: "Transmit Inquiry",
  success_title: "Inquiry Verified & Transmitted.",
  success_desc: "Your correspondence has been securely routed to the Rajab Ali Welfare Foundation administration. A representative will review your institutional details and establish contact within 24 operational hours.",
  success_btn: "Submit Another Inquiry"
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dict, setDict] = useState<any>(null);
  
  // Next.js 15+ Requirement for Client Components to read the URL safely
  const params = useParams();
  const locale = (params?.locale as string) || 'en';

  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const payload = locale === 'ur' 
          ? (await import('../../../dictionaries/ur.json')).default 
          : (await import('../../../dictionaries/en.json')).default;
        
        setDict({ ...fallbackDict, ...payload.contact });
      } catch (error) {
        console.error("Dictionary Load Error:", error);
        setDict(fallbackDict);
      }
    };
    fetchDictionary();
  }, [locale]);

  const handleTransmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (!dict) return <div className="min-h-screen bg-white"></div>;

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

      {/* SECTION 2: DIRECTORY */}
      <section className="py-24 md:py-32 bg-[#F8FAFC] border-b border-slate-200 relative z-10">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <div className="lg:col-span-4 relative">
              <div className="sticky top-40">
                <div className="font-playfair text-[#1B4F9B] text-[8rem] font-bold opacity-5 mb-8 leading-none tracking-tighter">{dict.dir_hq}</div>
                <h3 className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-[#0A192F] mb-6 border-l-2 border-[#1B4F9B] pl-4">{dict.dir_label}</h3>
                <h4 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] tracking-tight leading-[1.1] mb-8">
                  {dict.dir_title_1} <br/><span className="italic text-[#1B4F9B]">{dict.dir_title_2}</span>
                </h4>
                <p className="text-sm text-[#475569] leading-[1.8] font-medium pr-8">{dict.dir_desc}</p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 shadow-sm">
                
                <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-slate-200 bg-white hover:bg-[#F8FAFC] transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#1B4F9B] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" aria-hidden="true"></div>
                  <div className="w-14 h-14 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center text-[#1B4F9B] mb-8">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h5 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#475569] mb-4">{dict.wa_label}</h5>
                  <h6 className="font-playfair text-3xl font-bold text-[#0A192F] mb-2 tracking-tight">{dict.wa_title}</h6>
                  <p className="text-xs text-[#1B4F9B] font-bold uppercase tracking-widest mb-6">{dict.wa_admin}</p>
                  <p className="text-sm text-[#475569] leading-[1.8] font-medium mb-10">{dict.wa_desc}</p>
                  <a href="https://wa.me/923352745614" target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#1B4F9B] hover:text-[#0A192F] transition-colors">
                    {dict.wa_btn}
                    <svg className="w-5 h-5 transform transition-transform duration-500 group-hover/btn:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                <div className="p-10 md:p-14 bg-white hover:bg-[#F8FAFC] transition-colors duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#0A192F] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" aria-hidden="true"></div>
                  <div className="w-14 h-14 bg-[#F8FAFC] border border-slate-100 flex items-center justify-center text-[#0A192F] mb-8">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h5 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#475569] mb-4">{dict.hq_label}</h5>
                  <h6 className="font-playfair text-3xl font-bold text-[#0A192F] mb-2 tracking-tight">{dict.hq_title}</h6>
                  <p className="text-xs text-[#0A192F] font-bold uppercase tracking-widest mb-6">{dict.hq_reg}</p>
                  <p className="text-sm text-[#475569] leading-[1.8] font-medium">{dict.hq_desc}</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: FORM */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            <div className="lg:col-span-5 relative z-10">
              <header className="mb-12">
                <span className="text-[10px] uppercase tracking-[0.4em] font-extrabold text-[#1B4F9B] block mb-6">{dict.form_label}</span>
                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0A192F] leading-[1.1] tracking-tight mb-8">{dict.form_title}</h2>
                <p className="text-sm text-[#475569] leading-[1.8] font-medium">{dict.form_desc}</p>
              </header>
              <div className="bg-[#F8FAFC] border border-slate-200 p-8 md:p-10">
                <h4 className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#0A192F] mb-6 border-b border-slate-200 pb-4">{dict.notice_title}</h4>
                <ul className="space-y-4 text-sm text-[#475569] font-medium">
                  <li className="flex items-start gap-3"><span className="text-[#1B4F9B] font-bold mt-0.5">•</span>{dict.notice_1}</li>
                  <li className="flex items-start gap-3"><span className="text-[#1B4F9B] font-bold mt-0.5">•</span>{dict.notice_2}</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              {!isSubmitted ? (
                <form onSubmit={handleTransmit} className="space-y-12 transition-opacity duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <input type="text" id="fullName" name="fullName" disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-slate-200 text-[#0A192F] text-lg py-3 focus:outline-none focus:ring-0 focus:border-[#1B4F9B] transition-colors placeholder-transparent disabled:opacity-50" placeholder={dict.field_name} required />
                      <label htmlFor="fullName" className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[#1B4F9B]">{dict.field_name}</label>
                    </div>
                    <div className="relative group">
                      <input type="email" id="emailAddress" name="emailAddress" disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-slate-200 text-[#0A192F] text-lg py-3 focus:outline-none focus:ring-0 focus:border-[#1B4F9B] transition-colors placeholder-transparent disabled:opacity-50" placeholder={dict.field_email} required />
                      <label htmlFor="emailAddress" className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[#1B4F9B]">{dict.field_email}</label>
                    </div>
                  </div>
                  <div className="relative group">
                    <input type="text" id="subject" name="subject" disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-slate-200 text-[#0A192F] text-lg py-3 focus:outline-none focus:ring-0 focus:border-[#1B4F9B] transition-colors placeholder-transparent disabled:opacity-50" placeholder={dict.field_subject} required />
                    <label htmlFor="subject" className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-[#1B4F9B]">{dict.field_subject}</label>
                  </div>
                  <div className="relative group pt-4">
                    <textarea id="message" name="message" rows={5} disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-slate-200 text-[#0A192F] text-lg py-3 focus:outline-none focus:ring-0 focus:border-[#1B4F9B] transition-colors placeholder-transparent resize-none disabled:opacity-50" placeholder={dict.field_message} required></textarea>
                    <label htmlFor="message" className="absolute left-0 -top-2 text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#475569] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-5 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-[#1B4F9B]">{dict.field_message}</label>
                  </div>
                  <div className="pt-8 relative">
                    <button type="submit" disabled={isSubmitting} className="group inline-flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] font-extrabold bg-[#0A192F] text-white px-16 py-6 hover:bg-[#1B4F9B] transition-colors duration-500 w-full md:w-auto shadow-xl disabled:bg-slate-400 disabled:cursor-not-allowed">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                          {dict.btn_transmitting}
                        </>
                      ) : (
                        <>
                          {dict.btn_transmit}
                          <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="bg-[#F8FAFC] border border-[#1B4F9B] p-12 md:p-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="w-16 h-16 bg-[#1B4F9B] flex items-center justify-center text-white mb-8 shadow-lg">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#0A192F] mb-6 tracking-tight">{dict.success_title}</h3>
                  <p className="text-base text-[#475569] leading-relaxed font-medium mb-10">{dict.success_desc}</p>
                  <button onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase tracking-[0.3em] font-extrabold text-[#1B4F9B] border-b-2 border-[#1B4F9B] pb-1 hover:text-[#0A192F] hover:border-[#0A192F] transition-colors">
                    {dict.success_btn}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}