import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Hexagon, Code, PenTool, Flag, Trophy, ChevronDown, User, Activity, CheckCircle2 } from 'lucide-react';

// --- STYLES & ANIMATIONS ---
const FallingDataSparks = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-[#ff1e1e] rounded-tl-full rounded-br-full opacity-60 animate-fall shadow-[0_0_10px_#ff1e1e]"
          style={{
            width: `${Math.random() * 6 + 4}px`,
            height: `${Math.random() * 8 + 6}px`,
            left: `${Math.random() * 100}%`,
            top: `-20px`,
            animationDuration: `${Math.random() * 4 + 6}s`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg) translateX(0px); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh) rotate(360deg) translateX(100px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 group bg-transparent hover:bg-white/5 transition-colors duration-500">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors flex items-center font-medium">
          <span className="text-[#ff1e1e] mr-6 font-bold text-lg">{isOpen ? '-' : '+'}</span>
          {question}
        </span>
        <ChevronDown size={14} className={`text-gray-500 transition-transform duration-700 ${isOpen ? 'rotate-180 text-[#ff1e1e]' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-xs text-gray-500 leading-relaxed border-l-2 border-[#ff1e1e]/30 pl-6 ml-8">
          {answer || "Information is classified until preliminary rounds commence."}
        </p>
      </div>
    </div>
  );
};

export default function CryptX() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff1e1e] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen flex flex-col items-center pt-8 pb-32">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ff1e1e]/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[800px] bg-black/80 blur-[100px] rounded-full pointer-events-none z-10" />
        
        {/* Red Triangle Accent behind Operative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[300px] border-r-[300px] border-t-[500px] border-l-transparent border-r-transparent border-t-[#ff1e1e]/30 opacity-50 blur-3xl pointer-events-none" />

        <FallingDataSparks />

        {/* Navbar */}
        <nav className="relative z-50 w-full max-w-[1600px] mx-auto px-8 flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2 text-xl font-bold tracking-widest uppercase">
            <Hexagon size={24} className="text-white fill-white" />
            <span>CRYPTX</span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Registration Portal
            </button>
            <button className="text-white text-xs font-bold uppercase tracking-wider hover:text-[#ff1e1e] transition-colors">
              Menu +
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1600px] mx-auto px-8 flex flex-col lg:flex-row justify-between items-start mt-12">
          
          {/* Left Column: Massive Typography */}
          <div className="relative flex-1 z-20 w-full">
            <div className="absolute -top-6 left-1 font-mono text-xs text-[#ff1e1e] tracking-widest uppercase animate-pulse">
              サイバー戦争<br/>CYBER WARFARE
            </div>
            
            <h1 className="text-[7rem] sm:text-[10rem] md:text-[13rem] xl:text-[16rem] font-black tracking-tighter leading-[0.75] uppercase relative z-10">
              <div className="text-white drop-shadow-2xl">CRYPT</div>
              <div className="text-white drop-shadow-2xl ml-[5%] md:ml-[15%] relative">
                X 2.0
                <span className="absolute -top-12 left-24 text-[10rem] md:text-[20rem] text-white/5 font-black -z-10 pointer-events-none">X</span>
              </div>
              <div className="text-[#ff1e1e] drop-shadow-2xl relative z-20">ARE</div>
              <div className="text-[#ff1e1e] drop-shadow-2xl relative z-20">NA</div>
            </h1>

            <div className="mt-12 flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]" />
              <span className="text-sm text-gray-400 font-medium tracking-widest uppercase">Hosted By ICTS - USJ</span>
            </div>
          </div>

          {/* Center: The Cyber-Operative (CSS Art adaptation) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[900px] pointer-events-none z-10 hidden md:flex flex-col items-center">
             {/* Wide Brim/Hood Silhouette */}
             <div className="w-[500px] lg:w-[600px] h-[150px] bg-gradient-to-b from-[#111] to-black rounded-[100%] absolute top-[100px] border-b border-white/10 shadow-2xl" style={{ transform: 'rotate(-5deg)' }}></div>
             {/* Glowing Visor */}
             <div className="absolute top-[280px] left-[55%] -translate-x-1/2 flex space-x-8 z-20">
               <div className="w-12 h-2 bg-[#ff1e1e] rounded-full blur-[1px] shadow-[0_0_20px_#ff1e1e,0_0_40px_#ff1e1e]" style={{ transform: 'rotate(5deg)' }} />
             </div>
             {/* Body Cloak */}
             <div className="w-[350px] lg:w-[450px] h-[600px] bg-gradient-to-tr from-black via-[#0a0a0a] to-[#1a1a1a] absolute top-[220px] rounded-t-[40%] rounded-b-[20%] border-l border-t border-white/5 opacity-90 shadow-[0_0_100px_rgba(0,0,0,1)]"></div>
             {/* Data Blade Handle */}
             <div className="w-[30px] h-[350px] bg-gradient-to-r from-neutral-900 to-black absolute top-[400px] left-[20%] border border-[#ff1e1e]/20 rotate-[-15deg] shadow-[0_0_30px_rgba(255,30,30,0.1)]">
               <div className="w-full h-full bg-[linear-gradient(rgba(255,30,30,0.2)_2px,transparent_2px)] bg-[size:100%_10px]" />
             </div>
          </div>

          {/* Right Column: Info */}
          <div className="relative flex-1 flex flex-col items-start lg:items-end pt-24 lg:pt-12 z-20 h-full justify-between pb-32 mt-12 lg:mt-0">
            <div className="text-4xl md:text-6xl lg:text-8xl font-light text-white/90 tracking-widest lg:rotate-6 lg:origin-right opacity-80 mix-blend-screen hidden md:block">
              ハッカー
            </div>

            <div className="flex flex-col items-start lg:items-end mt-12 md:mt-48 w-full max-w-sm">
               {/* Vertical accent */}
               <div className="hidden lg:flex w-8 h-24 mb-12 self-start flex-col justify-between ml-12">
                 <div className="w-full h-2 bg-white" />
                 <div className="w-full h-2 bg-white" />
                 <div className="w-full h-2 bg-white" />
                 <div className="w-full h-2 bg-white" />
               </div>

               <p className="text-sm text-gray-400 leading-relaxed text-left w-full lg:pl-12 max-w-[250px] mb-12 lg:mb-20">
                 One stage. Three tracks. Sri Lanka's only inter-university Hackathon, Designathon, and CTF.
               </p>

               {/* Glassmorphism Card */}
               <div className="w-full max-w-xs bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:bg-white/10 transition-colors">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff1e1e]/20 blur-3xl -z-10 group-hover:bg-[#ff1e1e]/30 transition-colors" />
                 <div className="w-10 h-10 mb-6 bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 rounded-xl flex items-center justify-center text-[#ff1e1e]">
                   <Activity size={20} className="animate-pulse" />
                 </div>
                 <h3 className="text-xl font-medium text-white mb-4">Live Execution</h3>
                 <p className="text-xs text-gray-400 leading-relaxed">
                   Registration closes in 26 days. Prepare your squad, align your vectors, and deploy into the nexus.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHITE SECTION (ABOUT/TRACKS) ================= */}
      <section className="relative z-30 w-full bg-[#f8f9fa] rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 text-black px-8 py-24 md:py-32 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Operation Briefing</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
            {/* Left side: Massive text */}
            <div className="flex-1 relative">
              <div className="absolute -left-[20%] top-20 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200 to-gray-50 rounded-full blur-2xl -z-10" />
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900">
                <span className="text-[#ff1e1e] inline-block mr-4 md:mr-6 text-3xl align-middle shadow-[0_0_15px_rgba(255,30,30,0.5)] rounded-full w-4 h-4" />
                CryptX 2.0 - is an elite arena of cyber 
                <span className="inline-block w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-neutral-200 rounded-full mx-2 md:mx-3 align-middle overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply grayscale" />
                </span>
                warfare that combines <span className="text-neutral-400">the intensity of a Hackathon,</span>
                <span className="inline-block w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-neutral-200 rounded-full mx-2 md:mx-3 align-middle overflow-hidden relative shadow-inner">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply grayscale" />
                </span>
                <span className="text-neutral-400">Designathon, and Capture The Flag.</span>
              </h2>

              <p className="mt-12 md:mt-16 text-sm text-neutral-500 max-w-sm leading-relaxed border-l-2 border-[#ff1e1e] pl-6 font-medium">
                Built by many. Won by few. Pick your discipline and show up to the ultimate technology convergence in Sri Lanka.
              </p>
            </div>

            {/* Right side: 2x2 Feature Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12">
              
              <div className="flex flex-col group">
                <div className="w-12 h-12 mb-6 text-[#ff1e1e] group-hover:scale-110 transition-transform">
                  <Code size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">Hackathon</h4>
                <div className="text-[10px] font-bold text-[#ff1e1e] mb-3 tracking-widest uppercase">Teams of 2-4</div>
                <p className="text-sm text-neutral-500 leading-relaxed">Build solutions that matter. Tackle real-world problem statements and ship functional software under extreme pressure.</p>
              </div>

              <div className="flex flex-col group">
                <div className="w-12 h-12 mb-6 text-[#ff1e1e] group-hover:scale-110 transition-transform">
                  <PenTool size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">Designathon</h4>
                <div className="text-[10px] font-bold text-[#ff1e1e] mb-3 tracking-widest uppercase">Teams of 1-3</div>
                <p className="text-sm text-neutral-500 leading-relaxed">Design with intent. Solve visual communication and UX challenges, delivering polished interfaces in a strict time window.</p>
              </div>

              <div className="flex flex-col group">
                <div className="w-12 h-12 mb-6 text-[#ff1e1e] group-hover:scale-110 transition-transform">
                  <Flag size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">Capture The Flag</h4>
                <div className="text-[10px] font-bold text-[#ff1e1e] mb-3 tracking-widest uppercase">Open to All</div>
                <p className="text-sm text-neutral-500 leading-relaxed">Hunt the flag. Exploit web vulnerabilities, break cryptography, reverse engineer binaries, and analyze memory dumps.</p>
              </div>

              <div className="flex flex-col group">
                <div className="w-12 h-12 mb-6 text-[#ff1e1e] group-hover:scale-110 transition-transform">
                  <Trophy size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2 uppercase tracking-wide">Grand Finale</h4>
                <div className="text-[10px] font-bold text-[#ff1e1e] mb-3 tracking-widest uppercase">04 April 2026</div>
                <p className="text-sm text-neutral-500 leading-relaxed">Finalists from all three tracks converge on-site at the Faculty of Technology, USJ, to compete in front of the judges.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= DARK STATS SECTION (IMPACT METRICS) ================= */}
      <section className="relative w-full bg-[#030303] text-white pt-32 pb-24 px-8 border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header Row */}
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-xl leading-tight">
              <span className="text-[#ff1e1e] inline-block mr-6 text-2xl align-middle shadow-[0_0_15px_rgba(255,30,30,0.5)] rounded-full w-3 h-3" />
              Stats defining the CryptX Arena
            </h2>
            <span className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">Impact Metrics</span>
          </div>

          {/* Grid of 3 Stat Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Registrations (Chart) */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 h-[380px] flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#ff1e1e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-full h-40 relative mt-4">
                <div className="absolute inset-0 flex flex-col justify-between opacity-10">
                  <div className="w-full h-px bg-white" />
                  <div className="w-full h-px bg-white" />
                  <div className="w-full h-px bg-white" />
                  <div className="w-full h-px bg-white" />
                </div>
                <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 Q10,75 25,60 T50,45 T75,20 T100,5" fill="none" stroke="#333" strokeWidth="2" className="group-hover:stroke-gray-500 transition-colors" />
                  <path d="M0,90 Q15,85 30,65 T60,50 T85,25 T100,10" fill="none" stroke="#ff1e1e" strokeWidth="3" />
                </svg>
                <div className="absolute top-[25%] left-[85%] w-4 h-4 bg-red-500 rounded-full shadow-[0_0_20px_#ff1e1e,0_0_40px_#ff1e1e] animate-pulse -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>

              <div className="relative z-10">
                <h4 className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-bold">Total Registrations</h4>
                <div className="text-6xl font-light tracking-tighter text-white">1000+</div>
              </div>
            </div>

            {/* Card 2: Difficulty Tiers */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 h-[380px] flex flex-col justify-between group hover:border-white/20 transition-colors relative">
              <div className="w-full h-48 relative flex flex-col items-center justify-center mt-4 perspective-[1000px]">
                <div className="w-48 h-16 bg-[#111] border border-white/10 rounded-2xl absolute top-8 transform scale-90 -translate-y-8 opacity-50 flex items-center px-4 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-xs text-white">Entry / Easy</span>
                </div>
                <div className="w-56 h-16 bg-[#161616] border border-white/10 rounded-2xl absolute top-12 transform scale-95 -translate-y-4 opacity-80 flex items-center px-4 shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-3 shadow-[0_0_10px_#eab308]" />
                  <span className="text-xs text-white">Intermediate</span>
                </div>
                <div className="w-64 h-20 bg-[#1c1c1c] border border-white/20 rounded-2xl absolute top-16 z-10 flex flex-col justify-center px-6 shadow-2xl group-hover:translate-y-[-5px] transition-transform">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#ff1e1e] mr-3 shadow-[0_0_15px_#ff1e1e]" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Insane</span>
                  </div>
                  <span className="text-[10px] text-gray-500 ml-6 mt-1">Root Access Level</span>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-bold">Challenge Tiers</h4>
                <div className="text-5xl font-light tracking-tighter text-white">3 Levels</div>
              </div>
            </div>

            {/* Card 3: Community Stats */}
            <div className="flex flex-col gap-6 h-[380px]">
              
              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-colors relative overflow-hidden">
                <h4 className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-bold">Universities Linked</h4>
                <div className="text-5xl font-light tracking-tighter text-white mb-2">25+</div>
                <div className="text-[10px] text-[#ff1e1e] tracking-widest uppercase animate-pulse">Island-wide Grid</div>
              </div>

              <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-colors relative overflow-hidden">
                <h4 className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-bold">Track Winners</h4>
                <div className="text-5xl font-light tracking-tighter text-white mb-2">09</div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center"><Trophy size={10} className="text-yellow-500" /></div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center"><Trophy size={10} className="text-gray-400" /></div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center"><Trophy size={10} className="text-orange-700" /></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= DARK TIMELINE & INFO SECTION ================= */}
      <section className="relative w-full bg-[#030303] text-white pt-12 pb-32 px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Timeline */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-2">Operational Timeline</h2>
              <p className="text-sm text-gray-500">Dates are locked. Prepare your vectors.</p>
            </div>
            
            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {[
                { date: "22 FEB 2026", title: "Registration Opens", desc: "The portal goes live. Secure your slot early." },
                { date: "07 MAR 2026", title: "Designathon Workshop", desc: "Introductory session on UI/UX principles." },
                { date: "14 MAR 2026", title: "Registration Closes", desc: "Final deadline. Access tokens will be revoked." },
                { date: "21 MAR 2026", title: "Preliminary Rounds", desc: "Qualifiers begin. CTF starts on the 28th." },
                { date: "04 APR 2026", title: "Grand Finale", desc: "Finalists converge on-site to execute operations." }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 group">
                  <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${i === 2 ? 'bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]' : 'bg-neutral-700'} border border-black`} />
                  <div className={`text-xs font-bold tracking-widest mb-1 ${i === 2 ? 'text-[#ff1e1e]' : 'text-gray-500'}`}>{item.date}</div>
                  <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roster & FAQ */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-medium tracking-tight mb-2">Command & Intel</h2>
              <p className="text-sm text-gray-500">Key personnel and classified queries.</p>
            </div>

            {/* Key Personnel Grid */}
            <div className="grid grid-cols-2 gap-4 mb-16">
              {[
                { name: "Raviru Rathnaweera", role: "President - ICTS" },
                { name: "Nuwan Konara", role: "CTF Coord" },
                { name: "Dulanga Perera", role: "Designathon Coord" },
                { name: "Yesith Hansana", role: "Hackathon Coord" }
              ].map((person, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-gray-400">
                    <User size={16} />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-white">{person.name}</h5>
                    <p className="text-[10px] text-[#ff1e1e] uppercase tracking-widest font-bold">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div className="border-t border-white/10">
              <FAQAccordion question="Who is eligible to compete?" answer="University students across Sri Lanka. School categories have specific bounds depending on the track." />
              <FAQAccordion question="Can I register for multiple tracks?" answer="Yes, but cross-track scheduling conflicts must be managed by the participant." />
              <FAQAccordion question="What is the registration fee?" answer="Zero. Entry requires skill, not capital." />
              <FAQAccordion question="Where is the final round?" answer="Faculty of Technology, University of Sri Jayewardenepura." />
            </div>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full bg-[#050505] pt-20 pb-12 px-8 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
          
          <div>
            <div className="flex items-center space-x-2 text-2xl font-bold tracking-widest uppercase mb-4">
              <Hexagon size={28} className="text-[#ff1e1e] fill-[#ff1e1e]" />
              <span>CRYPTX 2.0</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Sri Lanka's only event where Builders, Designers, and Hackers compete on the same stage.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Event</span>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors">About Tracks</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors">Timeline</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors">Contact</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Social</span>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors">Instagram</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors">Facebook</a>
            </div>
          </div>
          
        </div>

        <div className="max-w-[1400px] mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-medium">
          <p>© 2026 ICTS, Faculty of Technology, USJ. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <CheckCircle2 size={14} className="text-green-500" />
            <span>Systems Online</span>
          </div>
        </div>
      </footer>

    </div>
  );
}