
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      mdl: '900px',
      
    extend:{
    width:{
      mdl:'900px'
    }
    },
    colors: {
      'blue': '#1fb6ff',

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  }
  
}
}
}