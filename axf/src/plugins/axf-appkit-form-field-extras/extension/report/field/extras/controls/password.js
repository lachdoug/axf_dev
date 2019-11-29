ax.extension.report.field.extras.controls.
password = function( f, options ) {

  let a = ax.a

  if ( options.confirmation == true ) {
    options.confirmation = {}
  }

  let secure = function ( element ) {
    if ( element.value ) {
      element.style.fontFamily = 'text-security-disc'
    } else {
      element.style.fontFamily = 'unset'
    }
  }

  let inputOptions = {
    name: options.name,
    value: options.value,
    placeholder: options.placeholder,
    disabled: options.disabled,
    readonly: options.readonly,
    required: options.required,
    pattern: options.pattern,
    autocomplete: 'off',
    ...options.input,
    inputTag: {

      $valid: function() {
        this.setCustomValidity('')
        if( this.validity.valid ) {
          return true
        } else {
          if ( options.invalid ) {
            if ( ax.is.function( options.invalid ) ) {
              let invalidMessage = options.invalid( this.value, this.validity )
              if ( invalidMessage ) {
                this.setCustomValidity( invalidMessage )
              }
            } else {
              this.setCustomValidity( options.invalid )
            }
          }
          return false
        }
      },

      ...( options.input || {} ).inputTag,

    },

  }

  let confirmation = function () {

    let confirmationInputOptions = {
      value: options.value,
      disabled: options.disabled,
      readonly: options.readonly,
      autocomplete: 'off',
      ...options.confirmation,
      inputTag: {

        $valid: function() {
          let input = this.$('^').$('input')
          if ( input.value == this.value ) {
            this.setCustomValidity('')
          } else {
            this.setCustomValidity('Passwords must match.')
          }
        },

        ...( options.confirmation || {} ).inputTag,

      },
    }

    return f.input( confirmationInputOptions )

  }

  let controlTagOptions = {

    $init: function () {
      for ( let input of this.$inputs() ) {
        secure( input )
        input.$valid()
      }
    },

    $inputs: function() {
      return this.$$('input').$$
    },

    $value: function() {
      return this.$inputs()[0].value
    },

    $focus: function () {
      this.$inputs()[0].focus()
    },

    $disable: function() {
      for ( let input of this.$inputs() ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !inputOptions.disabled ) {
        for ( let input of this.$inputs() ) {
          input.removeAttribute('disabled')
        }
      }
    },

    ...options.controlTag,

    $on: {
      'input: secure text': function () {
        for ( let input of this.$inputs() ) {
          secure( input )
        }
      },
      'input: check validity': function () {
        for ( let input of this.$inputs() ) {
          input.$valid()
        }
      },
      'input: send control change event': function () {
        this.$send( 'axf.appkit.report.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-report-control'](
    [
      f.input( inputOptions ),
      options.confirmation ? confirmation() : null
    ],
    controlTagOptions
  )

}


//
//
//
// ax.extension.report.factory.
// password = ( f, options={} ) => {
//
//   let a = ax.a
//
//   let secure = function ( element ) {
//     if ( element.value ) {
//       element.style.fontFamily = 'text-security-disc'
//     } else {
//       element.style.fontFamily = 'unset'
//     }
//   }
//
//   let component = [
//     a['|appkit-report-textsecurity-password-input'](
//       f.input( {
//         name: options.name,
//         value: options.value,
//         class: options.class,
//         style: options.style,
//         title: options.title,
//         placeholder: options.placeholder,
//         data: options.data,
//         disabled: options.disabled,
//         autocomplete: off,
//         readonly: options.readonly,
//         required: options.required,
//         inputTag: {
//           $on: { 'input: secure text': function () {
//             secure( this )
//           } },
//           $init: function () { secure( this ) },
//         },
//         ...options.input
//       } )
//     ),
//     options.confirm === false ? null : a['|appkit-report-textsecurity-password-confirmation'](
//       f.input( {
//         value: options.value,
//         class: options.class,
//         style: options.style,
//         title: options.title ? `${ options.title } confirmation` : null,
//         placeholder: options.secondaryPlaceholder,
//         data: options.data,
//         disabled: options.disabled,
//         autocomplete: off,
//         readonly: options.readonly,
//         required: options.required,
//         inputTag: {
//           $on: { 'input: secure text': function () {
//             secure( this )
//           } },
//           $init: function () { secure( this ) },
//         },
//         ...options.confirmation
//       } )
//     ),
//    ]
//
//   return a['|appkit-report-textsecurity-password'](
//     component, {
//
//       $value: function() {
//         // debugger
//         return this.$('input').value
//       },
//
//       $data: function() {
//         return this.$value()
//       },
//
//       $disable: function() {
//         let input
//         for ( let input of this.$inputs() ) {
//           input.disabled = 'disabled'
//         }
//       },
//
//       $enable: function() {
//         if ( !options.disabled ) {
//           for ( let input of this.$inputs() ) {
//             input.removeAttribute('disabled')
//           }
//         }
//       },
//
//       $focus: function () {
//         this.$('input').focus()
//       },
//       $on: {
//         'input: check validity': function () {
//           if ( options.confirm !== false ) {
//             let inputs = this.$inputs()
//             if ( inputs[0].value == inputs[1].value ) {
//               inputs[1].setCustomValidity('')
//             } else {
//               inputs[1].setCustomValidity('Passwords must match.')
//             }
//           }
//         }
//       },
//     }
//   )
//
// }
