ax.extension.http = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let componentFor = function( content, contentType ) {

    if ( contentType == 'application/json' ) {
      return { $nodes: content }
    } else if ( contentType == 'text/html' ) {
      return { $html: content }
    } else {
      return { $text: content }
    }
  }

  let resultFor = function( content, response, contentType ) {
    return {
      content: content,
      http: response,
      contentType: contentType
    }
  }

  let defaultSuccessCallback = ( result, el ) => {
    let target = options.target || el
    target.$nodes = a['|appkit-http-result']( componentFor( result.content, result.contentType ) )
  }
  let defaultErrorCallback = ( result, el ) => {
    let target = options.target || el
    target.$nodes = a['|appkit-http-result.error']( componentFor( result.content, result.contentType ) )
  }

  let customCallbacks = options.when || {}

  let handleResult = function( result, el ) {

    let callback
    let status = result.http.status

    if ( status >= 200 && status < 300 ) {
      callback = options.success || defaultSuccessCallback
    } else {
      callback = options.error || defaultErrorCallback
    }

    callback.bind(el)( result, el )

  }

  return a['|appkit-http']( {
    $nodes: options.placeholder || null,
    $init: (el) => {
      el.$send( 'axf.appkit.http.start' )
      fetch( options.url, {
        method: options.method,
        body: options.body,
        ...options.fetch,
        // headers: {
        //   // 'Accept': 'application/json',
        //   // 'Content-Type': 'application/json'
        // }
      } )
      .then( response => {
// debugger
        if ( response.status >= 200 && response.status < 300 ) {
          el.$send( 'axf.appkit.http.success' )
        } else {
          el.$send( 'axf.appkit.http.error' )
        }

        let statusCallback = customCallbacks[ response.status ]

        if ( statusCallback ) {

          statusCallback.bind(el)( response, el )

        } else {

          let contentType = response.headers.get('content-type')

          if ( contentType ) {

            contentType = contentType.split(';')[0]

            let contentHandler = customCallbacks[ contentType ]

            if ( contentHandler ) {
              contentHandler.bind(el)( response, el )
            } else {

              switch( contentType ) {

                case 'application/json':
                response.json().then( content => {
                  handleResult.bind(el)( resultFor( content, response, contentType ), el )
                } )
                break

                case 'text/plain':
                case 'text/html':
                response.text().then( content => {
                  handleResult.bind(el)( resultFor( content, response, contentType ), el )
                } )
                break

                default:
                ax.throw( `Unhandled content-type '${ contentType }'.` )

              }

            }

          }

        }

        let parent = el.$('^') // el can be removed from DOM by callback, so get parent for sending complete event
        if( options.complete ) {
          options.complete.bind(parent)(parent)
        }
        parent.$send( 'axf.appkit.http.complete' )

      } ).catch( error => {

        ax.log.error( 'Ax appkit http error.', error.message )
        if ( options.catch ) options.catch( error, el )

      // } ).finally( () => {
      //

      } )

    }
  }, options.httpTag )

}
