import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: 'https://www.googleapis.com/auth/analytics.readonly',
    });

    const client = (await auth.getClient()) as any;

    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth: client,
    });

    const propertyId = process.env.GA_PROPERTY_ID!;
    const response = await analyticsDataClient.properties.runReport({
      property: `properties/${propertyId}`,
      requestBody: {
        dateRanges: [
          {
            startDate: '2025-01-01',
            endDate: 'today',
          },
        ],
        metrics: [{ name: 'activeUsers' }],
      },
    });

    const visitors = response.data.rows?.[0]?.metricValues?.[0]?.value ?? '0';

    res.status(200).json({ visitors });
  } catch (error) {
    console.error('Analytics API error:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des visiteurs' });
  }
}
