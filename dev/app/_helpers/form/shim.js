app.form.shim = {
  form: ( f, target ) => ( options={} ) => target( {
    ...options,
    asyncformTag: {
      ...options.asyncformTag,
      $on: {
        'axf.appkit.http.complete': (e,el) => {
          el.$$('button[type="submit"]').$revert()
        },
        'axf.appkit.form.control.invalid': (e,el) => {
          debugger
          el.$$('button[type="submit"]').$revert()
        },
        ...( options.asyncformTag || {} ).$on
      },
    },
  } ),
  // field: ( f, target ) => ( options={} ) => {
  //   // debugger
  //   let help = options.help ? (a,x) => x.md( options.help ) : null
  //   // debugger
  //   return target( {
  //     ...options,
  //     help: help,
  //   } )
  // },

  help: ( f, target ) => ( options={} ) => {
    let help = options.help ? (a,x) => x.md( options.help ) : null
    return target( {
      ...options,
      help: help,
    } )
  },

  template: ( f, target ) => ( options={} ) => {
    let template = options.template ? (a,x) => x.md( options.template(f) ) : null
    return template
  },

  button: ( f, target ) => ( options={} ) => target( {
    ...options,
    buttonTag: {
      ...options.buttonTag,
      $on: {
        'click: change button label': (e,el) => {
          let to = options.to
          el.$from = el.innerHTML
          if ( to ) el.$nodes = to
        },
        ...( options.buttonTag || {} ).$on
      },
      $revert: function() {
        if (this.$from ) this.$html = this.$from
      },
    }
  } ),

  submit: ( f, target ) => ( options={} ) => target( {
    ...options,
    button: {
      to: app.hourglass( 'Submitting…' ),
      ...options.button,
    },
    buttonTag: {
      ...options.buttonTag,
      $on: {
        'click: turn off all sorting': (e,el) => {
          el.$('^form').$$('|appkit-form-nest-sort-off button').click()
        },
        'click: revert label when invalid': (e,el) => {
          let valid = el.$('^form').checkValidity()
          if ( !valid ) el.$revert()
        },
        ...( options.buttonTag || {} ).$on,
      },
    }
  } ),

  controls: {
    json: ( f, target ) => ( options={} ) => (a,x) => x.jsoneditor.form.control( f, { theme: 'bootstrap3', ...options } ),
    markdown: ( f, target ) => ( options={} ) => (a,x) => x.simplemde.form.control( f, options ),
  },

  buttons: (f) => ( options={} ) => (a,x) => a['app-form-buttons']( [
    f.button( {
      label: '✖ Cancel',
      to: app.hourglass( 'Cancelling…' ),
      ...options.cancel
    } ),
    ' ',
    f.submit( options.submit ),
  ], {
    ...options.buttonsTag,
    style: {
      display: 'block',
      ...( options.buttonsTag || {} ).style,
    },
  } ),

  row: ( f, target ) => ( options={} ) => (a,x) => a['div.row'](
    ( options.columns || [] ).map( (column) => a['div.col-sm'](column) ),
    options.fieldsetTag
  ),


}
