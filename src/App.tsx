/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChefHat, 
  Briefcase, 
  MapPin, 
  ArrowRight, 
  ExternalLink,
  Award,
  Globe,
  Building2,
  Phone,
  Mail
} from 'lucide-react';
import { Establishment } from './types';

const establishments: Establishment[] = [
  {
    id: 'el-puntal',
    name: 'El Puntal',
    role: 'Asset Acquisition',
    since: '2000',
    description: 'A legendary culinary destination in Ibiza, offering refined Mediterranean flavors with breathtaking views of the Balearic Sea.',
    image: '/el-puntal.jpeg?v=2',
    location: 'Ibiza, Spain'
  },
  {
    id: 'banaras',
    name: 'Banaras',
    role: 'Managing Partner',
    since: '2021',
    description: 'A modern tribute to the spiritual heart of India, blending contemporary culinary techniques with traditional heritage.',
    image: '/banaras-restaurant.jpeg?v=2',
    location: 'Milan, Italy'
  },
  {
    id: 'dhaba',
    name: 'The Dhaba',
    role: 'Sole Proprietor',
    since: '2008',
    description: 'A staple of authentic Indian cuisine, where the warmth of tradition meets exceptional hospitality.',
    image: '/the-dhaba.jpg?v=2',
    location: 'Milan, Italy'
  },
  {
    id: 'rangoli',
    name: 'Rangoli',
    role: 'Founder & Director',
    since: '1997',
    description: 'The foundation of the group hospitality journey, showcasing 29 years of operational excellence.',
    image: '/rangoli-restaurant.jpg?v=2',
    location: 'Milan, Italy'
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white bg-brand-bg text-brand-ink luxury-gradient font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            <span className="text-2xl font-display italic tracking-tight font-bold">Mohan<span className="text-brand-accent">G</span></span>
            <span className="text-[8px] uppercase tracking-[0.4em] font-bold opacity-40">Group Excellence</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-semibold">
            {['About', 'Portfolio', 'Consultancy', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-brand-accent transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-bg flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="font-display font-black text-xl">MOHANG.</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 items-start text-6xl font-display font-black tracking-tighter uppercase">
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>01. About</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>02. Portfolio</a>
              <a href="#consultancy" onClick={() => setMobileMenuOpen(false)}>03. Advisory</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>04. Contact</a>
            </div>
            <div className="mt-auto border-t border-brand-border pt-8 font-mono text-[10px] tracking-widest opacity-30">
              MILAN // IBIZA // EST. 1997
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Ibiza luxury"
            className="w-full h-full object-cover opacity-20 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-b from-brand-bg via-brand-bg/40 to-brand-bg" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-brand-accent uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">MILAN • IBIZA • SINCE 1997</span>
              <h1 className="text-[14vw] lg:text-[11vw] leading-[0.8] mb-12 italic font-display tracking-tighter text-reveal">
                Legacy<br /> Preserved.
              </h1>
              
              <div className="grid md:grid-cols-2 gap-12 items-end">
                <p className="text-brand-ink/60 text-xl md:text-2xl font-light leading-relaxed font-display italic">
                  MohanG SRL is a private holdings and advisory firm directed by Mohan Singh Chauhan, specializing in the upper echelon of Mediterranean hospitality.
                </p>
                <div className="flex gap-4">
                  <a href="#portfolio" className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest bg-brand-accent px-8 py-4 rounded-full hover:scale-105 transition-all">
                    Explore Assets
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl glass-card p-2">
                <img 
                  src="/mohan-chauhan.jpeg?v=2" 
                  alt="Mohan Singh Chauhan"
                  className="w-full h-auto rounded-xl transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            <div>
              <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">The Director // Bharat Gaurav</span>
              <h2 className="text-6xl md:text-8xl mb-12 italic font-display">Mohan Singh <br /> Chauhan</h2>
              <div className="prose prose-invert prose-lg text-brand-ink/60 leading-relaxed font-display italic text-2xl mb-12">
                <p>
                  "From my early years to Milan, hospitality has been my bridge to the world. At MohanG SRL, we don't just manage assets; we cultivate success through an unwavering entrepreneurial spirit."
                </p>
              </div>
              <p className="text-brand-ink/40 leading-relaxed mb-12 text-lg">
                Recognized with the prestigious Bharat Gaurav award, Mohan Singh Chauhan has spent over 29 years bridging cultures through the culinary arts. His journey from humble beginnings to a Milanese hospitality veteran is a testament to consistency, operational precision, and a peerless network.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-12 border-t border-white/10">
                 <div>
                   <div className="text-4xl font-display font-bold text-brand-accent mb-2">1997</div>
                   <div className="text-[10px] uppercase tracking-widest opacity-40">Track Record</div>
                 </div>
                 <div>
                   <div className="text-4xl font-display font-bold text-brand-accent mb-2">95%</div>
                   <div className="text-[10px] uppercase tracking-widest opacity-40">Operational Stake</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-brand-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-24">
            <div className="max-w-2xl">
              <span className="text-brand-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Asset Portfolio</span>
              <h2 className="text-6xl md:text-8xl italic font-display leading-[0.9]">Selected <br /> Holdings</h2>
            </div>
            <p className="text-brand-ink/40 text-sm max-w-xs text-right border-r border-brand-accent pr-8 pb-2 italic">
              Active management of luxury assets across Milan and the Balearic Islands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {establishments.map((est, index) => (
              <motion.div
                key={est.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group glass-card overflow-hidden flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={est.image} 
                    alt={est.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-brand-bg/20 mix-blend-multiply" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-accent text-white px-3 py-1 text-[8px] uppercase tracking-widest font-black">Est. {est.since}</span>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="text-4xl italic font-display">{est.name}</h3>
                      <span className="text-[10px] uppercase tracking-widest opacity-30 font-bold">{est.role}</span>
                    </div>
                    <p className="text-brand-ink/60 font-display italic text-lg leading-relaxed mb-8">
                      {est.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono tracking-widest opacity-30 uppercase">{est.location}</span>
                    <ArrowRight className="w-4 h-4 text-brand-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section id="consultancy" className="py-32 bg-brand-ink text-brand-bg relative overflow-hidden">
        <div className="grid-overlay absolute inset-0 opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-brand-accent" />
                <span className="text-brand-accent font-mono text-[10px] font-bold uppercase tracking-widest">ADVISORY GROUP</span>
              </div>
              <h2 className="text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">Strategic<br />Advisory.</h2>
              <p className="text-brand-bg/60 text-xl font-light leading-relaxed mb-12 max-w-lg">
                Leveraging 29 years of operational intelligence to provide high-stakes advisory for market entry and asset management.
              </p>
              
              <div className="space-y-1">
                 {[
                   { icon: <Building2 className="w-5 h-5" />, title: 'Market Entry Strategy', desc: 'Navigating Mediterranean niche expansions.' },
                   { icon: <Briefcase className="w-5 h-5" />, title: 'Asset Acquisition Audit', desc: 'Operational due diligence for hospitality.' },
                   { icon: <Globe className="w-5 h-5" />, title: 'Global Relocation', desc: 'Cross-border executive and corporate guidance.' }
                 ].map((service, idx) => (
                   <div key={idx} className="p-8 border border-brand-bg/5 hover:border-brand-accent transition-all group flex items-start gap-8 bg-brand-bg/5">
                      <div className="mt-1 text-brand-accent">{service.icon}</div>
                      <div>
                        <h4 className="font-display font-black uppercase text-lg mb-2">{service.title}</h4>
                        <p className="text-sm opacity-40">{service.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square bg-brand-bg/5 border border-brand-bg/10 flex items-center justify-center p-20">
                  <div className="relative w-full h-full border border-brand-accent/20 flex items-center justify-center">
                     <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-accent" />
                     <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-accent" />
                     <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-accent" />
                     <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-accent" />
                     <Globe className="w-32 h-32 text-brand-accent/20" />
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                        <span className="text-[120px] font-display font-black opacity-5 tracking-tighter">SRL</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Banner */}
      <div className="bg-brand-accent py-6 overflow-hidden border-y border-brand-ink/10">
         <div className="flex whitespace-nowrap gap-12 animate-marquee-slow">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-[10px] uppercase tracking-[0.5em] font-black text-white/50">
                Hospitality • Advisory • Legacy • Innovation • Hospitality • Advisory • Legacy • Innovation
              </span>
            ))}
         </div>
      </div>

      {/* Inquiries Section */}
      <section id="contact" className="py-32 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-24">
                <div>
                  <h2 className="text-7xl italic font-display mb-12">General <br /> Inquiries</h2>
                  <div className="space-y-12">
                     <div className="group cursor-pointer">
                        <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest block mb-2">Main Office</span>
                        <p className="text-3xl font-display font-light text-brand-ink/80 group-hover:text-white transition-colors">Via Melchiorre Gioia 88,<br />20125 Milan, Italy</p>
                     </div>
                     <div className="group cursor-pointer">
                        <span className="text-brand-accent text-[10px] font-bold uppercase tracking-widest block mb-2">Digital</span>
                        <p className="text-3xl font-display font-light text-brand-ink/80 group-hover:text-white transition-colors underline underline-offset-8">contact@mohangsrl.com</p>
                     </div>
                  </div>
                </div>
                
                <div className="glass-card p-12 lg:p-20 flex flex-col justify-between relative rounded-3xl overflow-hidden">
                   <div className="luxury-gradient absolute inset-0 opacity-20" />
                   <div className="relative z-10 space-y-8">
                      <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center">
                         <span className="text-white font-display font-black text-xl italic">M</span>
                      </div>
                      <p className="text-xl font-display italic text-brand-ink/60 leading-relaxed">
                        "Reliability isn't a goal; it's our 29-year baseline. We invite you to explore the future of hospitality with us."
                      </p>
                   </div>
                   <div className="relative z-10 mt-12 flex justify-between items-end">
                      <div className="font-display italic">
                         <span className="text-[8px] font-bold uppercase tracking-widest opacity-30 block not-italic mb-1">Director</span>
                         Mohan Singh Chauhan
                      </div>
                      <div className="text-[10px] font-mono opacity-30">P.IVA / 14524390961</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex flex-col items-center md:items-start">
                 <span className="text-3xl font-display italic font-bold">Mohan<span className="text-brand-accent">G</span></span>
                 <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Hospitality • Advisory • Legacy</span>
              </div>
              
              <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold opacity-30">
                 {['Privacy', 'Terms', 'LinkedIn'].map((link) => (
                   <a key={link} href="#" className="hover:text-brand-accent transition-colors">
                     {link}
                   </a>
                 ))}
              </div>

              <div className="text-[9px] font-mono opacity-20 uppercase tracking-[0.3em]">
                © 2026 // MOHANG SRL // ASSETS PROTECTED
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}

