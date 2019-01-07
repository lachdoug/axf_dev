ax.extension.appkit.form.factory.
field = (f) => function( name, options={} ) {

  let a = ax.a
  let x = ax.x
  let field = x.appkit.form.factory.field

  let as = options.as || 'input'
  let value = ( f.$object && f.$object[ name ] ) || options.value

  var inputOptions = Object.assign(
    {
      name: name,
      value: value,
    },
    options[ as ]
  )

  let input = f[ as ]( inputOptions )

  var controlOptions = {
    controlTag: options.controlTag
  }

  let control = field.control( input, controlOptions )
// debugger
  labelOptions = {
    name: name,
    labelTag: options.labelTag
  }

  let label = field.label( options.label, labelOptions )

  let helpOptions = {
    helpTag: options.helpTag
  }

  let help = field.help( options.help, helpOptions )

  let helpindicatorOptions = {
    helpindicatorTag: options.helpindicatorTag
  }

  let helpindicator = options.help ? field.helpindicator( helpindicatorOptions ) : {}

  let hintOptions = {
    hintTag: options.hintTag
  }

  let hint = field.hint( options.hint, hintOptions )

  let captionOptions = {
    label: label,
    helpindicator: helpindicator
  }

  let caption = field.caption( options.caption, captionOptions )

  let fieldTag = {
    _toggleHelp: function() {
      this._helpVisible = !this._helpVisible
    },
    _helpVisible: false,
    $update: function() {
      this.$('appkit-form-field-help')[0].$update()
      this.$('appkit-form-field-helpindicator')[0].$update()
    },
    _labelClicked: function() {
      this.$('appkit-form-field-control')[0].$focus()
    },
    ...options.fieldTag
  }

  let components = [
    caption,
    help,
    control,
    hint
  ]

  if ( options.dependent != false ) {
    components = field.dependent( components, options.dependent )
  }

  return a["appkit-form-field"]( components, fieldTag )

};
