"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { scrollToSection } from "@/lib/helper";
import ThemeSwitcher from "@/components/themeSwitcher";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  const [visitors, setVisitors] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);

  const navItems = [
    { label: "About Me", link: "about", icon: "👩‍💻" },
    { label: "Resume", link: "resume", icon: "📄" },
    { label: "Work", link: "work", icon: "🎨" },
  ];

  const toggleMenu = () => {
    setOpen(!isOpen);
    document.body.classList.toggle("overflow-hidden", !isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 80);
  
      const sections = navItems.map((item) => item.link);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
  
    const fetchVisitors = async () => {
      try {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        setVisitors(data.visitors);
      } catch (err) {
        console.error("Failed to fetch visitors:", err);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    fetchVisitors(); 
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

  return (
    <header
      ref={headerRef}
      className={`w-full transition-all duration-300 ${
        isFixed
          ? "fixed top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative flex items-center gap-3">
          <span
            className={`text-xl sm:text-2xl font-bold inline-block ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <span className="relative z-10">Maryem</span>{" "}
            <span className="relative">Minouari</span>
          </span>

        </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className={`relative px-3 py-2 group text-sm sm:text-base ${
                  activeSection === item.link
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="relative z-10 flex items-center">
                <span className="mr-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {item.icon}
                </span>

                  {item.label}
                </span>
                {activeSection === item.link && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md"></span>
                )}
              </button>
            ))}
             <button
              className="ml-2 px-4 py-2 text-sm relative overflow-hidden group border border-blue-500 rounded-md text-blue-500 hover:text-white dark:text-blue-400 dark:hover:text-white transition-colors duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10">Contact Me</span>
            </button>

            {/* Grouping ThemeSwitcher + Visitors */}
            <div className="flex items-center gap-x-4 ml-4">
              <ThemeSwitcher />
              {visitors && (
                <span className="relative px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 rounded-full shadow-sm animate-fade-in border border-blue-300 dark:border-blue-700">
                  {visitors} visitors
                </span>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={toggleMenu}
              className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
              aria-label="toggle menu"
            >
              <div
                className={`w-6 h-6 relative transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <span
                  className={`absolute block w-full h-0.5 bg-current rounded-full transition-all ${
                    isOpen ? "rotate-90 top-1/2" : "top-1"
                  }`}
                />
                <span
                  className={`absolute block w-full h-0.5 bg-current rounded-full ${
                    isOpen ? "opacity-0" : "top-1/2"
                  }`}
                />
                <span
                  className={`absolute block w-full h-0.5 bg-current rounded-full transition-all ${
                    isOpen ? "-rotate-90 top-1/2" : "bottom-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
        style={{ height: "100dvh" }}
      >
        <div className="text-center space-y-6 w-full px-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToSection(item.link);
                toggleMenu();
              }}
              className="w-full py-4 text-xl font-medium text-gray-800 dark:text-white flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              <span className="mr-3 text-2xl">{item.icon}</span>
              {item.label}
            </button>
          ))}
          <button
            className="w-full max-w-xs mx-auto mt-6 px-8 py-3 text-lg bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
            onClick={() => {
              scrollToSection("contact");
              toggleMenu();
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
