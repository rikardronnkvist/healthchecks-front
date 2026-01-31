module.exports = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiKey: process.env.NEXT_PUBLIC_APIKEY,
    name: process.env.NEXT_PUBLIC_NAME,
    url: process.env.NEXT_PUBLIC_URL,
  },
}
