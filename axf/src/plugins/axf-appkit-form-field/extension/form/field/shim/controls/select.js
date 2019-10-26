ax.extension.form.field.shim.controls.
select = function( f, options ) {

  let a = ax.a

  let selectOptions = {
    ...options,
    ...options.select
  }

  let controlTagOptions = {

    $value: function() {
      if ( options.multiple ) {
        let checked = this.$$('option:checked').value.$$
        checked = checked.filter( (el) => el != '' )
        return checked
      } else {
        return this.$('select').value
      }
    },

    $focus: function () {
      this.$('select').focus()
    },

    $disable: function() {
      this.$('select').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !options.disabled ) {
        this.$('select').removeAttribute('disabled')
      }
    },

    ...options.controlTag,

    $on: {
      'click: do nothing when readonly': (e) => { if ( options.readonly ) e.preventDefault() },
      'change:': (e,el) => {
        el.$send( 'axf.appkit.form.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  return a['|appkit-form-control'](
    f.select( selectOptions ),
    controlTagOptions
  )

}
