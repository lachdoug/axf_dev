ax.extension.codemirror.form.control.mode = function(
  f, options={}
) {

  let a = ax.a

  let mode
  let component
  let value

  let modeLabel = function( mode ) {
    let labels = {
      shell: 'Shell',
      javascript: 'JavaScript',
      ruby: 'Ruby',
      python: 'Python',
      xml: 'XML',
      yaml: 'YAML',
    }
    return labels[ mode ] || mode
  }

  if ( ax.is.string( options ) ) {

    component = a.label( modeLabel( options ) )
    value = () => options

  } else if ( options ) {

    // if ( ax.is.not.object( options ) ) {
    //   options = {}
    // }

    let selections = options.selections
    if ( ax.is.undefined( selections ) ) {
      selections = Object.keys( CodeMirror.modes ) // List of installed language modes
      selections.shift(); // remove null

      if ( selections.length > 0 ) {
        selections = selections.map( ( mode ) => [ mode, modeLabel( mode ) ] )
        component = f.element.select( {
          placeholder: '𝍣 Mode',
          selections: selections,
          value: options.value,
          selectTag: {
            $on: { 'change: set CodeMirror mode': function () {
              this.$('^|appkit-form-codemirror').$setMode()
            } },
            ...options.selectTag
          },
        } )
        value = function() {
          return this.$('select').value
        }

      } else {

        component = null
        value = () => ''

      }
    }


  } else {

    component = null
    value = () => ''

  }

  return a['|appkit-form-codemirror-mode']( component, {
    $value: value
  }, options.modeTag )


}
