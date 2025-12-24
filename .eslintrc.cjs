module.exports = {
  root: true,
  plugins: ["boundaries", "import"],
  extends: ["next/core-web-vitals"],
  settings: {
    "boundaries/elements": [
      { type: "app", pattern: "src/app/**" },
      { type: "module", pattern: "src/modules/*/**" },
      { type: "core", pattern: "src/core/**" },
      { type: "shared", pattern: "src/shared/**" },
    ],
  },
  rules: {
    /**
     * MODULE BOUNDARY
     */
    "boundaries/element-types": [
      "error",
      {
        default: "disallow",
        rules: [
          // app -> modules
          { from: "app", allow: ["module"] },

          // modules -> core, shared
          { from: "module", allow: ["core", "shared"] },

          // core -> shared
          { from: "core", allow: ["shared"] },

          // shared -> nobody
          { from: "shared", allow: [] },
        ],
      },
    ],

    /**
     * PREVENT DEEP IMPORT MODULE
     */
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/modules/*/*", "@/modules/*/**", "!@/modules/*/index"],
      },
    ],

    /**
     * ENFORCE INDEX EXPORT
     */
    "import/no-internal-modules": [
      "error",
      {
        allow: ["@/modules/*", "@/core/**", "@/shared/**"],
      },
    ],
  },
};
