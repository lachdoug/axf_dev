ax.extension.appkit.form.factory.field.
dependent = (f) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.form.factory.field.dependent

  if ( ax.type.is.string( options ) ) {
    options = { key: options }
  } else if ( options === true ) {
    options = { traverse: function() {
      return x.appkit.lib.field.previous( this )
    } }
  } else if ( options === null ) {
    options = {}
  }

  let dependentTag = {
    style: "display: none;",
    $init: function () { this.$process() },
    $on: {
      'change: check field dependencies': function() {
        this.$('^form').$dependencies()
      },

    },
    $dependable: function() {
      return options.key || options.name || options.selector || options.traverse
    },
    $dependency: function() {
      return dependent.dependency(f).bind( this )( options )
    },
    $match: function() {
      return dependent.match.bind( this )( options )
    },
    $process: function () {
      return dependent.process.bind( this )( options )
    },
    ...options.dependentTag
  }

  return a["appkit-form-field-dependent"]( component, dependentTag )

};
