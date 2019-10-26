ax.css( {

  'axf-xtermjs': {

    display: 'block',
    height: 'calc( 300px + 1.8rem )',
    // width: '100%',

    '&.fullscreen': {
      // height: 'unset',
      height: 'calc( 100vh - 1.8rem - 3px )',
      marginTop: 'calc( 1.8rem + 4px )',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      // height: '100vh',
      // width: '100%',
      'axf-xtermjs-toolbar': {
        zIndex: '257',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
      },
      'axf-xtermjs-container': {
        height: '100%',
        '.xterm-screen': {
          marginTop: '1.8rem',
        }
      },
    },

    'axf-xtermjs-container': {
      display: 'block',
      height: '300px',
      // width: '100%',
      // padding: '30px',
    },

    'axf-xtermjs-toolbar': {
      display: 'block',
      overflow: 'auto',
      backgroundColor: 'white',
      border: '1px solid #e6e6e6',
      borderBottom: 'none',
      button: {
        fontSize: '1.2rem',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
      },
    },

    'axf-xtermjs-toolbar-right': {
      float: 'right',
    },

    'axf-xtermjs-toolbar-left': {
      lineHeight: '1.8',
      paddingLeft: '5px',
    },

  }

} )
