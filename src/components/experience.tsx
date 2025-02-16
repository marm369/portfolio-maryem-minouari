import React from 'react';
import { ExperienceProps } from "@/lib/types";

const Experience = ({ data: experience }: { data: ExperienceProps }) => {
  return (
    <div className="px-4 py-2 overflow-hidden bg-blue-100 rounded-lg shadow-md dark:bg-gray-800 flex flex-col">
      <span
        className="block my-2 text-xl font-semibold text-blue-600 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
        {experience.title}
      </span>
      <div className="flex items-center">
        <div className="flex items-start">
          <a href={experience.company?.url} target="_blank" rel="noopener noreferrer">
            <img className="object-cover w-10 h-10 rounded-full"
                 src={experience.company?.logo ?? '/logo/company-default.png'}
                 alt="Avatar"
                 loading="lazy"
            />
          </a>
          <div className="mx-2">
            <a href={experience.company?.url} target="_blank" rel="noopener noreferrer">
              <h2 className="text-md font-medium text-blue-600 dark:text-blue-400" role="link">
                {experience.company?.name ?? ''}
              </h2>
            </a>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {experience.employment_type ?? ''}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {experience.company?.location ? experience.company?.location : ''}
                {experience.type && (experience.company?.location ? ' . ' : '') + experience.type}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {experience.startedAt} - {experience.endedAt}
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {experience.overview}
      </p>
      <div className="mt-auto flex flex-wrap gap-1 justify-end">
        {experience.skills.map((skill, index) => (
          <div key={index}
               className="bg-blue-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
