ax.extension.appkit.report.factory.many.
remove = ( f ) => function( component, options={} ) {

  let a = ax.a
  let x = ax.x

  return x.appkit.button( component || "➖ Remove", function () {
    let confirmed = confirm( 'Are you sure that you want to remove this item?' )
    if ( confirmed ) this.$('^appkit-report-field-many-item').remove()
  } )

}
