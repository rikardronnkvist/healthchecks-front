let config = null;

async function getConfigData() {
    if (config) return config;
    
    try {
        const res = await fetch('/api/config');
        config = await res.json();
        return config;
    } catch (error) {
        console.error('Failed to load config:', error);
        return {
            apiKey: process.env.NEXT_PUBLIC_APIKEY || '',
            url: process.env.NEXT_PUBLIC_URL || 'https://healthchecks.io',
        };
    }
}

export default async function fetcher(...args) {
    const configData = await getConfigData();
    const baseUrl = configData.url;
    args[0] = baseUrl + "/api" + args[0];

    args[1] = {
        ...args[1],
        headers: {
            Accept: "application/json",
            "X-Api-Key": configData.apiKey,
        },
    };

    const res = await fetch(...args);
    return res.json();
}
