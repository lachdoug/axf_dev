AxBuilderExtensionsFormBuilder.prototype.form = function( components, options={} ) {

  this.data = options.data;

  var a = this.cellBuilder.tagBuilder;
  var f = this;

  var attributes = Object.assign(
    {
      action: options.action,
      method: options.method || "POST"
    },
    ( options.formAttributes || {} )
  );

  if ( typeof components === "function" ) {
    components = components( this );
  };

  return a.form( components, attributes );

};
