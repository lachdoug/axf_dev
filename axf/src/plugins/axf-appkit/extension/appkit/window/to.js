// ax.extension.appkit.window.to = function( path ) {
//
//   if ( path[0] !== '/' ) {
//     let pathname = window.location.pathname
//     // debugger
//     if ( pathname.substr(-1) === '/' ) {
//       path = pathname + path
//     } else {
//       // path = pathname + '/' + path
//
//       let directories = pathname.substr(1).split('/')
//       directories.pop()
//       directories.push( path )
//       // debugger
//       // if ( scope ) directories.unshift( scope )
//       path = '/' + directories.join('/')
//     }
//   }
// ax.log( path )
//   history.pushState( { urlPath: path },"", path )
//   // history.go()
//   let event = new PopStateEvent( 'popstate', { urlPath: path } )
//   dispatchEvent( event )
//
// }
