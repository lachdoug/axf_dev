// ax.extension.report.field.shim.controls.
// input = function( r, options ) {
// // debugger
//   let a = ax.a
//
//   let inputTagOptions = {
//     name: options.name,
//     value: options.value,
//     type: options.type,
//     ...options.inputTag
//   }
//
//   let controlTagOptions = {
//
//     $init: function () { this.$valid() },
//
//     $value: function() {
//       return this.$('input').value
//     },
//
//     $focus: function () {
//       this.$('input').focus()
//     },
//
//     $disable: function() {
//       let input
//       let inputs = this.$$('input').$$
//       for ( input of inputs ) {
//         input.setAttribute( 'disabled', 'disabled' )
//       }
//     },
//
//     $enable: function() {
//       if ( !options.disabled ) {
//         let input
//         let inputs = this.$$('input').$$
//         for ( input of inputs ) {
//           input.removeAttribute('disabled')
//         }
//       }
//     },
//
//     $validity: function() {
//       return this.$('input').validity
//     },
//
//     $valid: function() {
//       this.$('input').setCustomValidity('')
//       if(this.$validity.valid) {
//         return true
//       } else {
//         if ( options.invalid ) {
//           if ( ax.is.function( options.invalid ) ) {
//             let invalidMessage = options.invalid( this.$value, this.$validity )
//             if ( invalidMessage ) {
//               this.$('input').setCustomValidity( invalidMessage )
//             }
//           } else {
//             this.$('input').setCustomValidity( options.invalid )
//           }
//         }
//         return false
//       }
//     },
//
//     ...options.controlTag,
//
//     $on: {
//       'input: send control change event': (e,el) => {
//         // let report = el.$('^report')
//         // if ( report ) { report.$dependencies() }
//         el.$send( 'axf.appkit.report.control.change' )
//       },
//       ...( options.controlTag || {} ).$on
//     },
//
//   }
//
//   return a['|appkit-report-control'](
//     r.input( inputTagOptions ),
//     controlTagOptions
//   )
//
// }
