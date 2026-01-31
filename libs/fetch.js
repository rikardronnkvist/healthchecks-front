import getConfig from 'next/config';

export default async function fetcher(...args) {
    const { publicRuntimeConfig = {} } = getConfig() || {};
    const baseUrl = publicRuntimeConfig.url || process.env.NEXT_PUBLIC_URL || "https://healthchecks.io";
    args[0] = baseUrl + "/api" + args[0];

    args[1] = {
        ...args[1],
        headers: {
            Accept: "application/json",
            "X-Api-Key": publicRuntimeConfig.apiKey || process.env.NEXT_PUBLIC_APIKEY,
        },
    };

    const res = await fetch(...args);
    return res.json();
}
