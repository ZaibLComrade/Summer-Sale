/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
	  extend: {
		  colors: {
			  "custom-pink": "#E527B2",
			  "custom-black": "#111",
			  "custom-offWhite": "#F9F6E2",
			  "custom-grey": "#1111110d",
			  "custom-yellow": "#FFC107",
			  "custom-grey-1": "#11111150",
			}		
	  },
  },
  plugins: [require("daisyui")],
}

