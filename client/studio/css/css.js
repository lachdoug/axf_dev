ax.css( {
  '.error': {
    color: 'red',
  },
  '[data-axf-component="appkit-form-control"] .error': {
    color: 'red',
    marginTop: '0.5rem',
  },
  '[data-axf-component="appkit-http-result"]': {
    color: 'blue',
  },
  '[data-axf-component="appkit-http-result"].error': {
    color: 'red',
  },

  '[class^="btn btn-outline-"]': {
    borderColor: 'transparent',
  },
  '[data-axf-component="appkit-form-nest-item"]': {
    // display: 'block',
    padding: '0.5rem',
  },
  '[data-axf-component="appkit-form-nest"]': {
    // display: 'block',
    '.table-sm': {
      td: { padding: '0.125rem', },
      th: { padding: '0.125rem', fontWeight: 'normal' },
    },
  },
  // '[data-axf-component="appkit-form-nest-many-wrapper"]': {
  //   border: '1px solid transparent',
  // },
  // '[data-axf-component="appkit-form-nest-many-wrapper"]:hover': {
  //   boxShadow: '0px 0px 2px #007bff',
  // },
  '[data-axf-component="appkit-form-nest-item"]:hover': {
    boxShadow: 'inset 0px 0px 2px #007bff',
  },
  '[data-axf-component="appkit-form-nest-item"][draggable]': {
    boxShadow: 'inset 0px 0px 2px #ffc107',
    cursor: 'grab',
  },
  '[data-axf-component="appkit-form-nest-item"][draggable]:active': {
    cursor: 'grabbing',
  },
  '*': { borderRadius: '0 !important' },
  'option[disabled]': {
    color: 'lightgrey',
  },
  '|appkit-form-multiselect-selected': {
    border: '1px solid #ced4da',
    borderTop: 'none',
    padding: '0.375rem 0.74rem',
  },
  // 'input.form-control': {
  //   borderTopColor: 'transparent',
  //   borderLeftColor: 'transparent',
  //   borderRightColor: 'transparent',
  // },
  // 'select.custom-select': {
  //   borderColor: 'transparent',
  // }


} )
