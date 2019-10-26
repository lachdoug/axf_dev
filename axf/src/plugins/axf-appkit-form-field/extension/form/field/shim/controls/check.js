ax.extension.form.field.shim.controls.
check = function( f, options ) {

  let a = ax.a

  let checkOptions = {
    ...options,
    ...options.check
  }

  let hiddenInputOptions = {
    type: 'hidden',
    name: options.name,
    value: options.unchecked,
  }

  let controlTagOptions = {

    $value: function() {
      if ( this.$('input[type=checkbox]').checked ) {
        return options.checked || 'on'
      } else {
        return options.unchecked
      }
    },

    $focus: function () {
      this.$('input[type=checkbox]').focus()
    },

    $disable: function() {
      let inputs = this.$$('input').$$
      for ( let input of inputs ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !options.disabled ) {
        let inputs = this.$$('input').$$
        for ( let input of inputs ) {
          input.removeAttribute('disabled')
        }
      }
    },

    ...options.controlTag,

    $on: {
      'input: send control change event': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control']( [
    f.input( hiddenInputOptions ),
    f.check( checkOptions ),
  ], controlTagOptions )

}


// ax.extension.form.factory.
// checkbox = (f) => ( options ) => {
//
//   let a = ax.a
//   let x = ax.x
//
//   let checked = ax.is.not.undefined( options.checked ) ? options.checked : 'on'
//
//   let component = f.element.check( {
//     ...options,
//     value: checked,
//     checked: options.value == checked,
//     // disabled: options.disabled || options.readonly,
//     ...options.checkTag,
//   } )
//
//   if ( ax.is.not.undefined( options.unchecked ) ) {
//     component = [
//       f.input( {
//         name: options.name,
//         value: options.unchecked,
//         type: 'hidden',
//       } ),
//       component,
//     ]
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
//       this.$('input[type=checkbox]').setAttribute( 'disabled', 'disabled' )
//       this.$('input[type=hidden]') && this.$('input[type=hidden]').setAttribute( 'disabled', 'disabled' )
//     },
//
//     $enable: function() {
//       if ( !options.disabled ) {
//         this.$('input[type=checkbox]').removeAttribute('disabled')
//         this.$('input[type=hidden]') && this.$('input[type=hidden]').removeAttribute('disabled')
//       }
//     },
//
//     $on: {
//       'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
//       ...( options.controlTag || {} ).$on
//     },
//
//     ...options.controlTag
//   }
//
//   return a['|appkit-form-control'](
//     component,
//     controlTagOptions
//   )
//
// }
//
