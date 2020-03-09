ax.extension.report.field.extras.controls.
timezone = ( r, options={} ) => {

  let a = ax.a
  let x = ax.x

  let controlTagOptions = {
    $value: function() {
      return this.$('select').value
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

    ...options.controlTag,

    $on: {
      'click: do nothing when readonly': (e) => { if ( selectOptions.readonly ) e.preventDefault() },
      'change:': (e,el) => {
        el.$send( 'axf.appkit.report.control.change' )
      },
      ...( options.controlTag || {} ).$on
    },

  }

  let selectOptions = {
    ...options,
    value: options.value || Intl.DateTimereportat().resolvedOptions().timeZone,
    selections: x.lib.locale.timezones,
    placeholder: options.placeholder || ' ',
    ...options.select
  }

  return a['|appkit-report-control'](
    r.select( selectOptions ),
    controlTagOptions
  )

}
