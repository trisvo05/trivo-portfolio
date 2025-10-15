"use client";
import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FolderKanban,
  Laptop,
  PhoneCall,
  Settings,
  Trophy,
  User,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSub } from "@radix-ui/react-dropdown-menu";

const MySideBar = () => {
  const navItems = [
    { icon: User, label: "About Me", href: "#about" },
    { icon: Trophy, label: "Awards", href: "#awards" },
    { icon: BriefcaseBusiness, label: "Experience", href: "#experience" },
    { icon: Laptop, label: "Skills", href: "#skills" },
    { icon: FolderKanban, label: "Projects", href: "#projects" },
    { icon: PhoneCall, label: "Contact", href: "#contact" },
  ];

  const [activeSection, setActiveSection] = useState("about");

  // --- Scroll Spy ---
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navItems.forEach((item) => {
        const el = document.querySelector(item.href) as HTMLElement;
        if (el) {
          const sectionTop = el.offsetTop - 100; // trừ chiều cao header
          if (window.scrollY >= sectionTop) {
            current = item.href.replace("#", "");
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Cuộn mượt khi nhấn ---
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    const headerHeight = 80; // chiều cao header của bạn
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[300px] h-[100vh] bg-[#003366] flex flex-col justify-between text-white shadow-2xl overflow-hidden fixed top-0 left-0 z-30">
      {/* Hiệu ứng nền */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl opacity-10"></div>

      {/* Avatar */}
      <div className="relative z-10 pt-[calc(32px+80px)] pb-6">
        <div className="relative mx-auto w-[150px] h-[150px] group">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity"></div>
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="relative h-full w-full rounded-full object-cover border-4 border-white/20 shadow-xl"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 relative z-10">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <button
              key={index}
              onClick={() => handleScrollTo(item.href)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group backdrop-blur-sm border ${
                isActive
                  ? "bg-white/15 border-cyan-400 text-cyan-300 translate-x-1"
                  : "border-transparent hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  isActive
                    ? "text-cyan-300"
                    : "text-cyan-300 group-hover:text-cyan-200"
                } transition-colors`}
              />
              <span
                className={`font-medium text-sm ${
                  isActive ? "text-cyan-200" : "text-white"
                }`}
              >
                {item.label}
              </span>
              <ChevronRight
                className={`w-4 h-4 ml-auto transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="p-4 border-t border-white/10 relative z-10">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20">
            <Settings className="w-5 h-5 text-cyan-300" />
            <span className="font-medium text-sm">Settings</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-xl border border-gray-200 rounded-lg w-56">
            <DropdownMenuLabel className="text-gray-700 font-semibold">
              Cài đặt
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-gray-200" />

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100 cursor-pointer">
                <span className="text-gray-700">Chủ đề</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white shadow-xl border border-gray-200 rounded-lg">
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer text-gray-700">
                    ☀️ Sáng
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer text-gray-700">
                    🌙 Tối
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="hover:bg-gray-100 cursor-pointer">
                <span className="text-gray-700">Đổi ngôn ngữ</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent className="bg-white shadow-xl border border-gray-200 rounded-lg">
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer text-gray-700">
                    🇬🇧 English
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer text-gray-700">
                    🇻🇳 Tiếng Việt
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default MySideBar;
