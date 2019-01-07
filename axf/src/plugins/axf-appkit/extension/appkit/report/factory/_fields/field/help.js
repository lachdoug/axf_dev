ax.extension.appkit.report.factory.field.
help = function( component ) {

  let a = ax.a
  let x = ax.x

  return a["appkit-report-field-help-wrapper"](
    a["appkit-report-field-help"]( component, {
      $toggle: function () {
        x.appkit.lib.animate.fade.toggle( this )
      },
      style: { display: "none" }
    } )
  )

}
