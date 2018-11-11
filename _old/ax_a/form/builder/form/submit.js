AxFunctionExtensionsFormBuilder.prototype.submit = function( componentsOrOptions, options={} ) {

  var a = this.axFunction.tags;

  var components, attributes;

  if ( typeof componentsOrOptions === "undefined" ) {
    components = "Submit";
    attributes = {}
  } else {
    components = componentsOrOptions;
    attributes = options.attributes || {};
  };

  var attributes = Object.assign(
    {
      type: "submit"
    },
    ( attributes )
  )

  return a.button( components, attributes );

};
