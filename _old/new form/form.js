ax.extensions.appkit.form = function( component, options={} ) {

  if ( typeof component === "function" ) {
    component = component(
      new this.form.Factory(
        {
          object: options.object,
          layout: options.layout
        }
      )
    )
  }

  let formTag = {
    action: options.action,
    method: options.method || "POST",
    ...options.formTag
  }

  return ax.a.form( component, formTag )

}
