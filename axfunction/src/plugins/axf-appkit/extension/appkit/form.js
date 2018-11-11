ax.extension.appkit.form = function( component, options={} ) {

  if ( typeof component === "function" ) {
    component = component(
      ax.extension.appkit.form.factory( {
        object: options.object,
        layout: options.layout
      } )


      // new this.formFactory(
      //   {
      //     object: options.object,
      //     layout: options.layout
      //   }
      // )
    )
  }

  let formTag = {
    action: options.action,
    method: options.method || "POST",
    ...options.formTag
  }

  return ax.a.form( component, formTag )

}
