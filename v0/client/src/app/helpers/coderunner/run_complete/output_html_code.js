App.prototype.coderunnerRunCompleteOutputHtmlCode = function () {

//   var a = this.a;
//   var x = this.x;
//
// function appHelperCodeTutorialRunCompleteOutputHtmlCode( this ) {

  var htmlcodeTarget = this.querySelector("output htmlcode textarea");
  var iframe = this.querySelector("output rendered iframe");
  var iframeWindow = iframe.contentWindow;
  var sourceCells = iframe.contentDocument.body.children;
  var callbackCell = iframe.contentDocument.body.lastChild;
  var htmlcodeSnips = [];

  // Check to see if more than one ax() function called.
  // Test is > 2 because callback cell also present.
  if ( sourceCells.length > 2 ) {
    for ( var sourceCell of sourceCells ) {
      if ( sourceCell === callbackCell ) { break; }
      htmlcodeSnips.push( sourceCell.outerHTML );
    };
  } else {
    var sourceCell = sourceCells[0];
    htmlcodeSnips.push( sourceCell.outerHTML );
  };

  var htmlcode = html_beautify( htmlcodeSnips.join("\n"), { unformatted: [] } );

  htmlcodeTarget._codemirror.getDoc().setValue( htmlcode );
  htmlcodeTarget._codemirror.setSize( "100%", "100%" );
  htmlcodeTarget._codemirror.refresh();

};
