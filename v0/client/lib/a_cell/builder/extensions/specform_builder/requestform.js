AcellBuilderExtensionsSpecformBuilder.prototype.requestform = function( action, formSpec, options ) {

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;

  options = options || {};

  var formOptions = Object.assign(
    {
      action: options.formAction || action,
      method: options.formMethod,
      cancel: options.cancel,
      submit: options.submit,
    },
    options
  );

  var successFunction = function ( data, target, request ) {
    formOptions.data = data;
    // if ( target.id === "bbb" ) {
      target.$components = [ x.specform( formSpec, formOptions ) ];
    // } else {
      // target.$components = [ a.hr() ];
    // };
    console.log( target );
    console.log( x.specform( formSpec, formOptions ) );
    // debugger
  };

  var requestOptions = Object.assign(
    {
      action: options.requestAction || action,
      method: options.requestMethod,
      success: successFunction
    },
    options
  );

  return x.request( action, requestOptions );

};
