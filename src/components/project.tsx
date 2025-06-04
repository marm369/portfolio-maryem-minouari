import { ProjectProps } from "@/lib/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Project = ({ data: project }: { data: ProjectProps }) => {
  return (
    <div className="group w-full bg-white rounded-2xl shadow-xl dark:bg-gray-800 flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
      
      <Link href={`/projects/${project.slug}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute bottom-4 right-4 flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 rounded-full backdrop-blur-sm">
            <span className="text-white text-sm font-medium transform transition-transform group-hover:translate-x-1">
              {project.category} →
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-col p-6 flex-1 space-y-4">
        <Link href={`/projects/${project.slug}`}>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {project.title}
          </h1>
        </Link>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-blue-500 pl-4">
          {project.excerpt}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="px-3 py-1 bg-blue-100/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm backdrop-blur-sm border border-blue-200 dark:border-gray-600 hover:bg-blue-200/50 hover:border-blue-300 transition-all"
            >
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
