ax.extension.appkit.fetch = function( action, options={} ) {

  let a = ax.a;

  let method = options.method || 'GET';

  let successFunction = options.success ||
    function( result, target ) {
      if ( typeof result === "object" ) {
        target.$nodes = [ a.pre( JSON.stringify( result, null, 2 ) ) ];
      } else {
        target.$text = result;
      }
    };

  let errorFunction = options.error ||
    function( response, target ) {
      target.$text = response.failed || "Failed to load";
    };

  // Build XMLHttp request function
  let requestFunction = function( target ) {

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        let result;
        if ( this.status == 200 ) {
          if( this.getResponseHeader("Content-Type") === "application/json" ) {
            result = JSON.parse( this.responseText );
          } else {
            result = this.responseText;
          };
          target.$success( result, this );
        } else {
          result = this.statusText || "Request error"
          target.$error( result, this );
        };
      };
    };
    request.open( method, action, true);
    request.setRequestHeader('Accept', 'application/json');
    request.send();

  };

  let fetchTag = Object.assign(
    {
      $init: function() { requestFunction( this ) },
      $success: function( result, request ) { successFunction( result, this, request ) },
      $error: function( result, request ) { errorFunction( result, this, request ) }
    },
    options.fetchTag
  )

  let components = a.loading( options.loading || "Loading" );

  return a.fetch( components, fetchTag )

};
