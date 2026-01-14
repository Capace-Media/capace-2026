import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    CMS_BASE_URL: z.string(),
    CMS_BASE_URI: z.string(),
    GRAPHQL_ENDPOINT: z.string(),
    CMS_GRAPHQL_AUTH_PASS: z.string(),
    CMS_GRAPHQL_AUTH_USER: z.string(),
    SITE_URL: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    CMS_BASE_URL: process.env.CMS_BASE_URL,
    CMS_BASE_URI: process.env.CMS_BASE_URI,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    CMS_GRAPHQL_AUTH_PASS: process.env.CMS_GRAPHQL_AUTH_PASS,
    CMS_GRAPHQL_AUTH_USER: process.env.CMS_GRAPHQL_AUTH_USER,
    SITE_URL: process.env.SITE_URL,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
