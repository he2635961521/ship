const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  }
};

module.exports = nextConfig;
