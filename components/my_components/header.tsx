
export default function Header() {
  return (

    <header className="w-full h-[80px] flex justify-around bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 items-center text-white  overflow-hidden sticky"> 
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
        
        <div className="text-2xl font-bold tracking-wider relative z-10 flex items-center gap-3">
          <span className="text-cyan-400">&lt;</span>
          MINH TRÍ
          <span className="text-gray-400 text-lg">|</span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">FULLSTACK DEVELOPER</span>
          <span className="text-cyan-400">/&gt;</span>
        </div>
        
        <div className="flex gap-x-8 relative z-10">
          <a 
            href={"mailto:minhtrivo2005gg@gmail.com"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all duration-300 border-b-2 border-transparent hover:border-cyan-400 pb-1"
          >
            Email Me
          </a>
          <a 
            href={"https://www.linkedin.com/in/minh-tri-b15183284/"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all duration-300 border-b-2 border-transparent hover:border-cyan-400 pb-1"
          >
            LinkedIn
          </a>
          <a 
            href={"https://github.com/trisvo05"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-all duration-300 border-b-2 border-transparent hover:border-cyan-400 pb-1"
          >
            Github
          </a>
        </div>
      </header>

  );
}
