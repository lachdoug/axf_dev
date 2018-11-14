ax.extension.appkit.report.factory.field.caption.
label = function(
  options
) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib

  if ( options.label === false ) return

  let component = [ options.label || lib.text.labelize( options.name ) ]

  // let labelTag = {
  //   $on: { 'click: focus on input': function() {
  //     this.$( "^appkit-report-field", 'appkit-report-field-input > *').$focus()
  //   } },
  //   ...
  // }

  return a["appkit-report-field-label"]( component, options.labelTag )

}
