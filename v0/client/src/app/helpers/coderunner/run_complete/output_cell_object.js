App.prototype.coderunnerRunCompleteOutputCellObject = function() {

// function appHelperCodeTutorialRunCompleteOutputCellObject( coderunner ) {
  var cellobjectTarget = this.querySelector("output cellobject textarea");
  var iframe = this.querySelector("output rendered iframe");
  var iframeWindow = iframe.contentWindow;
  var sourceCells = iframe.contentDocument.body.children;
  var callbackCell = iframe.contentDocument.body.lastChild;
  var cellObjects = [];

  // Check to see if more than one ax() function called.
  // Test is > 2 because callback cell also present.
  if ( sourceCells.length > 2 ) {
    for ( var sourceCell of sourceCells ) {
      if ( sourceCell === callbackCell ) { break; }
      var cellObject = iframeWindow[ "$" + sourceCell.id ];
      cellObjects.push( cellObject );
    };
  } else {
    var sourceCell = sourceCells[0];
    var cellObject = iframeWindow[ "$" + sourceCell.id ];
    cellObjects = cellObject;
  };
  var cellObjectsJson = this._cellJson( cellObjects );

  cellobjectTarget._codemirror.getDoc().setValue( cellObjectsJson );
  cellobjectTarget._codemirror.setSize( "100%", "100%" );
  cellobjectTarget._codemirror.refresh();

};
