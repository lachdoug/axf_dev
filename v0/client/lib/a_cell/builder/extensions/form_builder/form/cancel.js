AcellBuilderExtensionsFormBuilder.prototype.cancel = function( options ) {

  var a = this.cellBuilder.tagBuilder;
  var content;
  var onclickFunction;
  var geneOptions;

  var missingOnclickFunction = function (e) {
    window.history.back(e);
  }

  if ( typeof options === "undefined" ) {
    content = "Cancel";
    onclickFunction = missingOnclickFunction;
    geneOptions = {};
  } else if ( typeof options === "string" ) {
    content = options;
    onclickFunction = missingOnclickFunction;
    geneOptions = {};
  } else if ( typeof options === "function" ) {
    content = "Cancel";
    onclickFunction = options;
    geneOptions = {};
  } else if ( options instanceof Array ) {
    content = options[0];
    onclickFunction = options[1];
    geneOptions = options[2] || {};
  } else {
    content = "Cancel";
    onclickFunction = missingOnclickFunction;
    geneOptions = options || {};
  };

  // if ( )
// debugger
  geneOptions = Object.assign(
    {
      type: "button",
      onclick: function(e) { onclickFunction(e); },
    },
    geneOptions
  )

  return a.button( content, geneOptions );

};
