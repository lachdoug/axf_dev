// ax.extension.report.field.shim.controls.
// checkbox = function( r, options ) {
//
//   let a = ax.a
//
//   let checkOptions = {
//     name: options.name,
//     value: options.value,
//     label: options.label,
//     inputTag: options.inputTag,
//   }
//
//   let hiddenInputOptions = {
//     type: 'hidden',
//     name: options.name,
//     value: options.unchecked,
//   }
//
//   let controlTagOptions = {
//
//     $value: function() {
//       if ( this.$('input[type=checkbox]').checked ) {
//         return options.checked || 'on'
//       } else {
//         return options.unchecked
//       }
//     },
//
//     $focus: function () {
//       this.$('input[type=checkbox]').focus()
//     },
//
//     $disable: function() {
//       let inputs = this.$$('input').$$
//       for ( let input of inputs ) {
//         input.setAttribute( 'disabled', 'disabled' )
//       }
//     },
//
//     $enable: function() {
//       if ( !options.disabled ) {
//         let inputs = this.$$('input').$$
//         for ( let input of inputs ) {
//           input.removeAttribute('disabled')
//         }
//       }
//     },
//
//     ...options.controlTag,
//
//     $on: {
//       'input: send control change event': (e,el) => {
//         el.$send( 'axf.appkit.report.control.change' )
//       },
//       ...( options.controlTag || {} ).$on
//     },
//
//   }
//
//   return a['|appkit-report-control']( [
//     r.input( hiddenInputOptions ),
//     r.check( checkOptions ),
//   ], controlTagOptions )
//
// }
//
//
// // ax.extension.report.factory.
// // checkbox = (r) => ( options ) => {
// //
// //   let a = ax.a
// //   let x = ax.x
// //
// //   let checked = ax.is.not.undefined( options.checked ) ? options.checked : 'on'
// //
// //   let component = r.element.check( {
// //     ...options,
// //     value: checked,
// //     checked: options.value == checked,
// //     // disabled: options.disabled || options.readonly,
// //     ...options.checkTag,
// //   } )
// //
// //   if ( ax.is.not.undefined( options.unchecked ) ) {
// //     component = [
// //       r.input( {
// //         name: options.name,
// //         value: options.unchecked,
// //         type: 'hidden',
// //       } ),
// //       component,
// //     ]
// //   }
// //
// //   let controlTagOptions = {
// //
// //     $value: function() {
// //       if ( this.$('input[type=checkbox]').checked ) {
// //         return options.checked || 'on'
// //       } else {
// //         return options.unchecked
// //       }
// //     },
// //
// //     $focus: function () {
// //       this.$('input[type=checkbox]').focus()
// //     },
// //
// //     $disable: function() {
// //       this.$('input[type=checkbox]').setAttribute( 'disabled', 'disabled' )
// //       this.$('input[type=hidden]') && this.$('input[type=hidden]').setAttribute( 'disabled', 'disabled' )
// //     },
// //
// //     $enable: function() {
// //       if ( !options.disabled ) {
// //         this.$('input[type=checkbox]').removeAttribute('disabled')
// //         this.$('input[type=hidden]') && this.$('input[type=hidden]').removeAttribute('disabled')
// //       }
// //     },
// //
// //     $on: {
// //       'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
// //       ...( options.controlTag || {} ).$on
// //     },
// //
// //     ...options.controlTag
// //   }
// //
// //   return a['|appkit-report-control'](
// //     component,
// //     controlTagOptions
// //   )
// //
// // }
// //
