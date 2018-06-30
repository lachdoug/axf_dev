App.prototype.coderunner = function( code ) {

  var a = this.a;
  var x = this.x;
  var app = this;

  // debugger

  var hideAndShow = {
    $init: function() {
      this._hide();
    },
    _hide: function() {
      this.style.display = "none";
    },
    _show: function() {
      this.style.display = "";
    }
  }

  return a.coderunner( [
    x.form( (f) => f.field("code", "code", { label: false, mode: "javascript", value: code } ), { formAttributes: { onsubmit: ()=>false } } ),
    a.p( [
      a.runbutton(
        app.appbtn( "Run", function () { app.coderunnerRun( this ); }, { fa: "play", attributes: { title: "Run code and show output" } } )
      ),
      a.outputbuttons( [
        app.appbtn( null, function(e) {
          this.closest("outputbuttons").querySelectorAll("button").forEach( function( button ) {
            button.classList.remove( "active" );
          } );
          this.classList.add( "active" );
          var coderunner = e.target.closest("coderunner");
          coderunner.querySelector("output rendered")._show();
          coderunner.querySelector("output htmlcode")._hide();
          coderunner.querySelector("output cellobject")._hide();
        }, { fa: "tv", attributes: { class: "active", title: "Rendered output" } } ),
        app.appbtn( null, function(e) {
          this.closest("outputbuttons").querySelectorAll("button").forEach( function( button ) {
            button.classList.remove( "active" );
          } );
          this.classList.add( "active" );
          var coderunner = e.target.closest("coderunner");
          coderunner.querySelector("output htmlcode")._show();
          this._outputHtmlCode( coderunner );
          coderunner.querySelector("output rendered")._hide();
          coderunner.querySelector("output cellobject")._hide();
        }, { fa: "code", attributes: { title: "Output HTML" } } ),
        app.appbtn( "ᴥ", function(e) {
          this.closest("outputbuttons").querySelectorAll("button").forEach( function( button ) {
            button.classList.remove( "active" );
          } );
          this.classList.add( "active" );
          var coderunner = e.target.closest("coderunner");
          coderunner.querySelector("output cellobject")._show();
          coderunner.querySelector("output rendered")._hide();
          coderunner.querySelector("output htmlcode")._hide();
        }, { attributes: { title: "Cell object", style: "line-height: 25px;" } } ),
        app.appbtn( null, function() {
          var coderunner = this.closest("coderunner");
          var headHtml = coderunner.querySelector("output iframe").contentDocument.head.innerHTML;
          var html =
`<!DOCTYPE html>
<html lang="en">
<head>
${headHtml}
</head>
<body></body>
</html>`;
          x.lib.open( { html: html } );
        }, { fa: "external-link", attributes: { title: "Run in window" } } ),
        app.appbtn( null, function() {
          var coderunner = this.closest("coderunner");
          coderunner.querySelector("output")._hide();
          coderunner.querySelector("outputbuttons")._hide();
        }, { fa: "times", attributes: { title: "Close" } } ),
      ],
      Object.assign( { style: "float: right;" }, hideAndShow )
    ),
    ] ),
    a.output( [
      a.rendered(
        a.iframe(),
        Object.assign(
          hideAndShow,
          { $init: function() {} }
        ) // merge empty $init function so that element won't hide on init
      ),
      a.htmlcode(
        x.code( null, { mode: "text/html" } ),
        hideAndShow
      ),
      a.cellobject(
        x.code( null, { mode: "javascript" } ),
        hideAndShow
      ),
    ],
    hideAndShow
  ),

], {
  _complete: app.coderunnerRunComplete,
  _outputCellObject: app.coderunnerRunCompleteOutputCellObject,
  _outputHtmlCode: app.coderunnerRunCompleteOutputHtmlCode,
  _cellJson: app.coderunnerRunCompleteCellJson
 } );
};
