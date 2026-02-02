/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.ts";

/** @type {import("next").NextConfig} */

const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.capace.se",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/grafisk-profil",
        destination: "/tjanster/design/grafisk-profil",
        permanent: true,
      },
      {
        source: "/hosting",
        destination: "/tjanster/webb/hosting",
        permanent: true,
      },
      {
        source: "/hemsidor",
        destination: "/tjanster/webb/webbutveckling",
        permanent: true,
      },
      {
        source: "/google-ads",
        destination: "/tjanster/marknadsforing/google-ads",
        permanent: true,
      },
      {
        source: "/sokmotoroptimering",
        destination: "/tjanster/marknadsforing/seo",
        permanent: true,
      },
      {
        source: "/sociala-medier",
        destination: "/tjanster/marknadsforing/sociala-medier",
        permanent: true,
      },
      {
        source: "/e-handel",
        destination: "/tjanster/webb/e-handel",
        permanent: true,
      },
      {
        source: "/logotyp",
        destination: "/tjanster/design/logotypdesign",
        permanent: true,
      },
      {
        source: "/foto-film",
        destination: "/tjanster/content/foto-film",
        permanent: true,
      },
      {
        source: "/tryckmaterial",
        destination: "/tjanster/content/tryckmaterial",
        permanent: true,
      },
    ];
  },
};

export default config;
