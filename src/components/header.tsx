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
  const [activeSection, setActiveSection] = useState("");
  const headerRef = useRef(null);

  const navItems = [
    {
      label: "About Me",
      link: "about",
      icon: "👩‍💻",
    },
    {
      label: "Resume",
      link: "resume",
      icon: "📄",
    },
    {
      label: "Work",
      link: "work",
      icon: "🎨",
    },
  ];

  const toggleMenu = () => {
    setOpen(!isOpen);
    // Add a class to the body to prevent scrolling when menu is open
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Header becomes fixed after scrolling
      if (window.scrollY > 80) {
        setFixed(true);
      } else {
        setFixed(false);
      }

      // Detect current section for active state
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-full transition-all duration-500 ${
        isFixed
          ? "fixed top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <Link href="/" className="group relative">
            <span
              className={`text-2xl font-bold inline-block ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <span className="relative z-10">Maryem</span>{" "}
              <span className="relative">
                Minouari
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </span>
            </span>
            <span className="sr-only">{`Maryem MINOUARI's Portfolio`}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.link)}
                className={`relative px-4 py-2 group ${
                  activeSection === item.link
                    ? "text-blue-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-200"
                }`}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.icon}
                  </span>
                  {item.label}
                </span>
                {activeSection === item.link && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-t-md"></span>
                )}
                <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
              </button>
            ))}
            <button
              className="ml-2 px-5 py-2 text-sm relative overflow-hidden group border border-blue-500 rounded-md text-blue-500 hover:text-white dark:text-blue-400 dark:hover:text-white transition-colors duration-300"
              onClick={() => scrollToSection("contact")}
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
            <div className="ml-4">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 lg:hidden">
            <ThemeSwitcher />
            <button
              onClick={toggleMenu}
              type="button"
              className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Full Screen Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 flex flex-col justify-center items-center transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center space-y-8">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="transform transition-transform duration-300 hover:scale-110"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => {
                  scrollToSection(item.link);
                  toggleMenu();
                }}
                className="text-3xl font-medium text-gray-800 dark:text-white flex items-center"
              >
                <span className="mr-3 text-2xl">{item.icon}</span>
                {item.label}
              </button>
            </div>
          ))}
          <div
            className="transform transition-transform duration-300 hover:scale-110"
            style={{ transitionDelay: `${navItems.length * 100}ms` }}
          >
            <button
              className="mt-6 px-8 py-3 text-xl bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300"
              onClick={() => {
                scrollToSection("contact");
                toggleMenu();
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
