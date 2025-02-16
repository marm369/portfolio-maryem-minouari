import { ProjectProps } from "@/lib/types";
import React from "react";
import Link from "next/link";

const Project = ({ data: project }: { data: ProjectProps }) => {
  return (
    <div className="w-full bg-blue-100 rounded-lg shadow-lg dark:bg-gray-800 flex flex-col">
      <Link href={`/projects/${project.slug}`}>
        <img
          className="object-cover object-center w-full h-56 rounded-t-lg"
          src={project.image}
          alt={project.title}
          loading="lazy"
        />
      </Link>
      <div className="w-full flex items-center px-6 py-3 bg-blue-500 dark:bg-gray-900">
        <svg
          aria-label="headphones icon"
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
          />
        </svg>
        <h1 className="mx-3 text-lg font-semibold text-white">{project.category}</h1>
      </div>
      <div className="w-full flex flex-col px-6 py-4 flex-1">
        <Link href={`/projects/${project.slug}`}>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white hover:underline">{project.title}</h1>
        </Link>
        <p className="py-2 text-gray-700 dark:text-gray-400">{project.excerpt}</p>
        <div className="mt-auto flex flex-wrap gap-1 justify-end">
          {project.tags.map((tag, index) => (
            <div
              key={index}
              className="bg-blue-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
