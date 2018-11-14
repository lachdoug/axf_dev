App.prototype.coderunnerRunComplete = function( iframeWindow ) {

  // var a = this.a;
  // var x = this.x;

  var iframe = iframeWindow.frameElement;
  var coderunner = iframe.closest("coderunner");

  // CodeMirror textarea needs to be visible to update content.
  coderunner.querySelector("output cellobject")._show();
  this._outputCellObject();
  coderunner.querySelector("output cellobject")._hide();
  coderunner.querySelector("output initialhtmlcode")._show();
  this._outputHtmlCode( "initial" );
  coderunner.querySelector("output initialhtmlcode")._hide();

  // Show the output buttons
  coderunner.querySelector("outputbuttons")._show();
  coderunner.querySelector("resizeButton")._show();

  // Set the height of the iframe.
  this._resizeIframe( coderunner );
  // var setIframeHeight = function() {
  //   iframe.style.height = iframe.contentDocument.body.scrollHeight + 100 + 'px';
  // };
  // setIframeHeight();

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

// App.prototype.coderunnerResizeIframe = function( coderunner ) {
//   var iframe = coderunner.querySelector("output iframe");
//   iframe.style.height = "";
//   iframe.style.height = iframe.contentDocument.body.scrollHeight + 100 + 'px';
// };
