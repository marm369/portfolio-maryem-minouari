import { useTheme } from "@/context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-12 h-12 ml-4 transition-all duration-500 rounded-2xl 
        hover:rounded-[14px] hover:scale-105 ${
          theme === 'light' 
            ? 'bg-gradient-to-br from-yellow-100 to-amber-50 hover:shadow-[0_0_15px_#f59e0b33]' 
            : 'bg-gradient-to-br from-indigo-900 to-blue-900 hover:shadow-[0_0_15px_#3b82f633]'
        }`}
      aria-label="Toggle theme"
    >
      {/* Container animé pour les icônes */}
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${
        theme === 'light' ? 'rotate-0' : 'rotate-180'
      }`}>
        {/* Icône Soleil */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute w-6 h-6 transition-all duration-300 ${
            theme === 'light' 
              ? 'opacity-100 scale-100 text-amber-500' 
              : 'opacity-0 scale-50'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v2m0 14v2m9-9h-2m-14 0H3m15.364-6.364l-1.414 1.414M5.636 18.364l-1.414-1.414m0-10.93l1.414 1.414m10.93 10.93l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>

        {/* Icône Lune avec étoile */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute w-6 h-6 transition-all duration-300 ${
            theme === 'dark' 
              ? 'opacity-100 scale-100 text-blue-300' 
              : 'opacity-0 scale-50'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
          <path
            className="transition-opacity duration-300"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M15.5 5.5l-3 3"
            opacity={theme === 'dark' ? 1 : 0}
          />
        </svg>
      </div>

      {/* Effet de bordure animé */}
      <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
        theme === 'light' 
          ? 'border-amber-200/30 hover:border-amber-200/50' 
          : 'border-blue-400/20 hover:border-blue-400/40'
      }`} />
    </button>
  );
};

export default ThemeSwitcher;