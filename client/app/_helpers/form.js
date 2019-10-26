app.form = function( options={} ) {

  let x = ax.x

  return x.form( {
    action: options.url,
    shims: [
      x.bootstrap.form.shim(),
      // x.form.field.shim(),
      // x.form.field.dependent.shim(),
      // x.form.field.nest.shim(),
      x.form.async.shim(),
      this.form.shim,
    ],
    ...options
  } )

}
