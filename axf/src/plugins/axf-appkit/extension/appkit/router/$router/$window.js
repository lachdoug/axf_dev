ax.extension.appkit.router.$router.$window = function( router ) {

  return {
    open: ax.x.appkit.router.$router.$window.open,
    locate: ax.x.appkit.router.$router.$window.locate( router ),
  }

}
