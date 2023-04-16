import { join } from "path";
/** @type {import('tailwindcss').Config} */
export const content = [
  join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
  join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
  join(__dirname, "./app/**/*.{js,ts,jsx,tsx}"),
  // Or if using `src` directory:
  join(__dirname, "./src/**/*.{js,ts,jsx,tsx}"),
];
export const theme = {
  extend: {},
};
export const plugins = [require("tailwind-scrollbar")];
