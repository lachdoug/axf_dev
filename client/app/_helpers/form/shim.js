// app.form.shim = {
//   form: ( f, target ) => ( options={} ) => target( {
//     ...options,
//     asyncformTag: {
//       ...options.asyncformTag,
//       $on: {
//         'axf.appkit.http.complete': (e,el) => {
//           el.$$('button[type="submit"]').$revert()
//         },
//         ...( options.asyncformTag || {} ).$on
//       },
//     },
//   } ),
//   field: ( f, target ) => ( options={} ) => target( {
//     ...options,
//     help: options.help ? (a,x) => x.md( options.help ) : null,
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
//
//   row: function( f, options={} ) {
//
//     let a = ax.a
//
//     let cols = options.cols || []
//
//     let klass
//     let length = cols.length
//
//     if ( length == 1 ) {
//       klass = 'col-12'
//     } else if ( length == 2 ) {
//       klass = 'col-12.col-sm-6'
//     } else if ( length == 3 ) {
//       klass = 'col-12.col-md-4'
//     } else if ( length >= 4 ) {
//       klass = 'col-12.col-sm-6.col-lg-3'
//     }
//
//     let column = function( col ) {
//       return a[`div.${ klass }`]( col )
//     }
//
//     let component = cols.map( ( col ) => column( col )  )
//
//     return a['div.row']( component, options.rowTag )
//
//   },
//
//
//   button: ( f, target ) => ( options={} ) => target( {
//     ...options,
//     buttonTag: {
//       ...options.buttonTag,
//       $on: {
//         'click: change button label': (e,el) => {
//           let to = options.to
//           el.$from = el.innerHTML
//           if ( to ) el.$nodes = to
//         },
//         ...( options.buttonTag || {} ).$on
//       },
//       $revert: function() {
//         this.$html = this.$from || this.$html
//       },
//     }
//   } ),
//
//   control: {
//     table: ( f, target ) => ( options={} ) => target( {
//       ...options,
//       tableTag: {
//         class: 'table table-sm table-borderless mb-0',
//         ...options.tableTag,
//       },
//       itemButtonsTag: {
//         class: 'btn-group',
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
//       upButton: {
//         ...options.upButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.upButton || {} ).buttonTag,
//         },
//       },
//       downButton: {
//         ...options.downButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.downButton || {} ).buttonTag,
//         },
//       },
//       removeButton: {
//         ...options.removeButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.removeButton || {} ).buttonTag,
//         },
//       },
//
//     } ),
//     many: ( f, target ) => ( options={} ) => target( {
//       ...options,
//       itemButtonsTag: {
//         class: 'btn-group',
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
//       upButton: {
//         ...options.upButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.upButton || {} ).buttonTag,
//         },
//       },
//       downButton: {
//         ...options.downButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.downButton || {} ).buttonTag,
//         },
//       },
//       removeButton: {
//         ...options.removeButton,
//         buttonTag: {
//           class: 'btn btn-outline-primary border-white',
//           ...( options.removeButton || {} ).buttonTag,
//         },
//       },
//
//     } )
//   },
//   submit: ( f, target ) => ( options={} ) => target( {
//     to: app.hourglass( 'Submitting…' ),
//     ...options,
//     // buttonTag: {
//     //   ...options.buttonTag,
//     //   $revert: function() {
//     //     this.$html = this.$from
//     //   },
//     // },
//     // button: {
//     //   ...options.button,
//     // }
//   } ),
//
//
//
//
//
//
// }
