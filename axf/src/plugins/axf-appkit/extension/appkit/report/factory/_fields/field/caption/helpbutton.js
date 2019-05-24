ax.extension.appkit.report.factory.field.caption.
helpbutton = function( options ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-field-helpbutton']( {
    $state: false,
    $nodes: function() {
      return a["appkit-report-field-arrow"](
        { $text: this.$state() ? " ? ▴ " : " ? ▾ " }
      )
    },
    $on: { 'click: toggle help': function() {
      this.$state = !this.$state()
      this.$('^appkit-report-field', 'appkit-report-field-help').$toggle()
    } },
    ...options.helpbuttonTag
  } )

}
