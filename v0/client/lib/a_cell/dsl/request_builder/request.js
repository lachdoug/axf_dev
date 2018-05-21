ACellDslRequestBuilder.prototype.request = function( requestUrlOrGeneOptions, geneOptionsOrBuilderOptions, builderOptions ) {

  var cellBuilder = this.cellBuilder;
  var geneOptions;
  var requestUrl;

  // Assign arguments depending on the data type of the first argument
  if ( typeof requestUrlOrGeneOptions === "string" ) {
    geneOptions = geneOptionsOrBuilderOptions || {};
    builderOptions = builderOptions || {};
    requestUrl = requestUrlOrGeneOptions;
  } else {
    geneOptions = requestUrlOrGeneOptions || {};
    builderOptions = geneOptionsOrBuilderOptions || {};
    requestUrl = builderOptions.url;
  };

  // Setup behavior
  var requestMethod = builderOptions.method || 'GET';
  var successFunction = builderOptions.success ||
                        function( result, target ) {
                          if ( typeof result === "object" ) {
                            target.$components = [ cellBuilder.pre( JSON.stringify( result, null, 2 ) ) ];
                          } else {
                            target.$text = result;
                          }
                        };
  var errorFunction = builderOptions.error ||
                        function( response, target ) {
                          target.$text = response.statusText || "Failed to load";
                        };
  var loadingContent = this.cellBuilder.tag( null, builderOptions.loading || "Loading" );

  // Build XMLHttp request function
  var requestFunction = function() {
    var target = this;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        var result;
        if ( this.status == 200 ) {
          if( this.getResponseHeader("Content-Type") === "application/json" ) {
            result = JSON.parse( this.responseText );
          } else {
            result = this.responseText;
          }
          target._success( result, this );
        } else {
          result = this.statusText || "Request error"
          target._error( result, this );
        };
      };
    };
    request.open( requestMethod, requestUrl, true);
    request.send();
  }

  return Object.assign(
    {
      $components: [ loadingContent ],
      $init: requestFunction,
      _success: function( result, request ) { successFunction( result, this, request ) },
      _error: function( result, request ) { errorFunction( result, this, request ) }
    },
    geneOptions
  )

};
