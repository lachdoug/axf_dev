ax.extension.codemirror.form.code.mode = function(
  f, options={}
) {

  let a = ax.a

  let mode
  let component
  let value

  if ( typeof options === 'string' ) {

    component = a.label( options )
    value = () => options

  } else if ( typeof options === 'object' ) {

    let collection = options.collection
    if ( collection === undefined ) {
      collection = Object.keys( CodeMirror.modes ) // List of installed language modes
      collection.shift(); // remove null
      collection = collection.map( ( mode ) => [ mode, mode ] ) // Keep collection label lowercase
    }

    component = f.select( {
      placeholder: "⌨",
      collection: collection,
      selectTag: {
        $on: { 'change: set CodeMirror mode': function () {
          this.$("^appkit-form-codemirror-code").$setMode()
        } },
      },
      ...options
    } )

    value = function() {
      return this.$('select').$value()
    }

  } else {

    component = null
    value = () => ''

  }

  return a['appkit-form-codemirror-code-mode']( component, {
    $value: value
  } )


}
