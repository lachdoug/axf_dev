AxBuilderExtensionsRequestBuilder.prototype.request = function( action, options={} ) {

  var a = this.cellBuilder.tagBuilder;

  // Setup behavior
  var requestMethod = options.method || 'GET';
  var successFunction = options.success ||
    function( result, target ) {
      if ( typeof result === "object" ) {
        target.$components = [ a.pre( JSON.stringify( result, null, 2 ) ) ];
      } else {
        target.$text = result;
      }
    };

  var errorFunction = options.error ||
    function( response, target ) {
      target.$text = response.failed || "Failed to load";
    };
  var loadingContent = a.loading( options.loading || "Loading" );

  // Build XMLHttp request function
  var requestFunction = function( target ) {

    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        var result;
        if ( this.status == 200 ) {
          if( this.getResponseHeader("Content-Type") === "application/json" ) {
            result = JSON.parse( this.responseText );
          } else {
            result = this.responseText;
          };
          target._success( result, this );
        } else {
          result = this.statusText || "Request error"
          target._error( result, this );
        };
      };
    };
    request.open( requestMethod, action, true);
    request.setRequestHeader('Accept', 'application/json');
    request.send();

  };

  return Object.assign(
    {
      $type: "request",
      $components: [ loadingContent ],
      $init: function() { requestFunction( this ) },
      _success: function( result, request ) { successFunction( result, this, request ) },
      _error: function( result, request ) { errorFunction( result, this, request ) }
    },
    options.request
  )

};
