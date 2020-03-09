ax.css( `
@keyframes markThemeBlinking{
  0%{ opacity: 1 }
  40%{ opacity: 0.1 }
  50%{ opacity: 1 }
  0%{ opacity: 1 }
}
` )

ax.css( {

  'body.app-theme-mark': {

    color: 'fuchsia',
    backgroundColor: 'navy',

    '.app-btn': {
      color: 'yellow',
    },

    '.app-btn:hover': {
      animation: 'markThemeBlinking 0.2s infinite',
      color: 'red',
      backgroundColor: 'green',
    },

    'app-nav': {
      '.app-btn': {
        color: 'fuchsia',
        '.active': {
          color: 'white',
          backgroundColor: 'fuchia',
        }
      },
    }

  },

} )
