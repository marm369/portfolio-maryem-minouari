import { google } from 'googleapis';

export default async function handler(req, res) {
  try {
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: 'https://www.googleapis.com/auth/analytics.readonly',
    });

    const analyticsDataClient = google.analyticsdata({
      version: 'v1beta',
      auth: await auth.getClient(),
    });
    const propertyId = 'properties/488361337'; 
    const [response] = await analyticsDataClient.properties.runReport({
      property: propertyId,
      requestBody: {
        dateRanges: [
          {
            startDate: '2005-01-01', 
            endDate: 'today',
          },
        ],
        metrics: [{ name: 'users' }],
      },
    });
    const visitors = response.rows?.[0]?.metricValues?.[0]?.value ?? '0';
    res.status(200).json({ visitors });
  } catch (error) {
    console.error('Analytics API error:', error.message);
    res.status(500).json({ error: 'Erreur lors de la récupération des visiteurs' });
  }
}
