ax.extension.appkit.router.$router.$master = function( router ) {

  let master
  let options = router.$config.options

  if ( options.bind !== false ) {

    let element = (
      document.querySelector( options.bind ) ||
      router.$element.$("^ ^appkit-router")
    )

    if ( element ) {
      master = element.$router
    } else {
      master = window
    }
  }
// debugger
  return master

}
