ax.extension.appkit.controller.$windowLocate = function() {
  let location = window.location
  let path = location.href.replace( location.origin, '' )
  // debugger
  this.$to( path )
}
