AxBuilderExtensionsFormBuilder.prototype.submit = function( componentsOrOptions, options={} ) {

  var a = this.cellBuilder.tagBuilder;

  if ( typeof componentsOrOptions === "undefined" ) {
    components = "Submit";
    attributes = {}
  } else {
    components = componentsOrOptions;
    attributes = options.buttonAttributes || {};
  };

  var attributes = Object.assign(
    {
      type: "submit"
    },
    ( attributes )
  )

  return a.button( components, attributes );

};
