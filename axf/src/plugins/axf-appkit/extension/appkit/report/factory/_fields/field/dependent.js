ax.extension.appkit.report.factory.field.
dependent = (r) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.report.factory.field.dependent

  if ( ax.type.is.string( options ) ) {
    options = { key: options }
  }

  let dependentTag = {
    style: "display: none;",
    $init: function () { this.$process() },
    $on: { 'change: check field dependencies': function() {
      this.$('^appkit-report').$$('appkit-report-field-dependent').$process()
    } },
    $dependable: function() {
      return options.key || options.name || options.selector || options.traverse
    },
    $dependency: function() {
      return dependent.dependency(r).bind( this )( options )
    },
    $match: function() {
      return dependent.match.bind( this )( options )
    },
    $process: function () {
      return dependent.process.bind( this )( options )
    },
    ...options.dependentTag
  }

  return a["appkit-report-field-dependent"]( component, dependentTag )

};
