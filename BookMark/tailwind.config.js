module.exports = {
  content: ["./src/**/*.{html,js}"]
  , theme: {
    extend: {
      colors: {
        'Soft-Blue': 'hsl(231,69%,60%)',
        'Soft-Red': 'hsl(0, 94%, 66%)',
        'Grayish-Blue': 'hsl(229, 31%, 21%)',
        'Very-Dark-Blue': 'hsl(229,31%,21%)',
      },
      fontFamily: {
        'Rubik': [" 'Rubik' ", "san-serif"]
      },
      container: {
        center: true,
        padding: "1.5rem",
      }
    },
  }
  , plugins: [],
}