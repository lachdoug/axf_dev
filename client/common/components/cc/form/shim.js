cc.form.shim = {
  form: ( f, target ) => ( options={} ) => {

    return target( {
      ...options,
      asyncformTag: {
        ...options.asyncformTag,
        $on: {
          'axf.appkit.form.async.complete': (e,el) => {
            el.$$('button[type="submit"]').$$.forEach( button => {
              button.$revert && button.$revert()
            } )
          },
          ...( options.asyncformTag || {} ).$on
        },
      },
    } )

  },
  // field: ( f, target ) => ( options={} ) => {
  //   // debugger
  //   let help = options.help ? (a,x) => cc.md( options.help ) : null
  //   // debugger
  //   return target( {
  //     ...options,
  //     help: help,
  //   } )
  // },

  help: ( f, target ) => ( options={} ) => {
    let help = options.help ? (a,x) => cc.md( options.help ) : null
    return target( {
      ...options,
      help: help,
    } )
  },

  template: ( f, target ) => ( options={} ) => {
    let template = options.template ? (a,x) => cc.md( options.template(f) ) : null
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
      to: cc.hourglass( 'Submitting…' ),
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

    combobox: ( f, target ) => ( options={} ) => (a,x) => f.controls.selectinput( options ),
    json: ( f, target ) => ( options={} ) => (a,x) => x.jsoneditor.form.control( f, { theme: 'bootstrap3', ...options } ),
    code: ( f, target ) => ( options={} ) => (a,x) => {

        if ( ax.is.object( options.mode) ) {
          options.mode = {
            value: options.mode.value || localStorage.editorDefaultMode,
            selections: options.mode.selections,
          }
        }

        return x.codemirror.form.control( f, {
          keymap: window.localStorage.editorKeymap,
          ...options,
        } )

    },
    markdown: ( f, target ) => ( options={} ) => (a,x) => x.simplemde.form.control( f, options ),

    table: ( f, target ) => ( options={} ) => target( {
      ...options,
      sortOnButton: {
        ...options.sortOnButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.sortOnButton || {} ).buttonTag,
        },
      },
      addButton: {
        ...options.addButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.addButton || {} ).buttonTag,
        },
      },
      upButton: {
        ...options.upButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.upButton || {} ).buttonTag,
        },
      },
      downButton: {
        ...options.downButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.downButton || {} ).buttonTag,
        },
      },
      removeButton: {
        ...options.removeButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.removeButton || {} ).buttonTag,
        },
      },

    } ),

    many: ( f, target ) => ( options={} ) => target( {
      ...options,
      sortOnButton: {
        ...options.sortOnButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.sortOnButton || {} ).buttonTag,
        },
      },
      addButton: {
        ...options.addButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.addButton || {} ).buttonTag,
        },
      },
      upButton: {
        ...options.upButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.upButton || {} ).buttonTag,
        },
      },
      downButton: {
        ...options.downButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.downButton || {} ).buttonTag,
        },
      },
      removeButton: {
        ...options.removeButton,
        buttonTag: {
          class: 'btn app-btn',
          ...( options.removeButton || {} ).buttonTag,
        },
      },

    } ),

  },

  // btns: (f) => ( controller, options={} ) => f.buttons( {
  //   cancel: {
  //     onclick: () => history.back(), // controller.open( '..', controller.query, controller.anchor ),
  //     ...options.cancel
  //   },
  //   ...options
  // } ),

  buttons: (f) => ( options={} ) => (a,x) => a['app-form-buttons']( [
    f.button( {
      label: app.icon( 'fa fa-times', 'Cancel' ),
      to: cc.hourglass( 'Cancelling…' ),
      onclick: () => history.back(),
      ...options.cancel
    } ),
    ' ',
    f.submit( {
      label: app.icon( 'fa fa-check', 'Submit' ),
      ...options.submit
    } ),
  ], {
    ...options.buttonsTag,
    style: {
      display: 'block',
      ...( options.buttonsTag || {} ).style,
    },
  } ),

  row: ( f, target ) => ( options={} ) => (a,x) => a['div.row'](
    ( options.columns || [] ).map( (column) => a['div.col-sm'](column) ),
    options.rowTag
  ),

}
