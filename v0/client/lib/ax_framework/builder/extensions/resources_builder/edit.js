AxBuilderExtensionsResourcesBuilder.prototype.edit = function( action, fieldsSpec, options ) {

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
      target.$components = [ x.specform( fieldsSpec, formOptions ) ];
    console.log( target );
    console.log( x.specform( fieldsSpec, formOptions ) );
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
