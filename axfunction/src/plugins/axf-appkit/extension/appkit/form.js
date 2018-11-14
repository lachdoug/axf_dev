ax.extension.appkit.form = function( component, options={} ) {

  if ( typeof component === "function" ) {

    let nest = options.nest || []
    if ( typeof nest === "string" ) { nest = [ nest ] }

    component = component(
      ax.extension.appkit.form.factory( {
        nest: nest,
        data: options.data,
        layout: options.layout
      } )
    )
  }

  let formTag = {
    action: options.action,
    method: options.method || "POST",
    ...options.formTag
  }

  return ax.a.form( component, formTag )

}
