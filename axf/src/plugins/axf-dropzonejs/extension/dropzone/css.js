ax.css( {

  'axf-dropzonejs': {

    display: 'block',

    '&.dropzone': {

      '&.dz-clickable': {
        minHeight: '250px',
      },

      '.dz-preview.dz-file-preview': {
        display: 'block',
        margin: 0,

        '.dz-error-message': {
          width: '50%',
          left: 0,
          top: '250px',
        },

        '&:after': {
          left: '5px',
        },

        '.dz-image': {
          minHeight: '250px',
          width: '100%',
          background: 'linear-gradient(to bottom, #4488dd80, #48d)',

        },

        '.dz-progress': {
          width: 'calc( 100% - 40px )',
          marginTop: '-15px',
          left: '60px',
          height: '30px',

          '.dz-upload': {
            background: '#48d',
          },
        },

        '.dz-details': {

          '.dz-size': {
            marginBottom: '160px',

          },
        },

      },

    },

  }
  
} )
