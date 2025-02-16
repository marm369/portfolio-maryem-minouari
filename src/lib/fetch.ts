import fs from 'fs';
import path from 'path';
import {
  CertificateProps,
  EducationProps,
  ExperienceProps,
  ProjectProps,
  SkillProps
} from "@/lib/types";

/**
 * Get all projects
 */
export async function getAllProjects(): Promise<ProjectProps[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

/**
 * Get all featured projects
 */
export async function getFeaturedProjects(): Promise<ProjectProps[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

/**
 * Get a project by its slug
 * @param slug
 */
export async function getProjectBySlug(slug: string): Promise<ProjectProps | undefined> {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === slug);
}

/**
 * Get all experiences
 */
export const getAllExperiences = async (): Promise<ExperienceProps[]> => {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'experiences.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

/**
 * Get all educations
 */
export async function getAllEducations(): Promise<EducationProps[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'educations.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

/**
 * Get all skills
 */
export async function getAllSkills(): Promise<SkillProps[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'skills.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

/**
 * Get all featured skills
 */
export async function getFeaturedSkills(): Promise<SkillProps[]> {
  const skills = await getAllSkills();
  return skills.filter((skill) => skill.featured);
}


/**
 * Get all certificates
 */
export async function getAllCertificates(): Promise<CertificateProps[]> {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'certificates.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

/**
 * Get all featured certificates
 */
export async function getFeaturedCertificates(): Promise<CertificateProps[]> {
  const certificates = await getAllCertificates();
  return certificates.filter((certificate) => certificate.featured);
}
