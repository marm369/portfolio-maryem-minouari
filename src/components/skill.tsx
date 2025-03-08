import React from "react";
import { SkillProps } from "@/lib/types";
import Image from "next/image";

const Skill = ({ data: skill }: { data: SkillProps }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 bg-blue-100 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="relative flex flex-col items-center p-6 gap-4">
        <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 flex items-center justify-center w-20 h-20">
          <Image
            src={skill.icon}
            alt={skill.name}
            className="max-w-full max-h-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-blue-600 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline">
          {skill.name}
        </h3>
      </div>
    </div>
  );
};

export default Skill;
