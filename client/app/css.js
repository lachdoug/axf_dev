// ax.css( {
//
//
//   //
//   // nav: {
//   //   '.brand': {
//   //     margin: '2px',
//   //   }
//   // },
//   // '.breadcrumbs': {
//   //   padding: '0 0.375rem',
//   //   '.btn': {
//   //     padding: '0 0.375rem'
//   //   },
//   //   '.breadcrumb-selected': {
//   //     border: '1px solid transparent',
//   //     verticalAlign: 'middle',
//   //     padding: '0 0.375rem',
//   //     color: '#333',
//   //     lineHeight: '1.5',
//   //     display: 'inline-block',
//   //   }
//   // },
//   // '.order-dir': {
//   //   ul: {
//   //     listStyleType: 'none',
//   //     padding: 0,
//   //   },
//   //   '.order-dir-item': {
//   //     padding: '.375rem 0',
//   //     border: '1px solid transparent',
//   //     cursor: 'grab',
//   //     '[data-axf="appkit-icon"]' : {
//   //       padding: '0 0.75rem',
//   //     }
//   //   }
//   // },
//   //
//   // '.bad-entry': {
//   //   padding: '.375rem .75rem',
//   //   lineHeight: 1.5,
//   //   display: 'inline-block',
//   //   color: 'red'
//   // },
//
//
//   '[data-axf="appkit-list"]': {
//     fontFamily: 'monospace',
//     whiteSpace: 'pre',
//     color: 'lightgrey',
//     '[data-axf="appkit-list-type-null"]': {
//       color: 'red'
//     },
//     '[data-axf="appkit-list-type-number"]': {
//       color: 'green'
//     },
//     '[data-axf="appkit-list-type-text"]': {
//       color: 'blue',
//       maxHeight: '300px',
//       display: 'inline-block',
//       verticalAlign: 'top',
//       overflowY: 'scroll',
//       width: '100%',
//     },
//     'ul, ol': {
//       margin: '0 0 0 30px',
//       padding: '0px',
//     },
//     // 'li:last-child': {
//     //   padding: '0 0 10px 0',
//     // },
//     label: {
//       fontWeight: 'bold',
//       color: 'grey',
//       margin: '0px',
//       verticalAlign: 'top',
//     }
//   },
//
//   // Codemirror
//
//   '.CodeMirror-scroll': {
//     maxHeight: '80vh',
//   },
//   '.fullscreen .CodeMirror-scroll': {
//     maxHeight: 'unset',
//   },
//   '[data-axf="appkit-form-codemirror-code"]': {
//     border: '1px solid #ced4da',
//   },
//   '[data-axf="appkit-form-simplemde-markdown"] .editor-toolbar': {
//     border: '1px solid #ced4da',
//     borderBottom: 'none',
//   },
//   '[data-axf="appkit-form-simplemde-markdown"] .CodeMirror': {
//     border: '1px solid #ced4da',
//   },
//
// // Last
//
// '[data-axf="appkit-form-field-nest"] > [data-axf="appkit-form-field"]:last-child > [data-axf="appkit-form-field-dependent"] > .form-group': {
//   marginBottom: '0',
// },
//
// '[data-axf="appkit-form-field-nests"] > [data-axf="appkit-form-field-nests-items"] > [data-axf="appkit-form-field-nests-item"] > [data-axf="appkit-form-many-items-item-fields"] > [data-axf="appkit-form-field"]:last-child > [data-axf="appkit-form-field-dependent"] > .form-group': {
//   marginBottom: '0',
// },
//
// // 'many-dragable-handle.btn:not(:disabled):not(.disabled):not(:active)': {
// //   cursor: 'grab',
// // },
// //
// // 'many-dragable-handle.btn:not(:disabled):not(.disabled):active': {
// //   cursor: 'grabbing',
// // },
//
// '.list-group-item': {
//   padding: '1.25rem',
// },
//
// //   Form Layout.
//
// // '[data-axf="appkit-form-field"] .form-group-spacing-compact': {
// //   marginBottom: '0.125rem',
// // },
// //
// // '[data-axf="appkit-form-field"] .card-body-spacing-compact': {
// //   padding: '0.5rem',
// // },
// //
// //
//
//
//
//   '.form-label-size-small': {
//     fontSize: '0.875rem',
//   },
//
//   '.form-label-size-large': {
//     fontSize: '1.25rem',
//   },
//
//   '.form-label': {
//     marginBottom: '0',
//   },
//
//   '.form-group-header-size-small.form-group-header-arrange-horizontal': {
//     paddingTop: 'calc(0.125rem + 1px)',
//     paddingBottom: 'calc(0.125rem + 1px)',
//   },
//
//   '.form-group-spacing-compact': {
//     marginBottom: '0.25rem',
//   },
//
//   '.form-group-spacing-spread': {
//     marginBottom: '2rem',
//   },
//
//   // '.card-body-spacing-compact': {
//   //   padding: '0.25rem',
//   //   // paddingBottom: '0.125rem',
//   // },
//   //
//   // '.list-group-item-spacing-compact': {
//   //   padding: '0.25rem',
//   //   // paddingBottom: '0.125rem',
//   // },
//
//   // form-check-spacing-compact form-check-size-small form-check-horizontal form-check-check
//
//   '.form-check': {
//     paddingTop: 'calc(0.375rem + 1px)',
//     paddingBottom: 'calc(0.375rem + 1px)',
//   },
//
//   '[data-axf="appkit-form-checkboxes-checkbox"] > .form-check, \
//    [data-axf="appkit-form-radios-radio"] > .form-check': {
//     paddingTop: '0',
//     paddingBottom: '0',
//   },
//
//   '[data-axf="appkit-form-checkboxes-checkbox"]:first-child > .form-check, \
//    [data-axf="appkit-form-radios-radio"]:first-child > .form-check': {
//      paddingTop: 'calc(0.375rem + 1px)',
//   },
//
//   '[data-axf="appkit-form-checkboxes-checkbox"]:last-child > .form-check, \
//    [data-axf="appkit-form-radios-radio"]:last-child > .form-check': {
//     paddingTop: '0',
//     paddingBottom: 'calc(0.375rem + 1px)',
//   },
//
//   '.form-group-checkbox.form-group-arrange-vertical > *': {
//     display: 'inline-block', // Check is inline with its label when vertical
//   },
//   '.form-group-checkbox.form-group-arrange-vertical > [data-axf="appkit-form-field-group-body"]': {
//     marginLeft: '1rem',
//   },
//
//   '.form-control-color': {
//     height: 'calc( 1.5rem + 14px )',
//   },
//
//   '.form-control-color.form-control-sm': {
//     height: 'calc( 1.3125rem + 10px )',
//   },
//
//   '.form-control-color.form-control-lg': {
//     height: 'calc( 1.875rem + 18px )',
//   },
//
//   // '.form-control-type-hidden': {
//   //   display: 'none',
//   // },
//
//   '.form-check-size-small': {
//     paddingTop: 'calc(0.125rem + 1px)',
//     paddingBottom: 'calc(0.125rem + 1px)',
//   },
//
//   '.form-check-spacing-compact > label': {
//     marginBottom: '0.125rem',
//   },
//
//   // 'form-check-spacing-compact': {
//   //
//   // },
//
//   '.form-check-label-size-small': {
//     fontSize: '0.875rem',
//   },
//
//   '.form-check-label-size-large': {
//     fontSize: '1.25rem',
//   },
//
//   '.form-check-label-size-large': {
//     fontSize: '1.25rem',
//   },
//
//   '.form-check-input.form-check-input-size-large': {
//     marginTop: '0.425rem',
//   },
//
//   '[data-axf="appkit-form-field-group"], [data-axf="appkit-form-field-group"] > *': {
//     display: 'block',
//   },
//
//   '[data-axf="appkit-form-field-help"], [data-axf="appkit-report-field-help"]': {
//     display: 'block',
//     padding: '0.25rem 1.25rem',
//     margin: '0px 0px 0.25rem 0px',
//     backgroundColor: 'rgb(248,248,248)',
//     borderRadius: '0.25rem',
//   },
//
//   // '[data-axf="appkit-form-field-group"]': {
//   //   margin: '0',
//   // },
//
//   // '' : {
//   //   display: 'block',
//   // },
//
//
//
//   '[data-axf="appkit-form-input"], \
//    [data-axf="appkit-form-checkboxes-checkbox"], \
//    [data-axf="appkit-form-radios-radio"], \
//    [data-axf="appkit-form-selectinput"], \
//    [data-axf="appkit-form-multiselect"]' : {
//     display: 'block',
//   },
//
//   // Custom form controls
//
//   // [data-axf="appkit-form-multiselect-selected"]
//
//   '[data-axf="appkit-form-multiselect-selected"]': {
//     display: 'block',
//     padding: '.375rem 0.75rem',
//     border: '1px solid #b3b3b3',
//     borderBottomLeftRadius: '4px',
//     borderBottomRightRadius: '4px',
//     borderTop: 'none',
//   },
//
//   '.[data-axf="appkit-form-multiselect-selected-item-size-large"]': {
//     fontSize: '1.25rem',
//   },
//
//   '.[data-axf="appkit-form-multiselect-selected-item-size-small"]': {
//     fontSize: '0.875rem',
//   },
//
//   // '[data-axf="appkit-form-multiselect-selected-item-remove"]': {
//   //   display: 'inline-block',
//   //   padding: '0.125rem',
//
//   // '[data-axf="appkit-form-multiselect-selected-item-remove"]': {
//   //   color:
//   // },
//
//   '[data-axf="appkit-form-checkboxes-checkbox"] label, \
//    [data-axf="appkit-form-radios-radio"] label': {
//     margin: '0px',
//   },
//
//   '[data-axf="appkit-form-selectinput-select"] select': {
//     marginBottom: '0.125rem',
//   },
//
//   '[data-axf="appkit-form-input-confirm"] > input': {
//     marginTop: '0.125rem',
//   },
//
//   '[data-axf="appkit-form-textsecurity-password"] > *': {
//     marginBottom: '0.125rem',
//   },
//
//   '[data-axf="appkit-form-textsecurity-password"] > *:last-child': {
//     marginBottom: '0',
//   },
//
//
//
//   //  form-check-size-small form-check-horizontal form-check-check
//
// //
// //   '[data-axf="appkit-form-field"] .col-form-label-spacing-compact label': {
// //     marginBottom: '0',
// //     fontSize: '0.875rem',
// //   },
//
//
//
//
//   // '[data-axf="appkit-form-field"] .col-form-label-spacing-compact': {
//   //   // paddingTop: 'calc(0.1rem + 1px)',
//   //   // paddingBottom: 'calc(0.1rem + 1px)',
//   // },
//
//   // '[data-axf="appkit-form-field"] .form-group.compact .form-control': {
//   //   padding: '0.125rem 0.75rem',
//   // },
//
//   // '[data-axf="appkit-form-field"] .form-group.compact label': {
//   //   marginBottom: '0.125rem',
//   // },
//
//   // '[data-axf="appkit-form-field"] .form-group.compact select.form-control:not([size]):not([multiple])': {
//   //   height: 'calc(1.75rem + 2px)',
//   // },
// //
// //   '.file-open-iframe': {
// //     width: '100%',
// //     height: '80vh',
// //     border: 'none',
// //   }
// } )
