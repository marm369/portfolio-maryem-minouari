import {useTheme} from "@/context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-12 h-12 p-2 ml-4 text-gray-500 dark:text-gray-200 transition-colors duration-300 transform rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        // Light mode icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
      ) : (
        // Dark mode icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
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
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitcher;