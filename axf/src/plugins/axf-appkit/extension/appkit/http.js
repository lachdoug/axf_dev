ax.extension.appkit.
http = function( url, options={} ) {

  let a = ax.a
  let x = ax.x

  let method = options.method || "GET"

  let success = function( data, element, request ) {
    if ( options.success ) {
      options.success.bind(element)( data, element, request )
    } else {
      element.$nodes = x.appkit.put( data )
    }
  }

  let error = function( err, element, request ) {
    ax.log( err )
    if ( options.error ) {
      options.error.bind(element)( err, element, request )
    } else {
      let message = request.responseText
      let content_type = request.getResponseHeader( "content-type" )
      if ( content_type === "application/json" ) {
        message = JSON.parse( message )
      }
      element.$nodes = x.appkit.put( message )
    }
  }

  let request = new XMLHttpRequest()

  let resolver
  if ( options.resolver ) {
    resolver = options.resolver( request )
  } else {
    resolver = function( element, promise ) {
      promise.then( function( data ) {

        success.bind( element )( data, element, request )
      } ).catch( function( err ) {
        error.bind( element )( err, element, request )
      } )
    }
  }

	let promise = new Promise(function (resolve, reject) {
		request.onreadystatechange = function () {
			if (request.readyState !== 4) return
			if (request.status >= 200 && request.status < 300) {
        if( request.getResponseHeader("Content-Type") === "application/json" ) {
          resolve( JSON.parse( request.responseText ) )
        } else {
          resolve( request.responseText )
        }
			} else {
        if( request.getResponseHeader("Content-Type") === "application/json" ) {
          reject( new Error( JSON.parse( request.responseText ) ) )
        } else {
          reject( new Error( request.responseText ) )
        }
			}
		}

		request.open( method, url, true )
		request.send( options.body )

	})

  let httpTag = Object.assign(
    {
      $init: function( element ) { resolver( element, promise ) },
    },
    options.httpTag
  )

  let component = options.loading || x.appkit.loading()

  return a['appkit-http']( component, httpTag )

}
