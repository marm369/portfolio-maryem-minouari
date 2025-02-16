import React from "react";

const Title = ({ className = "", textClass = "", children }: { className?: string, textClass?: string, children: React.ReactNode }) => {
  return (
    <div className={className}>
      <h1 className={`text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white ${textClass}`}>
        {children}
      </h1>
      <div className="flex mx-auto mt-2">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
    </div>
  );
}

export default Title;