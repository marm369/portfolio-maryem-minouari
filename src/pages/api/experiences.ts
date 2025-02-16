import { NextApiRequest, NextApiResponse } from 'next';
import { getAllExperiences } from '@/lib/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await getAllExperiences();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching experiences' });
  }
}
