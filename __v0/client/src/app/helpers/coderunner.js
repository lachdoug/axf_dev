App.prototype.coderunner = function( code ) {

  var a = this.a;
  var x = this.x;
  var app = this;

  // debugger

  var displayMethods = {
    style: "display: none;",
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

  var activateOuputButton = function( button ) {
    button.closest("outputbuttons").querySelectorAll("button").forEach( function( button ) {
      button.classList.remove( "active" );
    } );
    button.classList.add( "active" );
  };

  var showOuput = function( clicked, selector ) {

    var coderunner = clicked.closest("coderunner");

    coderunner.querySelector("output rendered")._hide();
    coderunner.querySelector("resizeButton")._hide();
    coderunner.querySelector("output initialhtmlcode")._hide();
    coderunner.querySelector("output currenthtmlcode")._hide();
    coderunner.querySelector("output cellobject")._hide();

    coderunner.querySelector( selector )._show();

  };

  var launchFullscreen = function( clicked ) {
    var coderunner = clicked.closest("coderunner");
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
  };

  var close = function( clicked ) {
    var coderunner = clicked.closest("coderunner");
    coderunner.querySelector("output")._hide();
    coderunner.querySelector("outputbuttons")._hide();
    coderunner.querySelector("resizeButton")._hide();
  };

  return a.coderunner( [
    x.form( (f) => f.field( { name: "code", type: "codemirror", label: false, value: code, codemirror: { mode: "javascript" } } ), { formTag: { onsubmit: () => false } } ),
    a.p( [
      a.runbutton(
        app.appbtn( "Run", function () { app.coderunnerRun( this ); }, { icon: "fa fa-play", buttonTag: { title: "Run code and show output" } } )
      ),
      a.outputbuttons( [
        app.appbtn( null, function(e) {
          activateOuputButton( this );
          showOuput( this, "output rendered" );
        }, { icon: "fa fa-tv", buttonTag: { class: "active", title: "Rendered output" } } ),
        app.appbtn( null, function(e) {
          activateOuputButton( this );
          showOuput( this, "output initialhtmlcode" );
        }, { icon: "fa fa-flag-o", buttonTag: { title: "Output HTML" } } ),
        app.appbtn( null, function(e) {
          activateOuputButton( this );
          showOuput( this, "output currenthtmlcode" );
          this._outputHtmlCode( "current" );
        }, { icon: "fa fa-flag-checkered", buttonTag: { title: "Current HTML" } } ),
        app.appbtn( "ᴥ", function(e) {
          activateOuputButton( this );
          showOuput( this, "output cellobject" );
        }, { buttonTag: { title: "Cell object", style: "line-height: 25px;" } } ),
        app.appbtn( null, function() {
          launchFullscreen( this );
        }, { icon: "fa fa-external-link", buttonTag: { title: "Run in window" } } ),
        app.appbtn( null, function() {
          close( this );
        }, { icon: "fa fa-times", buttonTag: { title: "Close" } } ),
      ],
      Object.assign( {}, displayMethods, { style: "display: none; float: right;" } )
    ),
  ] ),
  a.output( [
    a.rendered(
      a.iframe(),
      Object.assign(
        {}, displayMethods, { style: "", $init: function() {} }
      ) // merge empty $init function so that html output is shown by default
    ),
    // () => { debugger },
    a.initialhtmlcode(
      x.code( null, { mode: "text/html" } ),
      Object.assign( {}, displayMethods )
    ),
    // () => { debugger },
    a.currenthtmlcode(
      x.code( null, { mode: "text/html" } ),
      Object.assign( {}, displayMethods )
    ),
    // () => { debugger },
    a.cellobject(
      [ x.code( null, { mode: "javascript" } ) ],
      Object.assign( {}, displayMethods )
    ),
  ], Object.assign( {}, displayMethods ) ),
  a.resizeButton(
    app.appbtn( "Fit", function(e) {
      var coderunner = this.closest("coderunner");
      this._resizeIframe( coderunner );

      var rect = this.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;
      var notVisible = (elemTop < 0) || (elemBottom > window.innerHeight);
      if ( notVisible ) { this.scrollIntoView(false); };

    }, { icon: "fa fa-arrows-v", buttonTag: { title: "Fit" } } ),
    Object.assign( {}, displayMethods )
  ),
], {
  _resizeIframe: function( coderunner ) {
    var iframe = coderunner.querySelector("output iframe");
    iframe.style.height = "";
    iframe.style.height = iframe.contentDocument.body.scrollHeight + 100 + 'px';
  },
  _complete: app.coderunnerRunComplete,
  _outputCellObject: app.coderunnerRunCompleteOutputCellObject,
  // _outputHtmlCode: app.coderunnerRunCompleteOutputHtmlCode,
  _outputHtmlCode: function( target ) { app.coderunnerRunCompleteOutputHtmlCode( this, target ) },
  _cellJson: app.coderunnerRunCompleteCellJson
 } );
};
