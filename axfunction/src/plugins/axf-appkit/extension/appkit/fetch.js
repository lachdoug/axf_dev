ax.extension.appkit.fetch = function( action, options={} ) {

  let a = ax.a
  let x = ax.x

  let method = options.method || 'GET'

  let successFunction = options.success ||
    function( result ) {
      if ( typeof result === "object" ) {
        this.$nodes = x.appkit.put( result )
      } else {
        this.$text = result
      }
    }

  let errorFunction = options.error ||
    function( response, target ) {
      target.$text = response.failed || "Failed to load"
    }

  // Build XMLHttp request function
  let requestFunction = function( target ) {

    let request = new XMLHttpRequest()
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        let result
        if ( this.status == 200 ) {
          if( this.getResponseHeader("Content-Type") === "application/json" ) {
            result = JSON.parse( this.responseText )
          } else {
            result = this.responseText
          }
          target.$success( result, this )
        } else {
          result = this.statusText || "Request error"
          target.$error( result, this )
        }
      }
    }
    request.open( method, action, true)
    request.setRequestHeader('Accept', 'application/json')
    request.send()

  }

  let fetchTag = Object.assign(
    {
      $init: function() { requestFunction( this ) },
      $success: function( result, request ) { successFunction.call( this, result, this, request ) },
      $error: function( result, request ) { errorFunction.call( this, result, this, request ) }
    },
    options.fetchTag
  )

  let component = a.loading( options.loading || "Loading" )

  return a['appkit-fetch']( component, fetchTag )

}
