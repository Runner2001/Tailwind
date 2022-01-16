module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Very-light-red": "hsl(355, 100%, 74%)",
        "Light-red": "hsl(365, 100%, 66%)",
        "Very-dark-blue": "hsl(208, 49%, 24%)",
        "Grayish-blue": "hsl(240, 2%, 79%)",
        "Very-dark-grayish-blue": "hsl(207, 13%, 34%)",
        "Very-dark-black-blue": "hsl(240%, 10%, 16%)",
        "G-very-light-red": "hsl(13, 100%, 72%)",
        "G-light-red": "hsl(353, 100%, 62%)",
        "G-very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "G-very-dark-desaturated-blue": "hsl(237, 23%, 32%)"
      }
    },
    fontFamily: {
      'overpass': ["'Overpass' , 'sans-serif'"],
      'ubuntu': ["'Ubuntu', 'san-serif'"]
    },
    container: {
      center: true,
      padding: "1.5rem"
    }
  },
  plugins: [],
}
