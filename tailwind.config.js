/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // all React components
    "./public/index.html"         // your public HTML
  ],
  theme: {
    extend: {}, // you can add custom colors, fonts, etc. here
  },
  plugins: [
    require("daisyui"),
  ],

  // DaisyUI settings (optional)
  daisyui: {
    themes: [
      "light",   // default light theme
      "dark",    // default dark theme
      "cupcake", // DaisyUI extra theme
    ],
    darkTheme: "dark", // name of the dark theme
    base: true,        // apply base styles
    styled: true,      // include DaisyUI's component classes
    utils: true,       // include extra utilities
    logs: false,       // turn off DaisyUI logs in console
    rtl: false,        // support for right-to-left
    prefix: "",        // add prefix to DaisyUI classes if needed
  },
}
