export default function handler(req, res) {
    res.status(200).json({
        apiKey: process.env.NEXT_PUBLIC_APIKEY || '',
        name: process.env.NEXT_PUBLIC_NAME || 'Healthchecks Front',
        url: process.env.NEXT_PUBLIC_URL || 'https://healthchecks.io',
    });
}
