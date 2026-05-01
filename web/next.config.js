/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

const isDockerBuild = process.env.DOCKER_BUILD === "true";

/** @type {import("next").NextConfig} */
const config = {
  output: isDockerBuild ? "export" : undefined,
  experimental: {
    viewTransition: true,
  },
};

export default config;
