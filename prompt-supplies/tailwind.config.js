/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
