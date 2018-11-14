ax.extension.appkit.form.factory.field.
help = function( component ) {

  let a = ax.a
  let x = ax.x

  return a["appkit-form-field-help-wrapper"](
    a["appkit-form-field-help"]( component, {
      $toggle: function () {
        x.appkit.lib.animate.fade.toggle( this )
      },
      style: { display: "none" }
    } )
  )

}
