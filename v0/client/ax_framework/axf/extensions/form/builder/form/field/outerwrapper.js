AxFrameworkExtensionsFormBuilder.prototype.outerwrapper = function(
  field,
  options={}
) {

  var a = this.axFramework.tags;
  var f = this;

  var attributes = options.attributes || {};

  var components = f.label( field, options.label );

  return a.wrapper( components, attributes );

};
