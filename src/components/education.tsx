import {EducationProps} from "@/lib/types";
import React from "react";

const Education = ({ data: education }: { data: EducationProps }) => {
  return (
    <div className="px-4 py-2 overflow-hidden bg-blue-100 rounded-lg shadow-md dark:bg-gray-800">
      <h2 className="text-md font-medium text-blue-600 dark:text-blue-400 uppercase">
        {education.type}
      </h2>
      <span
        className="block mb-2 text-md font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
        {education.title}
      </span>
      <div className="flex items-center">
        <div className="flex items-start">
          <img className="object-cover w-10 h-10 rounded-full"
               src={education.school?.logo || '/logo/company-default.png'}
               alt="Avatar"
               loading="lazy"
          />
          <div className="mx-2">
            <h2 className="text-md font-medium text-blue-600 dark:text-blue-400" role="link">
              {education.school?.name ?? ''}
            </h2>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {education.school?.university ?? ''}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {education.startedAt} - {education.endedAt}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education;