import { EducationProps } from "@/lib/types";
import Image from "next/image";
import React from "react";

const Education = ({ data: education }: { data: EducationProps }) => {
  return (
    <div className="px-4 py-3 overflow-hidden bg-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out dark:bg-gray-800 hover:scale-105">
      <h2 className="text-md font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider transform hover:skew-x-3 transition-transform duration-300">
        {education.type}
      </h2>
      <span className="block mb-2 text-lg font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition-colors duration-300 cursor-pointer">
        {education.title}
      </span>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <Image
            className="w-12 h-12 rounded-full object-cover border-2 border-blue-200 dark:border-blue-600 hover:border-blue-500 transition-all duration-300"
            src={education.school?.logo || '/logo/company-default.png'}
            alt="School Logo"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-md font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors duration-300">
            {education.school?.name ?? ''}
          </h2>
          <div className="mt-1 space-y-1">
            <p className="text-sm text-gray-600 dark:text-gray-300 italic">
              {education.school?.university ?? ''}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-mono">
              {education.startedAt} — {education.endedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;