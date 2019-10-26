// ax.extension.report.field.shim.controls.
// textarea = ( r, options={} ) => {
//
//   let a = ax.a
//   let x = ax.x
//
//   let textareaOptions = {
//     name: options.name,
//     value: options.value,
//     ...options.textarea
//   }
//
//   let controlTagOptions = {
//
//     $value: function() {
//       return this.$('textarea').value
//     },
//
//     $focus: function () {
//       this.$('textarea').focus()
//     },
//
//     $disable: function() {
//       this.$('textarea').setAttribute( 'disabled', 'disabled' )
//     },
//
//     $enable: function() {
//       if ( !options.disabled ) {
//         this.$('textarea').removeAttribute('disabled')
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
//   return a['|appkit-report-control'](
//     r.textarea( textareaOptions ),
//     controlTagOptions
//   )
//
// }
