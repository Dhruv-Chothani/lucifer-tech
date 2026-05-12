const { createRequire } = require("module");
const require = createRequire(import.meta.url);
const nextConfig = require("next/config");

const config = {
  extends: ["next/core-web-vitals"],
  rules: {
    "import/no-anonymous-default-export": "off"
  }
};

module.exports = config;
