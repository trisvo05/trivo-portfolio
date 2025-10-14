"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hàm xử lý cuộn
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Kéo xuống
      setIsVisible(false);
    } else {
      // Kéo lên
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[80px] flex justify-around items-center text-white bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 overflow-hidden transition-transform duration-300 z-100 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Hiệu ứng nền */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Tên + vai trò */}
      <div className="text-2xl font-bold tracking-wider relative z-10 flex items-center gap-3">
        <span className="text-cyan-400">&lt;</span>
        MINH TRÍ
        <span className="text-gray-400 text-lg">|</span>
        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          FULLSTACK DEVELOPER
        </span>
        <span className="text-cyan-400">/&gt;</span>
      </div>

      {/* Liên kết */}
      <div className="flex gap-x-8 relative z-10">
        <a
          href="mailto:minhtrivo2005gg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-all duration-300 border-b-2 border-transparent hover:border-cyan-400 pb-1"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/minh-tri-b15183284/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-all duration-300 border-b-2 border-transparent hover:border-cyan-400 pb-1"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/trisvo05"
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
