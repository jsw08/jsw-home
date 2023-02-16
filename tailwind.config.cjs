/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.svelte',require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {},
  },
  plugins: [
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
  darkMode: "class",
}
