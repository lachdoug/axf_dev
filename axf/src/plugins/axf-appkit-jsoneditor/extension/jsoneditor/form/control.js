ax.extension.jsoneditor.form.
control = function( f, options={} ) {

  let a = ax.a
  let x = ax.x

  // let object
  // let value = options.value
  //
  // if ( ax.is.string( value ) ) {
  //
  //
  //   object = JSON.parse( value || '{}' )
  // }
  //
  //
  // if ( options.parse == false ) {
  //   object = value || {}
  // } else {
  //   try {
  //     this.$editor.set( object )
  //   }
  //   catch (error) {
  //     this.$nodes = a['p.error']( `⚠ ${ error.message }` )
  //   }
  // }

  let controlTagOptions = {
    $init: function() {
      let el = this
      let jsoneditorOptions = {
        // mode: 'view',
        onEditable: function (node) {
          return !el.$disabled // Do not allow editing when disabled.
        },
        onChange: function() {
          el.$stash()
          el.$send( 'axf.appkit.form.control.change' )
        },
        ...options.jsoneditor
      }

      this.$editor = new JSONEditor(this.$('div'), jsoneditorOptions)

      let value = options.value
      try {
        if ( ax.is.string( value ) ) {
          value = JSON.parse( value || '{}' )
        }
        this.$editor.set( value )
        this.$stash()
      }
      catch (error) {
        this.$nodes = a['p.error']( `⚠ ${ error.message }` )
      }

    },
    $stash: function() {
      this.$('input').value = this.$value()
    },
    $value: function() {
      return JSON.stringify( this.$editor.get() )
    },
    $data: function() {
      return this.$value()
    },
    $focus: function () {
      this.$('jsoneditor-tree button').focus()
    },
    $disable: function() {
      this.$disabled = true
    },
    $enable: function() {
      if ( !options.disabled ) {
        this.$disabled = false
      }
    },
    $on: {
      // 'change: send control change event': (e,el) =>{
      //   debugger
      //   el.$send( 'axf.appkit.form.control.change' )
      // },
      'keydown: check for editor exit': (e,el) => {
        if ( e.keyCode == 27 && e.shiftKey ) {
          // shift+ESC pressed - move focus backward
          ax.x.lib.tabable.previous( el ).focus()
        } else if ( e.keyCode == 27 && e.ctrlKey ) {
          // ctrl+ESC pressed - move focus forward
          ax.x.lib.tabable.next( el ).focus()
        }

      },
    },

    ...options.controlTag

  }

  return a['|appkit-form-control']( [
    a.input( { name: options.name, type: 'hidden' } ),
    a.div,
  ], controlTagOptions )

}
