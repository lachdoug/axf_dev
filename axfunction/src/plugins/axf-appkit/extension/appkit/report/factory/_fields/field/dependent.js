ax.extension.appkit.report.factory.field.
dependent = function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.report.factory.field.dependent

  if ( typeof options === "string" ) {
    options = { name: options }
  }

  let dependentTag = {
    style: "display: none;",
    $init: function () { this.$update() },
    $on: { 'change: check field dependencies': function() {
      this.$('^report').$$('appkit-report-field-dependent').$update()
    } },
    $dependency: function() {
      return dependent.dependency.bind( this )( options )
    },
    $value: function() {
      return this.$('appkit-report-field-output > *').$value()
    },
    $match: function() {
      return dependent.match.bind( this )( options )
    },
    $update: function () {
      return dependent.update.bind( this )( options )
    },
    ...options.dependentTag
  }

  return a["appkit-report-field-dependent"]( component, dependentTag )

};
