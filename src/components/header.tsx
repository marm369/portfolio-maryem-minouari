"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { scrollToSection } from "@/lib/helper";
import ThemeSwitcher from "@/components/themeSwitcher";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const [isOpen, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);

  const navItems = [
    {
      label: "About Me",
      link: "about",
    },
    {
      label: "Resume",
      link: "resume",
    },
    {
      label: "Work",
      link: "work",
    },
  ];

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`bg-white dark:bg-gray-900 ${
        isFixed ? "fixed top-0 w-full z-50 shadow-lg" : ""
      }`}
    >
      <nav className="container p-4 mx-auto lg:flex lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              Maryem Minouari
            </span>
            <span className="sr-only">{`Maryem MINOUARI's Portfolio`}</span>
          </Link>

          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
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
                  className="w-6 h-6"
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
        </div>

        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md dark:bg-gray-900 lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:dark:bg-transparent lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            {navItems.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  scrollToSection(item.link);
                  setOpen(false);
                }}
                className="text-gray-700 lg:mx-5 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500 cursor-pointer"
              >
                {item.label}
              </span>
            ))}
          </div>

          <span
            className="block px-5 py-2 mt-4 text-sm text-center text-gray-700 capitalize transition-colors duration-300 transform border rounded-md dark:hover:bg-gray-700 dark:text-white lg:mt-0 hover:bg-gray-100 lg:w-auto"
            onClick={() => {
              scrollToSection("contact");
              setOpen(false);
            }}
          >
            Contact Us
          </span>
          <ThemeSwitcher />
        </div>
      </nav>
    </section>
  );
};

export default Header;
