import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Hexagon, Code, PenTool, Flag, Trophy, ChevronDown, User, Activity, CheckCircle2 } from 'lucide-react';
import homeHackerImg from './assets/home-hacker.png';
import laptopImg from './assets/laptop.png';
import handImg from './assets/hand.png';
import faceImg from './assets/face.png';

// --- ANIMATION COMPONENTS ---
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


// --- STYLES & ANIMATIONS ---
const FallingDataSparks = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addListener(handleMotionChange);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeListener(handleMotionChange);
    };
  }, []);
  
  // Don't render particles if user prefers reduced motion
  if (prefersReducedMotion) {
    return <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" />;
  }
  
  const particleCount = isMobile ? 5 : 15;
  
  const sparks = React.useMemo(() => 
    [...Array(particleCount)].map(() => ({
      width: Math.random() * 6 + 4,
      height: Math.random() * 8 + 6,
      left: Math.random() * 100,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    })), 
  [particleCount]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {sparks.map((spark, i) => (
        <div
          key={i}
          className="absolute bg-[#ff1e1e] rounded-tl-full rounded-br-full opacity-60 animate-fall shadow-[0_0_10px_#ff1e1e]"
          style={{
            width: `${spark.width}px`,
            height: `${spark.height}px`,
            left: `${spark.left}%`,
            top: `-20px`,
            animationDuration: `${spark.duration}s`,
            animationDelay: `${spark.delay}s`,
            transform: `rotate(${spark.rotation}deg)`,
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
        className="w-full py-4 sm:py-6 flex items-center justify-between text-left focus:outline-none active:scale-95 transition-transform"
      >
        <span className="text-xs sm:text-sm tracking-widest text-gray-400 group-hover:text-white transition-colors flex items-center font-medium">
          <span className="text-[#ff1e1e] mr-3 sm:mr-6 font-bold text-base sm:text-lg">{isOpen ? '−' : '+'}</span>
          {question}
        </span>
        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-700 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#ff1e1e]' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-64 opacity-100 pb-4 sm:pb-8' : 'max-h-0 opacity-0'}`}>
        <p className="text-xs text-gray-500 leading-relaxed border-l-2 border-[#ff1e1e]/30 pl-4 sm:pl-6 ml-6 sm:ml-8">
          {answer || "Information is classified until preliminary rounds commence."}
        </p>
      </div>
    </div>
  );
};

export default function CyberCon() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#ff1e1e] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[95vh] flex flex-col items-center pt-4 sm:pt-6 pb-16 sm:pb-28">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[750px] h-[400px] sm:h-[750px] bg-[#ff1e1e]/20 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[250px] sm:w-[475px] h-[400px] sm:h-[750px] bg-black/80 blur-[100px] rounded-full pointer-events-none z-10" />
        
        {/* Red Triangle Accent behind Operative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[150px] sm:border-l-[285px] border-r-[150px] sm:border-r-[285px] border-t-[250px] sm:border-t-[475px] border-l-transparent border-r-transparent border-t-[#ff1e1e]/30 opacity-50 blur-3xl pointer-events-none" />

        <FallingDataSparks />

        {/* Navbar */}
        <nav className="relative z-50 w-full max-w-[1520px] mx-auto px-4 sm:px-8 flex justify-between items-center mb-6 sm:mb-12">
          <div className="flex items-center space-x-2 text-base sm:text-xl font-bold tracking-widest uppercase">
            <Hexagon size={20} className="text-white fill-white sm:w-6 sm:h-6" />
            <span>CYBERCON'26</span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <button className="bg-white text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95">
              Deploy Credentials
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-[1520px] mx-auto px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-start mt-4 sm:mt-8">
          
          {/* Left Column: Massive Typography */}
          <div className="relative flex-1 z-20 w-full">
            <FadeIn delay={200}>
              <div className="absolute -top-6 left-1 font-mono text-xs text-[#ff1e1e] tracking-widest uppercase animate-pulse">
                侵入演習<br/>BREACH OPERATION
              </div>
            </FadeIn>
            
            <FadeIn delay={400}>
              <h1 className="text-[3.5rem] sm:text-[6.5rem] md:text-[9.5rem] lg:text-[12.5rem] xl:text-[15rem] font-black tracking-tighter leading-[0.75] uppercase relative z-0">
                <div className="text-white drop-shadow-2xl">CYBER</div>
                <div className="text-white drop-shadow-2xl ml-[5%] md:ml-[15%] relative">
                  CON'26
                  <span className="absolute -top-6 sm:-top-12 left-12 sm:left-24 text-[5rem] sm:text-[9.5rem] md:text-[19rem] text-white/5 font-black -z-10 pointer-events-none">C</span>
                </div>
                <div className="text-[#ff1e1e] drop-shadow-2xl relative z-0">ARE</div>
                <div className="text-[#ff1e1e] drop-shadow-2xl relative z-0">NA</div>
              </h1>
            </FadeIn>
          </div>

          {/* Center: The Cyber-Operative (Image) */}
          <FadeIn delay={800} className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[570px] lg:w-[760px] pointer-events-none z-20 flex flex-col items-center">
            <img loading="eager" src={homeHackerImg} alt="Cyber Operative" className="w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(255,30,30,0.15)]" />
          </FadeIn>

          {/* Classified Ops Text - Positioned at Bottom */}
          <FadeIn delay={600} className="absolute bottom-0 left-4 sm:left-8 z-30 w-full max-w-[calc(100%-32px)] pb-4 sm:pb-8">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-400 font-medium tracking-widest uppercase">Classified Ops | Hosted By ICT Club Of Saegis Campus</span>
            </div>
          </FadeIn>

          {/* Right Column: Info */}
          <div className="relative flex-1 flex flex-col items-start lg:items-end pt-8 sm:pt-20 lg:pt-10 z-20 h-full justify-between pb-12 sm:pb-28 mt-6 sm:mt-10 lg:mt-0">
            <FadeIn delay={400} className="text-4xl md:text-5xl lg:text-7xl font-light text-white/90 tracking-widest lg:rotate-6 lg:origin-right opacity-80 mix-blend-screen hidden md:block">
              ハッカー
            </FadeIn>

            <div className="flex flex-col items-start lg:items-end mt-6 sm:mt-10 md:mt-40 w-full max-w-sm">
               {/* Vertical accent */}
               <FadeIn delay={1000} className="hidden lg:flex w-8 h-20 mb-10 self-start flex-col justify-between ml-12">
                 <div className="w-full h-[6px] bg-white" />
                 <div className="w-full h-[6px] bg-white" />
                 <div className="w-full h-[6px] bg-white" />
                 <div className="w-full h-[6px] bg-white" />
               </FadeIn>

               <FadeIn delay={1200}>
                 <p className="text-sm text-gray-400 leading-relaxed text-left w-full lg:pl-12 max-w-[250px] mb-10 lg:mb-16">
                   One battlefield. Three vectors of attack. Sri Lanka's premier infiltration, infrastructure breach, and payload delivery competition.
                 </p>
               </FadeIn>

               {/* Glassmorphism Card */}
               <FadeIn delay={1400} className="w-full max-w-xs">
                 <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 relative overflow-hidden group hover:bg-white/10 transition-colors">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff1e1e]/20 blur-3xl -z-10 group-hover:bg-[#ff1e1e]/30 transition-colors" />
                   <div className="w-9 h-9 mb-5 bg-[#ff1e1e]/10 border border-[#ff1e1e]/30 rounded-xl flex items-center justify-center text-[#ff1e1e]">
                     <Activity size={18} className="animate-pulse" />
                   </div>
                   <h3 className="text-xl font-medium text-white mb-3">Hostile Engagement</h3>
                   <p className="text-xs text-gray-400 leading-relaxed">
                     Enrollment window closes in 26 days. Assemble your cell. Lock your protocols. Initiate breach sequence.
                   </p>
                 </div>
               </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHITE SECTION (ABOUT/TRACKS) ================= */}
      <section className="relative z-30 w-full bg-[#f8f9fa] rounded-t-[2rem] sm:rounded-t-[3rem] md:rounded-t-[5rem] -mt-16 text-black px-4 sm:px-8 py-12 sm:py-24 md:py-32 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-[1400px] mx-auto">
          
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-500">CLASSIFIED INTELLIGENCE</span>
            </div>
          </FadeIn>

          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-20">
            {/* Left side: Massive text */}
            <div className="flex-1 relative">
              <div className="absolute -left-[20%] top-20 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200 to-gray-50 rounded-full blur-2xl -z-10" />
              
              <FadeIn delay={200}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900">
                  <span className="text-[#ff1e1e] inline-block mr-4 md:mr-6 text-3xl align-middle shadow-[0_0_15px_rgba(255,30,30,0.5)] rounded-full w-4 h-4" />
                  CyberCon'26 - the nexus of digital 
                  <span className="inline-block w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-neutral-200 rounded-full mx-2 md:mx-3 align-middle overflow-hidden relative shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply grayscale" />
                  </span>
                  domination. Fusing <span className="text-neutral-400">systems engineering through rapid prototyping,</span>
                  <span className="inline-block w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-neutral-200 rounded-full mx-2 md:mx-3 align-middle overflow-hidden relative shadow-inner">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=200&auto=format&fit=crop')] bg-cover bg-center opacity-80 mix-blend-multiply grayscale" />
                  </span>
                  <span className="text-neutral-400">visual asymmetry, and exploitation methodologies.</span>
                </h2>
              </FadeIn>

              <FadeIn delay={400}>
                <p className="mt-12 md:mt-16 text-sm text-neutral-500 max-w-sm leading-relaxed border-l-2 border-[#ff1e1e] pl-6 font-medium">
                  Engineered by the elite. Conquered by the relentless. Choose your specialization and execute at Sri Lanka's most intense cyber convergence.
                </p>
              </FadeIn>
            </div>

            {/* Right side: Laptop Image */}
            <FadeIn delay={600} className="flex-1 relative flex justify-center pt-8 md:pt-0">
              <div className="w-full max-w-[400px] md:max-w-[500px] drop-shadow-[0_0_30px_rgba(0,0,0,0.1)]">
                <img loading="lazy" src={laptopImg} alt="Cyber Laptop" className="w-full h-auto object-contain" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= DARK STATS SECTION (IMPACT METRICS) ================= */}
      <section className="relative w-full bg-[#030303] text-white pt-16 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-8 border-t border-white/5">
        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          {/* Header Row */}
          <FadeIn>
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-end mb-10 sm:mb-20">
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-medium tracking-tight max-w-xl leading-tight">
                <span className="text-[#ff1e1e] inline-block mr-3 sm:mr-6 text-2xl align-middle shadow-[0_0_15px_rgba(255,30,30,0.5)] rounded-full w-3 h-3" />
                Stats defining the CyberCon'26 Arena
              </h2>
              <span className="text-xs text-gray-500 uppercase tracking-widest hidden md:block">Impact Metrics</span>
            </div>
          </FadeIn>

          {/* Grid of 3 Stat Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            
            {/* Card 1: Registrations (Chart) */}
            <FadeIn delay={200} className="bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 h-auto min-h-[280px] sm:min-h-[320px] lg:h-[380px] flex flex-col justify-between group hover:border-white/20 transition-colors relative overflow-hidden">
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
                <h4 className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-bold">Operatives Deployed</h4>
                <div className="text-4xl sm:text-6xl font-light tracking-tighter text-white">1000+</div>
              </div>
            </FadeIn>

            {/* Card 2: Difficulty Tiers */}
            <FadeIn delay={400} className="bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 h-auto min-h-[280px] sm:min-h-[320px] lg:h-[380px] flex flex-col justify-between group hover:border-white/20 transition-colors relative">
              <div className="w-full h-40 sm:h-48 relative flex flex-col items-center justify-center mt-4 perspective-[1000px]">
                <div className="w-36 sm:w-48 h-12 sm:h-16 bg-[#111] border border-white/10 rounded-2xl absolute top-8 transform scale-90 -translate-y-8 opacity-50 flex items-center px-3 sm:px-4 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3 shadow-[0_0_10px_#22c55e]" />
                  <span className="text-[10px] sm:text-xs text-white">Entry / Easy</span>
                </div>
                <div className="w-44 sm:w-56 h-12 sm:h-16 bg-[#161616] border border-white/10 rounded-2xl absolute top-12 transform scale-95 -translate-y-4 opacity-80 flex items-center px-3 sm:px-4 shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-3 shadow-[0_0_10px_#eab308]" />
                  <span className="text-[10px] sm:text-xs text-white">Intermediate</span>
                </div>
                <div className="w-52 sm:w-64 h-16 sm:h-20 bg-[#1c1c1c] border border-white/20 rounded-2xl absolute top-16 z-10 flex flex-col justify-center px-4 sm:px-6 shadow-2xl group-hover:translate-y-[-5px] transition-transform">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#ff1e1e] mr-3 shadow-[0_0_15px_#ff1e1e]" />
                    <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">Insane</span>
                  </div>
                  <span className="text-[10px] text-gray-500 ml-6 mt-1">Root Access Level</span>
                </div>
              </div>

              <div className="relative z-10">
                <h4 className="text-gray-400 text-sm mb-2 uppercase tracking-wider font-bold">Threat Levels</h4>
                <div className="text-3xl sm:text-5xl font-light tracking-tighter text-white">3 Levels</div>
              </div>
            </FadeIn>

            {/* Card 3: Community Stats */}
            <div className="flex flex-col gap-4 sm:gap-6 h-auto sm:h-[380px]">
              
              <FadeIn delay={600} className="bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-colors relative overflow-hidden min-h-[140px]">
                <h4 className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-bold">Command Nodes Active</h4>
                <div className="text-3xl sm:text-5xl font-light tracking-tighter text-white mb-2">25+</div>
                <div className="text-[10px] text-[#ff1e1e] tracking-widest uppercase animate-pulse">Distributed Network</div>
              </FadeIn>

              <FadeIn delay={800} className="bg-[#0a0a0a] border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex-1 flex flex-col justify-center items-center text-center group hover:border-white/20 transition-colors relative overflow-hidden min-h-[140px]">
                <h4 className="text-gray-400 text-xs mb-1 uppercase tracking-wider font-bold">Mission Leaders</h4>
                <div className="text-3xl sm:text-5xl font-light tracking-tighter text-white mb-2">09</div>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center"><Trophy size={10} className="text-yellow-500" /></div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center"><Trophy size={10} className="text-gray-400" /></div>
                  <div className="w-6 h-6 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center"><Trophy size={10} className="text-orange-700" /></div>
                </div>
              </FadeIn>

            </div>

          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL TIMELINE SECTION ================= */}
      <section className="relative w-full bg-[#030303] text-white pt-10 sm:pt-16 pb-0 px-4 sm:px-8 border-t border-white/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row items-end gap-8 sm:gap-12 md:gap-20">
          
          {/* Left side: Hand Image */}
          <FadeIn delay={200} className="flex-1 relative flex justify-center items-end self-end pt-8 md:pt-0 -mb-2 md:-mb-6 lg:-mb-10">
            <div className="w-full max-w-[400px] md:max-w-[500px] drop-shadow-[0_0_50px_rgba(0,0,0,0.2)] flex justify-center items-end">
              <img loading="lazy" src={handImg} alt="Cyber Hand" className="w-full h-auto object-contain object-bottom block" />
            </div>
          </FadeIn>

          {/* Right side: Timeline */}
          <div className="flex-1 w-full py-12 lg:py-24">
            <FadeIn delay={400}>
              <div className="mb-12">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-4">Mission Chronology</h2>
                <p className="text-gray-400 text-sm sm:text-lg">Endpoints immutable. Sharpen your exploits.</p>
              </div>
            </FadeIn>
            
            <div className="relative border-l border-white/10 ml-3 space-y-12">
              {[
                { date: "22 FEB 2026", title: "Agent Enrollment", desc: "Credentials activated. Infiltration slot allocation begins." },
                { date: "07 MAR 2026", title: "UX Breach Workshop", desc: "Advanced methodology briefing—visual system exploitation." },
                { date: "14 MAR 2026", title: "Enrollment Sealed", desc: "Final checkpoint. Unauthorized submissions purged." },
                { date: "21 MAR 2026", title: "Qualifiers Ignited", desc: "Screening begins. Full-scale breach launches 28th." },
                { date: "04 APR 2026", title: "Final Incursion", desc: "Elite operatives engage. On-site payload delivery commences." }
              ].map((item, i) => (
                <FadeIn key={i} delay={600 + (i * 150)} className="relative pl-8 group">
                  <div className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${i === 2 ? 'bg-[#ff1e1e] shadow-[0_0_10px_#ff1e1e]' : 'bg-neutral-700'} border border-black z-10`} />
                  <div className={`text-xs font-bold tracking-widest mb-1 ${i === 2 ? 'text-[#ff1e1e]' : 'text-gray-500'}`}>{item.date}</div>
                  <h4 className="text-lg md:text-xl font-medium text-white mb-2 group-hover:text-[#ff1e1e] transition-colors">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-sm">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMAND & INTEL (FAQ) SECTION ================= */}
      <section className="relative w-full bg-[#030303] text-white pt-10 sm:pt-16 pb-16 sm:pb-32 px-4 sm:px-8 border-t border-white/5">
        <div className="max-w-[800px] mx-auto">
          
          <FadeIn>
            <div className="mb-16 md:text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-4">Command Structure</h2>
              <p className="text-gray-500">Authorized contacts and classified protocols.</p>
            </div>
          </FadeIn>

          {/* Key Personnel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {[
              { name: "Raviru Rathnaweera", role: "Commanding Officer - ICTS" },
              { name: "Nuwan Konara", role: "Exploitation Director" },
              { name: "Dulanga Perera", role: "Payload Lead" },
              { name: "Yesith Hansana", role: "Systems Architect" }
            ].map((person, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center space-x-4 hover:bg-white/10 hover:border-white/20 transition-all cursor-crosshair group">
                  <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-gray-400 group-hover:text-[#ff1e1e] transition-colors">
                    <User size={20} />
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-white group-hover:text-white/90 transition-colors">{person.name}</h5>
                    <p className="text-[10px] text-[#ff1e1e] uppercase tracking-widest font-bold mt-1 opacity-80">{person.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* FAQs */}
          <FadeIn delay={400}>
            <div className="border border-white/10 rounded-3xl overflow-hidden bg-black/20">
              <FAQAccordion question="Who qualifies for deployment?" answer="University operatives across Sri Lanka. Secondary agents welcome—clearance determined by track specialization." />
              <FAQAccordion question="Can I pursue multiple vectors?" answer="Affirmative. Synchronize your timeline. Parallel execution monitored." />
              <FAQAccordion question="What is the access fee?" answer="Null. Merit-based clearance only—no currency transactions." />
              <FAQAccordion question="Where does final extraction occur?" answer="Faculty of Technology Headquarters, USJ Command Base." />
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="w-full relative bg-[#050505] pt-12 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-8 border-t border-white/10 overflow-hidden">
        
        {/* Massive Solid Face Graphic (Upper Layer) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] sm:max-w-[800px] h-[120%] pointer-events-none z-20 flex items-center justify-center opacity-30 sm:opacity-100">
          <img loading="lazy" src={faceImg} alt="Cyber Face" className="w-full h-full object-contain object-center drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start sm:items-center gap-8 sm:gap-12 mb-10 sm:mb-16">
          
          {/* Left Side: Brand */}
          <FadeIn className="flex-1">
            <div className="flex items-center space-x-2 text-2xl font-bold tracking-widest uppercase mb-4">
              <Hexagon size={28} className="text-[#ff1e1e] fill-[#ff1e1e]" />
              <span>CYBERCON'26</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Sri Lanka's singular nexus where Architects, Engineers, and Operatives execute simultaneous strikes on one battlefield.
            </p>
          </FadeIn>

          {/* Right Side: Links */}
          <div className="flex-1 flex flex-row justify-start sm:justify-end gap-10 sm:gap-16 w-full sm:w-auto">
            <FadeIn delay={200} className="flex flex-col space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Mission</span>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors bg-black/50 px-2 -mx-2 rounded">Vectors</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors bg-black/50 px-2 -mx-2 rounded">Chronology</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors bg-black/50 px-2 -mx-2 rounded">Dispatch</a>
            </FadeIn>
            <FadeIn delay={400} className="flex flex-col space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Social</span>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors bg-black/50 px-2 -mx-2 rounded">LinkedIn</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors bg-black/50 px-2 -mx-2 rounded">Instagram</a>
              <a href="#" className="text-sm text-white hover:text-[#ff1e1e] transition-colors bg-black/50 px-2 -mx-2 rounded">Facebook</a>
            </FadeIn>
          </div>
          
        </div>

        <FadeIn delay={600}>
          <div className="max-w-[1400px] mx-auto relative z-10 border-t border-white/10 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium bg-[#050505]/80 p-3 sm:p-4 rounded-xl gap-3">
            <p className="text-white/70">© 2026 ICT Security Division, Faculty of Technology, USJ. Classified operations.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Protocol Enforcement</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Operational Conduct</a>
              <div className="flex items-center space-x-2 border-l border-white/10 pl-6">
                <CheckCircle2 size={14} className="text-green-500" />
                <span className="text-white/70 uppercase tracking-widest text-[10px]">All Systems Go</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </footer>

    </div>
  );
}