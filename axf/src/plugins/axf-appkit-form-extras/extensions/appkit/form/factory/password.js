ax.extension.appkit.form.factory.
password = (f) => function( options={} ) {

  let a = ax.a

  let secure = function ( element ) {
    if ( element.value ) {
      element.style.fontFamily = "text-security-disc"
    } else {
      element.style.fontFamily = "unset"
    }
  }

  let placeholder_primary
  let placeholder_secondary

  if ( ax.type.is.array( options.placeholder ) ) {
    placeholder_primary = options.placeholder[0]
    placeholder_secondary = options.placeholder[1]
  } else {
    placeholder_primary = options.placeholder
    placeholder_secondary = "Confirm password"
  }

  let component = [
    a["appkit-form-textsecurity-password-input"](
      f.input( {
        name: options.name,
        value: options.value,
        autocomplete: "off",
        placeholder: placeholder_primary,
        readonly: options.readonly,
        required: options.required,
        inputTag: {
          $on: { 'input: secure text': function () {
            secure( this )
          } },
          $init: function () { secure( this ) },
        },
        ...options.input
      } )
    ),
    options.confirm === false ? null : a["appkit-form-textsecurity-password-confirmation"](
      f.input( {
        value: options.value,
        autocomplete: "off",
        placeholder: placeholder_secondary,
        readonly: options.readonly,
        required: options.required,
        inputTag: {
          $on: { 'input: secure text': function () {
            secure( this )
          } },
          $init: function () { secure( this ) },
        },
        ...options.confirmation
      } )
    ),
   ]

  return a["appkit-form-textsecurity-password"](
    component, {
      $value: function() {
        return this.$('input').$value()
      },
      $disable: function() {
        this.$('input').$disable()
      },
      $enable: function() {
        this.$('input').$enable()
      },
      $focus: function () {
        this.$('input').focus()
      },
      $on: {
        'input: check validity': function () {
          if ( options.confirm !== false ) {
            let inputs = this.$("input")()
            let values = this.$("input").value()
            if ( values[0] === values[1] ) {
              inputs[1].setCustomValidity('')
            } else {
              inputs[1].setCustomValidity('Passwords must match.')
            }
          }
        }
      },
    }
  )

}
