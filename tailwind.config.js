import { mijnUiPreset } from "@mijn-ui/react-theme"
import { createPreset } from "fumadocs-ui/tailwind-plugin"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./static/**/*.{ts,tsx,html}",
    "./content/**/*.{md,mdx}",
    "./mdx-components/**/*.{ts,tsx}",

    "./node_modules/@mijn-ui/**/dist/*.js",
    "./node_modules/fumadocs-ui/dist/**/*.js",
  ],
  presets: [createPreset({ cssPrefix: "fd", addGlobalColors: false }), mijnUiPreset],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.625rem",
      },

      borderRadius: {
        default: "0.25rem",
      },

      transitionDuration: {
        400: "400ms",
      },
    },
  },
}
