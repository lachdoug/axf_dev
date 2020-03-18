ax.extension.form.field.shim.controls.
select = function( f, options ) {

  let a = ax.a

  let selectOptions = {
    ...options,
    ...options.select
  }

  let controlTagOptions = {

    $init: function () { this.$valid() },


    $value: function() {
      // if ( selectOptions.multiple ) {
      //   let checked = this.$$('option:checked').value.$$
      //   checked = checked.filter( (el) => el != '' )
      //   return checked
      // } else {
        return this.$('select').value
      // }
    },

    $focus: function () {
      this.$('select').focus()
    },

    $disable: function() {
      this.$('select').setAttribute( 'disabled', 'disabled' )
    },

    $enable: function() {
      if ( !selectOptions.disabled ) {
        this.$('select').removeAttribute('disabled')
      }
    },

    $validity: function() {
      return this.$('select').validity
    },

    $valid: function() {
      this.$('select').setCustomValidity('')
      if( this.$validity().valid ) {
        return true
      } else {
        if ( selectOptions.invalid ) {
          if ( ax.is.function( selectOptions.invalid ) ) {
            let invalidMessage = selectOptions.invalid( this.$value, this.$validity )
            if ( invalidMessage ) {
              this.$('select').setCustomValidity( invalidMessage )
            }
          } else {
            this.$('select').setCustomValidity( selectOptions.invalid )
          }
        }
        return false
      }
    },

    ...options.controlTag,

    $on: {
      'click: do nothing when readonly': (e) => { if ( selectOptions.readonly ) e.preventDefault() },
      'change: check validity': (e,el) => {
        el.$valid()
      },
      'change: send control change event': (e,el) => {
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
