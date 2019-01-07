ax.extension.appkit.router.$router.$window.open = function( path ) {

  if ( path[0] !== '/' ) {
    let pathname = window.location.pathname
    if ( pathname.substr(-1) === '/' ) {
      path = pathname + path
    } else {
      let directories = pathname.substr(1).split('/')
      directories.pop()
      directories.push( path )
      path = '/' + directories.join('/')
    }
  }

  history.pushState( { urlPath: path },"", path )
  let event = new PopStateEvent( 'popstate', { urlPath: path } )
  dispatchEvent( event )

}
