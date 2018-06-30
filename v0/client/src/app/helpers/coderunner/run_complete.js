App.prototype.coderunnerRunComplete = function( iframeWindow ) {

  // var a = this.a;
  // var x = this.x;

  var iframe = iframeWindow.frameElement;
  var coderunner = iframe.closest("coderunner");

  // CodeMirror textarea needs to be visible to update content.
  coderunner.querySelector("output cellobject")._show();
  // debugger;
  this._outputCellObject();
  coderunner.querySelector("output cellobject")._hide();

  // Show the output buttons
  coderunner.querySelector("outputbuttons")._show();

  // Set the height of the HTML output iframe.
  // debugger;

  var setIframeHeight = function() {
    iframe.style.height = iframe.contentDocument.body.scrollHeight + 500 + 'px';
    console.log("do height")
    // setTimeout( setIframeHeight, 1000 );
  };
  setIframeHeight();

  // Note that iframes in some browser (e.g. Chrome) will re-render old cell
  // objects from previous runs, but other browsers (e.g. Firefox) will not.
  // Multiple versions of the output can be rendered on a re-run.
  // Solution:
  //   after run and render, clear cell object from each window[$cellVarName]
  // debugger;
  var axes = iframeWindow.document.body.children;
  for ( i in axes ) {
    iframeWindow[ "$" + axes[i].id ] = null;
  };

};
