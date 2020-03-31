// ax.extension.form.field.extras.controls.
// combobox = (f, options={} ) => {
//
//   let a = ax.a
//   let x = ax.x
//
//   let selections = x.lib.form.selections( options.selections )
//
//   let selectValue
//   let value
//
//   if ( options.value ) {
//     let valueInSelections = selections.some( option => option.value == options.value )
//     // selectValue = valueInSelections ? options.value : '__USE_INPUT__'
//     value = valueInSelections ? '' : options.value
//   // } else {
//     // If no value and no placeholder then show the input
//     // selectValue = options.placeholder ? '' : '__USE_INPUT__'
//   }
//
//   let controlTagOptions = {
//     $value: function() {
//       return this.$('input').value
//     },
//     $focus: function () {
//       this.$('input').focus()
//     },
//
//     $disable: function() {
//       // let select = this.$('|appkit-form-combobox-select select')
//       let input = this.$('|appkit-form-combobox-input input')
//       // select.disabled = 'disabled'
//       input.disabled = 'disabled'
//     },
//     $enable: function() {
//       if ( !options.disabled ) {
//         // let select = this.$('|appkit-form-combobox-select select')
//         let input = this.$('|appkit-form-combobox-input input')
//         // select.removeAttribute('disabled')
//         input.removeAttribute('disabled')
//       }
//     },
//     $on: { change: function () {
//       let select = this.$('select')
//       let input = this.$('|appkit-form-combobox-input input')
//       let hiddeninput = this.$('|appkit-form-combobox-hiddeninput input')
//       if ( select.value === '__USE_INPUT__' ) {
//         input.style.display = ''
//         hiddeninput.value = input.value
//         if ( options.required ) {
//           select.removeAttribute('required')
//           input.required = 'required'
//         }
//         if ( select == document.activeElement ) {
//           input.focus()
//         }
//       } else {
//         input.style.display = 'none'
//         hiddeninput.value = select.value
//         if ( options.required ) {
//           input.removeAttribute('required')
//           select.required = 'required'
//         }
//       }
//     } },
//
//     ...options.controlTag
//
//   }
//
//   return a['|appkit-form-control'](
//     [
//       a['|appkit-form-combobox-input']( f.input( {
//
//         value: value,
//         disabled: options.disabled,
//         ...options.input,
//         // inputTag: {
//         //   style: selectValue == '__USE_INPUT__' ? {} : { display: 'none' },
//         //   ...( options.input || {} ).inputTag,
//         // },
//       } ) ),
//       a['|appkit-form-combobox-select']( f.select(
//         {
//           // value: selectValue,
//           selections: selections,
//           placeholder: options.placeholder,
//           disabled: options.disabled,
//           ...options.select
//         }
//       ) ),
//     ],
//     controlTagOptions
//   )
//
// }
