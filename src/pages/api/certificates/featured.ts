import { NextApiRequest, NextApiResponse } from 'next';
import { getFeaturedCertificates } from '@/lib/fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await getFeaturedCertificates();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching certificates' });
  }
}
