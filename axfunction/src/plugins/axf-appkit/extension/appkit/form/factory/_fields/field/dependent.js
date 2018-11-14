ax.extension.appkit.form.factory.field.
dependent = function( component, options={} ) {

  let a = ax.a
  let x = ax.x
  let dependent = x.appkit.form.factory.field.dependent

  if ( typeof options === "string" ) {
    options = { name: options }
  }

  let dependentTag = {
    style: "display: none;",
    $init: function () { this.$update() },
    $on: { 'change: check field dependencies': function() {
      this.$('^form').$$('appkit-form-field-dependent').$update()
    } },
    $dependency: function() {
      return dependent.dependency.bind( this )( options )
    },
    $value: function() {
      return this.$('appkit-form-field-input > *').$value()
    },
    $match: function() {
      return dependent.match.bind( this )( options )
    },
    $update: function () {
      return dependent.update.bind( this )( options )
    },
    ...options.dependentTag
  }

  return a["appkit-form-field-dependent"]( component, dependentTag )

};
