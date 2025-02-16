import { NextApiRequest, NextApiResponse } from 'next';
import { getProjectBySlug } from '@/lib/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { slug } = req.query;
    if (typeof slug !== 'string') {
      return res.status(400).json({ message: 'Invalid slug format' });
    }
    const project = await getProjectBySlug(slug);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching project data' });
  }
}
