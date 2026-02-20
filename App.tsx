import React, { useState } from 'react';
import { BARBERS, SERVICES } from './constants';
import { LogoCrown, ScissorIcon, BeardIcon, RazorIcon, InstagramIcon } from './components/Icons';
import StyleAssistant from './components/StyleAssistant';

const App: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      {/* Navigation - Optimized for all screens */}
      <nav className="flex items-center justify-center space-x-4 md:space-x-8 py-6 md:py-8 px-4 text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] font-bold uppercase overflow-x-auto no-scrollbar whitespace-nowrap sticky top-0 bg-[#1a2433]/95 backdrop-blur-md z-50 border-b border-[#f5f1e6]/10">
        <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-gold transition-colors">About</a>
        <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-gold transition-colors">Services</a>
        <a href="#barbers" onClick={(e) => handleNavClick(e, 'barbers')} className="hover:text-gold transition-colors">Barbers</a>
        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-gold transition-colors">Contact</a>
        <button 
          onClick={() => setShowAssistant(!showAssistant)} 
          className="hover:text-white transition-colors text-gold border-l border-white/10 pl-4 md:pl-8 ml-2"
        >
          Book Now
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[90vh] md:h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
           <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop" alt="Barbershop Atmosphere" className="w-full h-full object-cover" />
        </div>
        <div className="z-10 flex flex-col items-center max-w-4xl">
          <LogoCrown className="w-16 h-16 md:w-20 md:h-20 mb-6 text-gold" />
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-[0.05em] mb-2 uppercase leading-none">MIDNIGHT</h1>
          <p className="text-gold tracking-[0.2em] text-xs md:text-base font-bold mb-10 uppercase px-4">Sample Website by Lucas Allen</p>
          <button 
             onClick={() => setShowAssistant(!showAssistant)}
             className="border-2 border-gold text-gold px-8 md:px-12 py-3 rounded-full hover:bg-gold hover:text-white transition-all font-bold tracking-widest text-[10px] md:text-xs"
          >
            BOOK AN EXPERIENCE
          </button>
        </div>
        <div className="absolute bottom-8 animate-bounce hidden sm:block">
            <ScissorIcon className="w-8 h-8 text-gold/30" />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-20">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-4">
            <span className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase block">About Us</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight uppercase">Craft.<br/>Character.<br/>Community.</h2>
          </div>
          <div className="lg:pt-16 space-y-6 md:space-y-8 text-base md:text-lg text-[#f5f1e6]/80 leading-relaxed font-light">
            <p>
              The Midnight Shear was founded on the belief that personal grooming is a foundational ritual of self-respect. We have curated a refined environment where modern technical precision meets the timeless comfort of the traditional shop.
            </p>
            <p className="font-semibold text-white italic border-l-2 border-gold pl-6 py-2">
              "Every silhouette we create is a collaborative work of structural art."
            </p>
            <p>
              Our specialists are chosen for their unique aesthetic vision and technical mastery. From contemporary textured shear work to sharp, traditional fades, our goal is to deliver a look that feels uniquely yours.
            </p>
          </div>
        </div>
      </section>

      {/* Large Grid Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-16 md:mb-24 overflow-hidden border-y border-white/5">
        <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&h=400&auto=format&fit=crop" className="w-full h-48 sm:h-64 md:h-80 object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-500" alt="Barber Tools" />
        <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400&h=400&auto=format&fit=crop" className="w-full h-48 sm:h-64 md:h-80 object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-500" alt="Barber Technique" />
        <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400&h=400&auto=format&fit=crop" className="w-full h-48 sm:h-64 md:h-80 object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-500" alt="Atmosphere" />
        <img src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=400&h=400&auto=format&fit=crop" className="w-full h-48 sm:h-64 md:h-80 object-cover grayscale brightness-75 hover:brightness-100 transition-all duration-500" alt="Detailing" />
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-black/10 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
           <div className="text-right mb-12 md:mb-16">
             <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-black opacity-5 leading-none select-none -mb-8 md:-mb-12 uppercase">services</h2>
           </div>
           
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
             {SERVICES.map((s) => (
               <div key={s.id} className="text-center group p-6 md:p-8 bg-white/5 rounded-sm border border-transparent hover:border-gold/20 transition-all duration-500 flex flex-col items-center">
                 <div className="mb-6">
                   {s.icon === 'haircut' && <ScissorIcon className="w-10 h-10 md:w-12 md:h-12 text-gold transition-transform group-hover:scale-110" />}
                   {s.icon === 'beard' && <BeardIcon className="w-10 h-10 md:w-12 md:h-12 text-gold transition-transform group-hover:scale-110" />}
                   {s.icon === 'shave' && <RazorIcon className="w-10 h-10 md:w-12 md:h-12 text-gold transition-transform group-hover:scale-110" />}
                 </div>
                 <h3 className="text-lg md:text-xl font-black mb-1 tracking-widest uppercase">{s.title}</h3>
                 <p className="text-[8px] md:text-[9px] font-bold text-gold tracking-[0.3em] mb-4 uppercase">{s.subtitle}</p>
                 <p className="text-xs text-[#f5f1e6]/60 leading-relaxed mb-8 flex-grow">{s.description}</p>
                 <div className="w-full py-2 px-6 border-t border-b border-gold/40 text-gold font-bold tracking-widest text-xs">
                   {s.price}
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Barbers Section */}
      <section id="barbers" className="py-16 md:py-24 px-6 md:px-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl sm:text-8xl md:text-[10rem] font-black opacity-5 leading-none select-none mb-12 md:mb-16 uppercase">the barbers</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-16 md:gap-y-20">
            {BARBERS.map((b) => (
              <div key={b.name} className="flex flex-col group">
                <div className="overflow-hidden mb-6 rounded-sm shadow-xl">
                  <img src={b.image} alt={b.name} className="w-full aspect-[4/5] md:aspect-[3/4] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-1 uppercase tracking-tight">{b.name}</h3>
                <a href={`https://instagram.com/${b.instagram}`} className="flex items-center text-[10px] md:text-xs text-gold font-bold tracking-widest mb-4 hover:underline">
                  <InstagramIcon className="w-4 h-4 mr-2" />
                  {b.handle}
                </a>
                <p className="text-xs md:text-sm text-[#f5f1e6]/70 leading-relaxed mb-6 flex-grow font-light italic">
                  "{b.bio}"
                </p>
                <button 
                  onClick={() => setShowAssistant(true)}
                  className="self-start border border-gold/30 px-6 md:px-8 py-2 rounded-full hover:bg-gold hover:text-white transition-all font-bold tracking-widest text-[9px] md:text-[10px] uppercase"
                >
                  BOOK NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#141d29] px-6 md:px-20 border-t border-white/5 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl sm:text-8xl md:text-9xl font-black opacity-5 leading-none select-none mb-12 md:mb-20 uppercase">contact us</h2>
          
          <div className="space-y-6 md:space-y-8">
            <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">Book An Appointment</span>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight max-w-4xl uppercase tracking-tighter">
              A commitment to excellence requires a dedicated moment in time. Reserve your session today and experience the difference of intentional grooming.
            </h3>
            <div className="flex flex-col md:flex-row gap-10 pt-10 border-t border-[#f5f1e6]/10">
               <div className="md:w-1/3">
                  <h4 className="text-gold font-bold tracking-widest text-[10px] uppercase mb-4">Studio Location</h4>
                  <p className="text-sm font-light leading-relaxed">442 North Meridian Avenue<br/>The District, SU 90021</p>
               </div>
               <div className="md:w-1/3">
                  <h4 className="text-gold font-bold tracking-widest text-[10px] uppercase mb-4">Hours</h4>
                  <p className="text-sm font-light leading-relaxed">Mon - Fri: 08:00 — 20:00<br/>Sat: 09:00 — 18:00<br/>Sun: Private Bookings</p>
               </div>
               <div className="md:ml-auto flex items-start">
                 <button 
                    onClick={() => setShowAssistant(true)}
                    className="w-full md:w-auto border-2 border-gold text-gold px-10 md:px-12 py-3 md:py-4 rounded-full hover:bg-gold hover:text-white transition-all font-bold tracking-widest text-xs md:text-sm uppercase"
                 >
                   BOOK ONLINE
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-6 border-t border-[#f5f1e6]/5 text-center">
        <div className="flex justify-center mb-6">
          <LogoCrown className="w-10 h-10 opacity-30 text-gold" />
        </div>
        <p className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-[#f5f1e6]/30 uppercase px-4 leading-relaxed">
          © 2026 MIDNIGHT • Created by Lucas Allen
        </p>
      </footer>

      {/* AI Booking Assistant Overlay */}
      {showAssistant && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-fade-in">
           <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col">
              <button 
                onClick={() => setShowAssistant(false)}
                className="self-end mb-4 text-white hover:text-gold transition-colors text-[10px] font-bold tracking-widest uppercase flex items-center"
              >
                DISMISS <span className="ml-2 bg-white/10 w-6 h-6 rounded-full flex items-center justify-center text-[8px]">X</span>
              </button>
              <div className="overflow-y-auto no-scrollbar rounded-lg border border-[#c29c5e]/30">
                <StyleAssistant />
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default App;