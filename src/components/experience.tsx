import React from "react";
import { ExperienceProps } from "@/lib/types";
import Image from "next/image";

const Experience = ({ data: experience }: { data: ExperienceProps }) => {
  return (
    <div className="px-6 py-4 overflow-hidden bg-blue-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col space-y-4 border border-blue-100 dark:border-gray-700">
      {/* Titre de l'expérience */}
      <span className="block text-2xl font-bold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300 cursor-pointer hover:underline">
        {experience.title}
      </span>

      {/* Informations sur l'entreprise */}
      <div className="flex items-center space-x-4">
        {/* Logo de l'entreprise */}
        <a
          href={experience.company?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <Image
            className="object-cover w-12 h-12 rounded-full border-2 border-blue-200 dark:border-gray-600 group-hover:border-blue-400 dark:group-hover:border-blue-300 transition-all duration-300"
            src={experience.company?.logo ?? "/logo/company-default.png"}
            alt="Company Logo"
            width={48}
            height={48}
            loading="lazy"
          />
        </a>

        {/* Détails de l'entreprise */}
        <div className="flex flex-col space-y-1">
          <a
            href={experience.company?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-lg font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300">
              {experience.company?.name ?? ""}
            </h2>
          </a>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>{experience.employment_type ?? ""}</p>
            <p>
              {experience.company?.location ? experience.company?.location : ""}
              {experience.type &&
                (experience.company?.location ? " · " : "") + experience.type}
            </p>
            <p>
              {experience.startedAt} - {experience.endedAt}
            </p>
          </div>
        </div>
      </div>

      {/* Description de l'expérience */}
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        {experience.overview}
      </p>

      {/* Compétences */}
      <div className="mt-auto flex flex-wrap gap-2 justify-end">
        {experience.skills.map((skill, index) => (
          <div
            key={index}
            className="bg-blue-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-300 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
