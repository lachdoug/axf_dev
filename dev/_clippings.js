//
// app2.btn = ( options={} ) => (a,x) => x.button( {
//   class: 'btn btn-outline-primary border-white',
//   ...options
// } )
//
// app2.form = ( options={} ) => (a,x) => x.form( {
//   // async: true,
//   shims: [
//   x.bootstrap.formShim(),
//   x.field.formShim(),
//   x.field.dependent.formShim(),
//   x.field.nest.formShim(),
//   myShim ],
//   ...options
// } )
//
// app2.hourglass = ( text ) => (a,x) => x.cycle( {
//   // period: 250,
//   collection: [
//     x.icon('far fa-hourglass', text ),
//     x.icon('fas fa-hourglass-start', text ),
//     x.icon('fas fa-hourglass-half', text ),
//     x.icon('fas fa-hourglass-end', text ),
//     x.icon('far fa-hourglass', text ),
//   ]
// } )
//
// app2.form.shim = {
//   form: ( f, target ) => ( options={} ) => target( {
//     ...options,
//     formTag: {
//       ...options.formTag,
//       $on: {
//         'axf.http.complete': (e,el) => {
//           el.$$('appkit-form-submit button').$revert()
//         },
//         ...( options.formTag || {} ).$on
//       },
//     },
//   } ),
//   buttons: (f) => ( options={} ) => (a,x) => a['app-form-buttons']( [
//     f.button( {
//       label: '✖ Cancel',
//       to: app2.hourglass( 'Cancelling…' ),
//       buttonTag: {
//         class: 'btn btn-secondary',
//         ...options.buttonTag,
//       },
//       ...options.cancel
//     } ),
//     ' ',
//     f.submit( options.submit ),
//   ], {
//     ...options.buttonsTag,
//     style: {
//       display: 'block',
//       ...( options.buttonsTag || {} ).style,
//     },
//   } ),
//   element: {
//     button: ( f, target ) => ( options={} ) => target( {
//       ...options,
//       buttonTag: {
//         ...options.buttonTag,
//         $on: {
//           'click: change button label': (e,el) => {
//             let to = options.to
//             el.$from = el.innerHTML
//             if ( to ) el.$nodes = to
//           },
//           ...( options.buttonTag || {} ).$on
//         },
//       }
//     } ),
//   },
//   control: {
//     table: ( f, target ) => ( options={} ) => target( {
//       ...options,
//       tableTag: {
//         class: 'table table-sm table-hover table-borderless mb-0',
//         ...options.tableTag,
//       },
//       sortOffButton: {
//         ...options.sortOffButton,
//         buttonTag: {
//           class: 'btn btn-warning',
//           ...( options.sortOffButton || {} ).buttonTag,
//         },
//       },
//       sortOnButton: {
//         ...options.sortOnButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.sortOnButton || {} ).buttonTag,
//         },
//       },
//       addButton: {
//         ...options.addButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.addButton || {} ).buttonTag,
//         },
//       },
//
//     } ),
//     many: ( f, target ) => ( options={} ) => target( {
//       ...options,
//       sortOffButton: {
//         ...options.sortOffButton,
//         buttonTag: {
//           class: 'btn btn-warning',
//           ...( options.sortOffButton || {} ).buttonTag,
//         },
//       },
//       sortOnButton: {
//         ...options.sortOnButton,
//         buttonTag: {
//           class: 'btn btn-outline-dark border-white',
//           ...( options.sortOnButton || {} ).buttonTag,
//         },
//       }
//     } )
//   },
//   submit: ( f, target ) => ( options={} ) => target( {
//     ...options,
//     buttonTag: {
//       ...options.buttonTag,
//       $revert: function() {
//         this.$html = this.$from
//       },
//     },
//     button: {
//       to: app2.hourglass( 'Submitting…' ),
//       ...options.button,
//     }
//   } ),
//
//
//
//
//
//
// }
