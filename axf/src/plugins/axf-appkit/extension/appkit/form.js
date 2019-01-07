ax.extension.appkit.form = function( component, options={} ) {

  if ( ax.type.is.function( component ) ) {

    let scope = options.scope || []
    if ( ax.type.is.string( scope ) ) { scope = [ scope ] }

    component = component(
      ax.extension.appkit.form.factory( {
        scope: scope,
        data: options.data,
        layout: options.layout
      } )
    )
  }

  let formTag = {
    action: options.action,
    method: options.method || "POST",
    $init: function() { if ( options.focus ) this.$focus() },
    $focus: function() {

      let first
      let fields = this.$$('appkit-form-field')()
      for ( let field of fields ) {
        if ( field.$match() ) {
          first = field
          break
        }
      }

      if ( first ) {
        first.$focus()
      } else {

        for ( let element of this.$$("input,select,textarea")() ) {
          if ( ax.x.appkit.lib.element.visible( element ) ) {
            element.focus()
            break
          }
        }

      }
    },
    $dependencies: function () {
       this.$$('appkit-form-field-dependent').$process()
   },
   $data: function () {
     return ax.extension.appkit.lib.form.data.object( this )
   },
   $valid: function () {
     return this.checkValidity()
   },
   $serialize: function () {
      return JSON.stringify( this.$data() )
    },
    ...options.formTag
  }

  return ax.a.form( component, formTag )

}
