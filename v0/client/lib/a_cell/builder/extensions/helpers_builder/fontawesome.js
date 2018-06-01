AcellBuilderExtensionsHelpersBuilder.prototype.fontawesome = function( faClass, text ) {

  var a = this.cellBuilder.tagBuilder;

  return a.span( [
    a.i( { class: "fa fa-" + faClass } ),
    a.span( text ? " " + text : "" )
  ] );

};
