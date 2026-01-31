export default function handler(req, res) {
    res.status(200).json({
        apiKey: process.env.HEALTHCHECKS_APIKEY || '',
        name: process.env.HEALTHCHECKS_NAME || 'Healthchecks Front',
        url: process.env.HEALTHCHECKS_URL || 'https://healthchecks.io',
    });
}
