import React from "react";

const Title = ({
  className = "",
  textClass = "",
  children,
}: {
  className?: string;
  textClass?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <h1
        className={`relative z-10 text-2xl font-semibold text-gray-800 lg:text-3xl 
        dark:text-white ${textClass} transition-all duration-500 
        hover:translate-x-1 hover:text-gray-900 dark:hover:text-gray-100`}
      >
        {children}

        <span
          className="absolute -bottom-1 left-0 h-0.5 w-full origin-left 
          scale-x-0 bg-gradient-to-r from-blue-400 to-purple-400 
          transition-transform duration-500 group-hover:scale-x-100"
        />
      </h1>

      <div
        className="absolute -right-2 top-1/2 h-2 w-2 -translate-y-1/2 
        rounded-full bg-purple-300 opacity-0 transition-all 
        duration-700 group-hover:opacity-100 dark:bg-purple-600"
      />

      <div
        className="absolute -left-4 top-0 h-full w-4 bg-gradient-to-r 
        from-blue-100/50 to-transparent opacity-0 transition-opacity 
        duration-500 group-hover:opacity-100 dark:from-blue-900/50"
      />
    </div>
  );
};

export default Title;
