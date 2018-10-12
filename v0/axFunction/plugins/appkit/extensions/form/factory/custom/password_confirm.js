ax.extensions.form.factory.passwordConfirm = function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this

  if ( !( options.input instanceof Array ) ) {
    options.input = [
      options.input || {},
      options.input || {}
    ]
  }

  inputOptions0 = Object.assign(
    {
      name: options.name,
      value: options.value,
      autocomplete: 'off'
    },
    options.mock ? {} : {
      name: options.name + '_confirmation',
      type: 'password',
    },
    options.input[0]
  )

  let passwordComponents = [
    f.input( inputOptions0 )
  ]

  if ( options.confirm ) {

    inputOptions1 = Object.assign(
      {
        value: options.value,
        autocomplete: 'off'
      },
      options.mock ? {} : {
        type: 'password',
      },
      options.input[1]
    )

    passwordComponents.push(
      f.input( inputOptions1 )
    )

  }

  let passwordTag = Object.assign(
    {
      $value: function() {
        return this.$('input')[0].value
      },
      $focus: function () {
        this.$('input')[0].focus()
      },
      $disable: function() {
        this.$('input').
          forEach( function( check ) { check.$disable() } )
      },
      $enable: function() {
        if ( !options.disabled ) this.$('input').
          forEach( function( check ) { check.$enable() } )
      },
    },
    options.confirm ? {
      oninput: function() { this.$validity() },
      $validity: function () {
        let inputs = this.$('input')
        if (
          inputs[0].validity.valid &&
          inputs[0].$value() !== inputs[1].$value()
        ) {
          inputs[1].setCustomValidity('Passwords must match.')
        } else {
          inputs[1].setCustomValidity('')
        }
      }
    } : {},
    options.passwordTag
  )

  if ( options.mock ) {
    let mockTag = Object.assign(
      {
        $mock: function () {
          Array.from( this.children ).forEach( function ( input ) {
            if ( input.value.length == 0 ) {
              input.style.fontFamily = "inherit";
              input.style.letterSpacing = "inherit";
              input.style.fontSize = "inherit";
            } else {
              input.style.fontFamily = "text-security-disc";
              input.style.letterSpacing = "1px";
              input.style.fontSize = "1em";
            };
          } )
        },
        $init: function() { this.$mock() },
        oninput: function() { this.$mock() },
      },
      options.mockTag
    )

    passwordComponents = a.mock( passwordComponents, mockTag )

  }


  return a.password( passwordComponents, passwordTag )

}
