import { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON!);

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: 'https://www.googleapis.com/auth/analytics.readonly',
    });

    const client = (await auth.getClient()) as JWT;

    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth: client,
    });

    const propertyId = process.env.GA_PROPERTY_ID!;
    const response = await analyticsDataClient.properties.runReport({
      property: propertyId,
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Analytics API error:', error.message);
    } else {
      console.error('Analytics API error:', error);
    }
    res.status(500).json({ error: 'Erreur lors de la récupération des visiteurs' });
  }
}
