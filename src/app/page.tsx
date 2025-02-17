"use client";
import { contact } from "@/config/app";
import { scrollToSection } from "@/lib/helper";
import ContactForm from "@/components/contactForm";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import ResumeTabTitle from "@/components/ResumeTabTitle";
import {
  CertificateProps,
  EducationProps,
  ExperienceProps,
  ProjectProps,
  SkillProps,
} from "@/lib/types";
import CardSkeleton from "@/components/cardSkeleton";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Skill from "@/components/skill";
import Project from "@/components/project";
import FindMeCTA from "@/components/findMeCTA";
import Title from "@/components/Title";
import Certificate from "@/components/certificate";
import Link from "next/link";
import Image from "next/image";
import DownloadResumeModal from "@/components/DownloadResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeTab, setResumeTab] = useState("experience");
  const [experiencesLoading, setExperiencesLoading] = useState(true);
  const [educationsLoading, setEducationsLoading] = useState(true);
  const [skillsLoading, setSkillsLoading] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [certificatesLoading, setCertificatesLoading] = useState(true);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const { theme } = useTheme();
  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/experiences")
        .then((res) => res.json())
        .then((data) => setExperiences(data))
        .finally(() => setExperiencesLoading(false));
      await fetch("/api/educations")
        .then((res) => res.json())
        .then((data) => setEducations(data))
        .finally(() => setEducationsLoading(false));
      await fetch("/api/skills/featured")
        .then((res) => res.json())
        .then((data) => setSkills(data))
        .finally(() => setSkillsLoading(false));
      await fetch("/api/projects/featured")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .finally(() => setProjectsLoading(false));
      await fetch("/api/certificates/featured")
        .then((res) => res.json())
        .then((data) => setCertificates(data))
        .finally(() => setCertificatesLoading(false));
    };

    fetchData().then(() => console.log("Data fetched"));
  }, []);

  return (
    <div className="lg:px-12 bg-white dark:bg-gray-900">
      <header className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white flex items-center">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <Title textClass="text-4xl lg:text-5xl font-bold mb-4 text-white">{`Hi, I'm Maryem MINOUARI`}</Title>
              <h3 className="text-2xl mt-4 lg:text-3xl font-semibold mb-4 text-blue-300">
                Computer Science Engineer
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Let's build innovative software solutions together and unlock
                the full potential of technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setResumeModalOpen(true)}
                  className="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Resume
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-md hover:bg-white hover:text-blue-900 transition-colors duration-300"
                >
                  Contact Me
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <Image
                  alt="Maryem MINOUARI"
                  width={320}
                  height={320}
                  className="rounded-full object-cover border-4 border-white shadow-lg"
                  src="/profile.png"
                />
              </div>
            </div>
          </div>

          <div className="mt-16">
            <FindMeCTA />
          </div>
        </div>
      </header>

      <DownloadResumeModal
        isOpen={resumeModalOpen}
        close={() => setResumeModalOpen(false)}
      />

      <section id="about">
        <div className="container px-6 py-10 mx-auto">
          <h4 className="text-xl font-medium text-blue-500 dark:text-blue-400 mb-2">
            About me
          </h4>
          <Title>Passionate Computer Science Engineer</Title>
        </div>
        <main className="relative z-20 max-w-7xl mx-auto md:flex md:justify-center md:items-center">
          <div className="absolute w-full bg-blue-100 dark:bg-gray-700 -z-10 h-36 md:h-72 rounded-2xl" />
          <div className="w-full flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Maryem MINOUARI
                </h2>
                <p className="text-blue-700 dark:text-blue-300 font-medium">
                  A passionate Computer Science Engineer from Morocco
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-blue-50 dark:bg-gray-700 p-6 rounded-2xl shadow-lg">
              <div className="prose dark:prose-invert max-w-none">
                <p
                  className={`text-lg leading-relaxed mb-4 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {`I'm Maryem MINOUARI, a Computer Science student with a strong foundation in software engineering.`}
                </p>
                <p
                  className={`text-lg leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {`Fascinated by machine learning and neural networks, I'm passionate about leveraging artificial intelligence to build intelligent systems that solve complex problems. From deep learning to data-driven innovations, I aspire to create impactful solutions that push the boundaries of technology.`}
                </p>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section id="resume">
        <div className="container px-6 py-12 mx-auto">
          <div className="mt-8 xl:mt-16 lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1 lg:sticky lg:top-24 lg:self-start">
              <Title>My Resume</Title>
              <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                Below is a summary of my professional experience, educational
                background, and key skills. Each section highlights my journey
                and the expertise I’ve developed throughout my career.
              </p>
              <div className="mt-4 space-y-4 lg:mt-8">
                <ResumeTabTitle
                  tab="experience"
                  selectedTab={resumeTab}
                  handleClick={() => setResumeTab("experience")}
                />
                <ResumeTabTitle
                  tab="education"
                  selectedTab={resumeTab}
                  handleClick={() => setResumeTab("education")}
                />
                <ResumeTabTitle
                  tab="skills"
                  selectedTab={resumeTab}
                  handleClick={() => setResumeTab("skills")}
                />
                <ResumeTabTitle
                  tab="certificates"
                  selectedTab={resumeTab}
                  handleClick={() => setResumeTab("certificates")}
                />
              </div>
            </div>

            <div className="lg:col-span-2 mt-4 lg:mt-0">
              {resumeTab === "experience" && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Experience
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    My professional experience includes working as a software
                    engineer at various companies.
                  </p>
                  <div className="py-2 grid lg:grid-cols-2 gap-4 max-h-screen overflow-y-auto">
                    {experiencesLoading ? (
                      <>
                        <CardSkeleton />
                        <CardSkeleton />
                      </>
                    ) : (
                      experiences.map(
                        (experience: ExperienceProps, index: number) => (
                          <Experience key={index} data={experience} />
                        )
                      )
                    )}
                  </div>
                </div>
              )}
              {resumeTab === "education" && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Education
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    My educational background includes a degree in Software
                    Engineering and Computer Systems Integration.
                  </p>
                  <div className="py-2 grid lg:grid-cols-2 gap-4 max-h-screen overflow-y-auto">
                    {educationsLoading ? (
                      <CardSkeleton />
                    ) : (
                      educations.map(
                        (education: EducationProps, index: number) => (
                          <Education key={index} data={education} />
                        )
                      )
                    )}
                  </div>
                </div>
              )}
              {resumeTab === "skills" && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Skills
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    {`I have a wide range of skills that I've developed throughout my career as a software engineer.`}
                  </p>
                  <div className="py-2 grid lg:grid-cols-4 grid-cols-3 gap-4 max-h-screen overflow-y-auto">
                    {skillsLoading ? (
                      <CardSkeleton />
                    ) : (
                      skills.map((skill: SkillProps, index: number) => (
                        <Skill key={index} data={skill} />
                      ))
                    )}
                  </div>
                </div>
              )}
              {resumeTab === "certificates" && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    Certificates
                  </h2>
                  <p className="my-2 text-gray-600 dark:text-gray-300">
                    {`I have completed various courses and certifications to improve my skills and knowledge.`}
                  </p>
                  <div className="py-2 grid lg:grid-cols-2 gap-4 max-h-screen overflow-y-auto">
                    {certificatesLoading ? (
                      <CardSkeleton />
                    ) : (
                      certificates.map(
                        (certificate: CertificateProps, index: number) => (
                          <Certificate key={index} data={certificate} />
                        )
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="container px-6 py-10 mx-auto">
        <Title className="flex flex-col" textClass="text-center">
          Latest Work
        </Title>
        <p className="mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
          Take a look at some of my recent projects.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsLoading ? (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          ) : (
            projects.map((project: ProjectProps, index: number) => (
              <Project key={index} data={project} />
            ))
          )}
        </div>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="flex mt-4 mx-auto px-6 gap-4 justify-center items-center p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-gray-800 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
          >
            <span>View All</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </section>

      <section id="contact" className="container px-6 py-12 mx-auto">
        <div>
          <h4 className="text-xl font-medium text-blue-500 dark:text-blue-400">
            Contact me
          </h4>
          <Title>{`Let's talk`}</Title>
        </div>
        <div className="grid grid-cols-1 gap-12 mt-8 lg:grid-cols-2">
          <div className="grid gap-4">
            <p
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-800"
              }`}
            >
              I’m open to new opportunities. If you have a project in mind, need
              assistance with something, or just want to connect, feel free to
              reach out.
            </p>
            <p className="text-gray-500 dark:text-gray-400"></p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Get in touch with me via email.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  {contact.email}
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Phone
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Give me a call.
                </p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  {contact.phone}
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                  Address
                </h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400"></p>
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                  {contact.address}
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
