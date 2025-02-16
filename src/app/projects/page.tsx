'use client';
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import Title from "@/components/Title";
import {ProjectProps} from "@/lib/types";
import Project from "@/components/project";
import Loading from "@/app/projects/loading";

export default function Projects() {

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch('/api/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => toast.error(error.message))
        .finally(() => setLoading(false));
    }
    fetchProjects()
      .then(() => console.log('Projects fetched successfully!'));
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <Title>Projects</Title>
        <p className="mt-4  text-gray-500 dark:text-gray-300">
          Take a look at some of my recent projects.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project: ProjectProps, index) => (
            <Project data={project} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}
