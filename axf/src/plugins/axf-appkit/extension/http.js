ax.extension.http = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let customCallbacks = options.when || {}

  let responseCallback = function( response, el ) {

    let callback
    let status = response.status

    if ( status >= 200 && status < 300 ) {
      callback = options.success || defaultCallback( 'success' )
    } else {
      callback = options.error || defaultCallback( 'error' )
    }

    callback.bind(el)( response, el )

  }

  let defaultCallback = ( type ) => ( response, el ) => {

    let contentType = response.headers.get('content-type')

    if ( contentType ) {

      contentType = contentType.split(';')[0]

      let contentHandler = customCallbacks[ contentType ]

      if ( contentHandler ) {
        contentHandler.bind(el)( response, el )
      } else {
        let target = options.target || el
        target.$nodes = a[`|appkit-http-response.${ type }`]( componentFor( contentType, response ) )
      }

    }

  }

  let componentFor = function( contentType, response ) {

    if ( contentType == 'application/json' ) {
      return { $init: (el) => response.json().then( result => el.$nodes = result ) }
    } else if ( contentType == 'text/html' ) {
      return { $init: (el) => response.text().then( result => el.$html = result ) }
    } else if ( contentType == 'text/plain' ) {
      return { $init: (el) => response.text().then( result => el.$nodes = a.pre( result ) ) }
    } else {
      return { $init: (el) => response.text().then( result => el.$text = result ) }
    }

  }

  return a['|appkit-http']( {
    $nodes: options.placeholder || null,
    $init: (el) => {

      let url = options.url

      if ( options.query ) {
        let query = x.lib.query.from.object( options.query )
        url = `${ url }?${ query }`
      }

      el.$send( 'axf.appkit.http.start' )
      fetch( url, {
        method: options.method,
        headers: options.headers,
        body: options.body,
        ...options.fetch,
      } )
      .then( response => {

        if ( response.status >= 200 && response.status < 300 ) {
          el.$send( 'axf.appkit.http.success' )
        } else {
          el.$send( 'axf.appkit.http.error' )
        }

        let statusCallback = customCallbacks[ response.status ]

        if ( statusCallback ) {
          statusCallback.bind(el)( response, el )
        } else {
          responseCallback( response, el )
        }

      } ).catch( error => {

        console.error( 'Ax appkit http error.', error.message )
        if ( options.catch ) options.catch( error, el )

      } ).finally( () => {

        // el is ususally removed from DOM by callback,
        // so get parent for sending complete event
        let parent = el.$('^')
        if( options.complete ) {
          options.complete.bind(parent)(parent)
        }
        // Parent sometimes removed too, such as when user navigates away before complate.
        if ( parent ) parent.$send( 'axf.appkit.http.complete' )

      } )

    }
  }, options.httpTag )

}
