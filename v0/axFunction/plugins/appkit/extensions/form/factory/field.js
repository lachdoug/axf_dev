ax.extensions.form.factory.field = function( options={} ) {

  let a = ax.a
  let field = this.field

  let type = options.type || 'input'
  let value = this.object.get( options.name ) || options.value

  var inputOptions = Object.assign(
    {
      name: options.name,
      value: value,
    },
    options[ type ]
  )

  let input = this[ type ]( inputOptions )

  var controlOptions = {
    controlTag: options.controlTag
  }

  let control = field.control( input, controlOptions )

  labelOptions = {
    name: options.name,
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

  let fieldTag = Object.assign(
    {
      _toggleHelp: function() {
        this._helpVisible = !this._helpVisible
      },
      _helpVisible: false,
      $update: function() {
        this.$('help')[0].$update()
        this.$('helpindicator')[0].$update()
      },
      _labelClicked: function() {
        this.$('control')[0].$focus()
      },

    },
    options.fieldTag
  )

  let components = [
    caption,
    help,
    control,
    hint
  ]

  if ( options.dependent != false ) {
    components = field.dependent( components, options.dependent )
  }

  return a.field( components, fieldTag )

};
