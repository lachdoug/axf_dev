ax.extension.appkit.router.$router.$views = function( router ) {

  return {
    collection: ax.extension.appkit.router.$router.$views.collection( router ),
    match: ax.extension.appkit.router.$router.$views.match( router )
  }

}
