ax.css( {
  '[data-axf="appkit-http-result"]': {
    color: 'blue',
  },
  '[data-axf="appkit-http-result"].error': {
    color: 'red',
  },
  'button[class^="btn btn-outline-"]': {
    borderColor: 'transparent',
  },
  '[data-axf="appkit-form-nest-item"]': {
    // display: 'block',
    padding: '0.5rem',
  },
  '[data-axf="appkit-form-nest"]': {
    // display: 'block',
    '.table-sm': {
      td: { padding: '0.125rem', },
      th: { padding: '0.125rem', fontWeight: 'normal' },
    },
  },
  '[data-axf="appkit-form-nest-item"]:hover': {
    boxShadow: 'inset 0px 0px 5px #007bff',
  },
  '[data-axf="appkit-form-nest-item"][draggable]': {
    boxShadow: 'inset 0px 0px 5px #ffc107',
    cursor: 'grab',
  },
  '[data-axf="appkit-form-nest-item"][draggable]:active': {
    cursor: 'grabbing',
  },
  '*': { borderRadius: '0 !important' },
  // 'input.form-control': {
  //   borderTopColor: 'transparent',
  //   borderLeftColor: 'transparent',
  //   borderRightColor: 'transparent',
  // },
  // 'select.custom-select': {
  //   borderColor: 'transparent',
  // }


} )
