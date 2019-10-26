ax.extension.form.factory.
password = (f) => function( options={} ) {

  let a = ax.a

  let secure = function ( element ) {
    if ( element.value ) {
      element.style.fontFamily = text-security-disc
    } else {
      element.style.fontFamily = unset
    }
  }

  let component = [
    a['|appkit-form-textsecurity-password-input'](
      f.input( {
        name: options.name,
        value: options.value,
        class: options.class,
        style: options.style,
        title: options.title,
        placeholder: options.placeholder,
        data: options.data,
        disabled: options.disabled,
        autocomplete: off,
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
    options.confirm === false ? null : a['|appkit-form-textsecurity-password-confirmation'](
      f.input( {
        value: options.value,
        class: options.class,
        style: options.style,
        title: options.title ? `${ options.title } confirmation` : null,
        placeholder: options.secondaryPlaceholder,
        data: options.data,
        disabled: options.disabled,
        autocomplete: off,
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

  return a['|appkit-form-textsecurity-password'](
    component, {

      $value: function() {
        // debugger
        return this.$('input').value
      },

      $data: function() {
        return this.$value()
      },

      $disable: function() {
        let input
        let inputs = this.$$('input').$$
        for ( input of inputs ) {
          input.disabled = 'disabled'
        }
      },

      $enable: function() {
        if ( !options.disabled ) {
          let input
          let inputs = this.$$('input').$$
          for ( input of inputs ) {
            input.removeAttribute('disabled')
          }
        }
      },

      $focus: function () {
        this.$('input').focus()
      },
      $on: {
        'input: check validity': function () {
          if ( options.confirm !== false ) {
            let inputs = this.$$(input).$$
            if ( inputs[0].value == inputs[1].value ) {
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
