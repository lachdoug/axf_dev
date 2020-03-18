ax.css( {

  '|appkit-report-control': {
    display: 'block',
    '&:focus, &:focus-within': {
      boxShadow: '0 0 0 .2rem #FFD70077',
    },
    '.form-control:focus, .form-control:focus-within': {
      borderColor: '#CED4DA',
      boxShadow: 'unset',
    }
  },

  // '|appkit-report-control:focus, |appkit-report-control:focus-within': {
  //   boxShadow: '0 0 0 .2rem #FFD70077',
  // },

  '|appkit-report-control input:focus, |appkit-report-control textarea:focus': {
    boxShadow: 'none',
  },

  '|appkit-report-check-wrapper, |appkit-report-checks, |appkit-report-radios': {
    pointerEvents: 'none',
  },

  '.placeholder, .form-control::placeholder, .CodeMirror-placeholder': {
    color: 'gray !important',
    fontStyle: 'italic',
  },

  '|appkit-form-control .error': {
    color: 'red',
    marginTop: '0.5rem',
  },
  '|appkit-form-nest-item': {
    padding: '0.5rem',
  },
  '|appkit-form-nest': {
  },

  '|appkit-form-nest-item:hover': {
    boxShadow: 'inset 0px 0px 2px #007bff',
  },
  '|appkit-form-nest-item[draggable]': {
    boxShadow: 'inset 0px 0px 2px #ffc107',
    cursor: 'grab',
  },
  '|appkit-form-nest-item[draggable]:active': {
    cursor: 'grabbing',
  },

  'option[disabled]': {
    color: 'lightgray',
  },
  
  '|appkit-form-multiselect-selected': {
    border: '1px solid #ced4da',
    borderTop: 'none',
    padding: '0.375rem 0 0.375rem 0.75rem',
    '|appkit-form-multiselect-selected-item-remove': {
      color: 'lightgray'
    },
    '|appkit-form-multiselect-selected-item-remove:hover': {
      color: '#333'
    },
  },


} )
