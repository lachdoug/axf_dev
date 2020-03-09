ax.css( {

  'app-system': {

    '|axf-panes': {

      top: 'calc( 1.5rem + 14px )',

      '> *': {

        borderTop: '1px solid #0001',

      },

    },

    '.system-show-chart': {
      marginTop: '-1.5rem',
      marginBottom: '-2.5rem',
      'canvas': {
        position: 'relative',
      },
      '&:hover canvas': {
        zIndex: 1,
      },
    }

  }

} )
