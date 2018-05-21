ACellDslFormBuilder.prototype.hint = function( geneContent ) {

    var a = this.cellBuilder;

    if ( typeof geneContent === "string" ) {
      return a.hint( geneContent );
    } else if ( typeof geneContent === "object" ) {
      return geneContent;
    } else {
      return a.span();
    };

};
