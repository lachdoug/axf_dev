app.coderunner = function( code ) {

  let a = ax.a
  let x = ax.x

  return a.coderunner( [
    x.appkit.form(
      (f) => [
        f.field( {
          key: "code",
          as: "code",
          label: false,
          value: code,
          code: { mode: "javascript" },
          // help: "Hi",
        } ),
        a.p( app.btn( app.fa( "play", "Run" ), function () {
          let code = this.$('^form appkit-form-field').$value()
          let iframe = this.$('^coderunner iframe').$run( code )
        } ) ),
        app.coderunner.iframe( code ),

      ],
      // { formTag: { onsubmit: () => false } }
    ),
  ] )



}

app.coderunner.iframe = function( code ) {

  return ax.a.iframe( {
    $run: function( code ) {

      let doc = this.contentDocument

      doc.write(
        `<!DOCTYPE html>
        <html lang="en">

        <head>
        <meta charset="utf-8">
        <title>Ax Run</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="favicon.png" type="image/png">

        <link rel="stylesheet" href="/vendor/font-awesome-4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/vendor/codemirror-5.28.0/codemirror.css">
        <link rel="stylesheet" href="/vendor/codemirror-5.28.0/theme/neo.css">
        <link rel="stylesheet" href="/vendor/simplemde-1.11.2/simplemde.min.css">
        <link rel="stylesheet" href="/vendor/quilljs-1.3.6/quill.snow.css">
        <link rel="stylesheet" href="/vendor/text-security-0.0.0/dist/text-security.css">

        <link rel="stylesheet" href="/vendor/bootstrap-4.1.0-dist/css/bootstrap.min.css">

        <script src="/vendor/codemirror-5.28.0/codemirror.min.js"></script>
        <script src="/vendor/codemirror-5.28.0/addons/display/placeholder.js"></script>
        <script src="/vendor/codemirror-5.28.0/mode/shell/shell.js"></script>
        <script src="/vendor/codemirror-5.28.0/mode/javascript/javascript.js"></script>
        <script src="/vendor/codemirror-5.28.0/mode/ruby/ruby.js"></script>
        <script src="/vendor/codemirror-5.28.0/mode/xml/xml.js"></script>
        <script src="/vendor/simplemde-1.11.2/simplemde.min.js"></script>
        <script src="/vendor/quilljs-1.3.6/quill.js"></script>
        <!-- <script src="/vendor/js-beautify-1.7.5/beautify.js"></script> -->
        <!-- <script src="/vendor/js-beautify-1.7.5/beautify-css.js"></script> -->
        <!-- <script src="/vendor/js-beautify-1.7.5/beautify-html.js"></script> -->
        <script src="/vendor/marked-0.3.6.min.js"></script>
        <!-- <script src="/vendor/sketchjs-0.0.0.js"></script> -->
        <!-- <script src="/vendor/chartjs-2.7.2.bundle.min.js"></script> -->


        <!-- <script src="/vendor/jquery-3.3.1.slim.min.js"></script> -->


        <!-- <script src="https://component.kitchen/polyfill/webcomponents-bundle.js"></script> -->
        <!-- <script type="module" src="https://component.kitchen/modules/AutosizeTextarea.js"></script> -->

        <script type="application/javascript" src="/assets/axfunction/axf.js" ></script>
        <script type="application/javascript" src="/assets/axfunction/axf-plugins.js" ></script>
        <!-- <script type="application/javascript" src="/assets/axf/themes/basic.js" ></script> -->
        <script type="application/javascript" src="/assets/client.js" ></script>

        </head>

        <body>


        <script>${code}</script>
        </body>

        </html>`
      )
      doc.close()
    }
  } )

}

//
// let xxxcoderunner = function( code ) {
//
//   var a = this.a;
//   var x = this.x;
//   var app = this;
//
//   // debugger
//
//   var displayMethods = {
//     style: "display: none;",
//     $init: function() {
//       this._hide();
//     },
//     _hide: function() {
//       this.style.display = "none";
//     },
//     _show: function() {
//       this.style.display = "";
//     }
//   }
//
//   var activateOuputButton = function( button ) {
//     button.closest("outputbuttons").querySelectorAll("button").forEach( function( button ) {
//       button.classList.remove( "active" );
//     } );
//     button.classList.add( "active" );
//   };
//
//   var showOuput = function( clicked, selector ) {
//
//     var coderunner = clicked.closest("coderunner");
//
//     coderunner.querySelector("output rendered")._hide();
//     coderunner.querySelector("resizeButton")._hide();
//     coderunner.querySelector("output initialhtmlcode")._hide();
//     coderunner.querySelector("output currenthtmlcode")._hide();
//     coderunner.querySelector("output cellobject")._hide();
//
//     coderunner.querySelector( selector )._show();
//
//   };
//
//   var launchFullscreen = function( clicked ) {
//     var coderunner = clicked.closest("coderunner");
//     var headHtml = coderunner.querySelector("output iframe").contentDocument.head.innerHTML;
//     var html =
// `<!DOCTYPE html>
// <html lang="en">
// <head>
// ${headHtml}
// </head>
// <body></body>
// </html>`;
//     x.lib.open( { html: html } );
//   };
//
//   var close = function( clicked ) {
//     var coderunner = clicked.closest("coderunner");
//     coderunner.querySelector("output")._hide();
//     coderunner.querySelector("outputbuttons")._hide();
//     coderunner.querySelector("resizeButton")._hide();
//   };
//
//   return a.coderunner( [
//     x.form( (f) => f.field( { name: "code", type: "codemirror", label: false, value: code, codemirror: { mode: "javascript" } } ), { formTag: { onsubmit: () => false } } ),
//     a.p( [
//       a.runbutton(
//         app.appbtn( "Run", function () { app.coderunnerRun( this ); }, { icon: "fa fa-play", buttonTag: { title: "Run code and show output" } } )
//       ),
//       a.outputbuttons( [
//         app.appbtn( null, function(e) {
//           activateOuputButton( this );
//           showOuput( this, "output rendered" );
//         }, { icon: "fa fa-tv", buttonTag: { class: "active", title: "Rendered output" } } ),
//         app.appbtn( null, function(e) {
//           activateOuputButton( this );
//           showOuput( this, "output initialhtmlcode" );
//         }, { icon: "fa fa-flag-o", buttonTag: { title: "Output HTML" } } ),
//         app.appbtn( null, function(e) {
//           activateOuputButton( this );
//           showOuput( this, "output currenthtmlcode" );
//           this._outputHtmlCode( "current" );
//         }, { icon: "fa fa-flag-checkered", buttonTag: { title: "Current HTML" } } ),
//         app.appbtn( "ᴥ", function(e) {
//           activateOuputButton( this );
//           showOuput( this, "output cellobject" );
//         }, { buttonTag: { title: "Cell object", style: "line-height: 25px;" } } ),
//         app.appbtn( null, function() {
//           launchFullscreen( this );
//         }, { icon: "fa fa-external-link", buttonTag: { title: "Run in window" } } ),
//         app.appbtn( null, function() {
//           close( this );
//         }, { icon: "fa fa-times", buttonTag: { title: "Close" } } ),
//       ],
//       Object.assign( {}, displayMethods, { style: "display: none; float: right;" } )
//     ),
//   ] ),
//   a.output( [
//     a.rendered(
//       a.iframe(),
//       Object.assign(
//         {}, displayMethods, { style: "", $init: function() {} }
//       ) // merge empty $init function so that html output is shown by default
//     ),
//     // () => { debugger },
//     a.initialhtmlcode(
//       x.code( null, { mode: "text/html" } ),
//       Object.assign( {}, displayMethods )
//     ),
//     // () => { debugger },
//     a.currenthtmlcode(
//       x.code( null, { mode: "text/html" } ),
//       Object.assign( {}, displayMethods )
//     ),
//     // () => { debugger },
//     a.cellobject(
//       [ x.code( null, { mode: "javascript" } ) ],
//       Object.assign( {}, displayMethods )
//     ),
//   ], Object.assign( {}, displayMethods ) ),
//   a.resizeButton(
//     app.appbtn( "Fit", function(e) {
//       var coderunner = this.closest("coderunner");
//       this._resizeIframe( coderunner );
//
//       var rect = this.getBoundingClientRect();
//       var elemTop = rect.top;
//       var elemBottom = rect.bottom;
//       var notVisible = (elemTop < 0) || (elemBottom > window.innerHeight);
//       if ( notVisible ) { this.scrollIntoView(false); };
//
//     }, { icon: "fa fa-arrows-v", buttonTag: { title: "Fit" } } ),
//     Object.assign( {}, displayMethods )
//   ),
// ], {
//   _resizeIframe: function( coderunner ) {
//     var iframe = coderunner.querySelector("output iframe");
//     iframe.style.height = "";
//     iframe.style.height = iframe.contentDocument.body.scrollHeight + 100 + 'px';
//   },
//   _complete: app.coderunnerRunComplete,
//   _outputCellObject: app.coderunnerRunCompleteOutputCellObject,
//   // _outputHtmlCode: app.coderunnerRunCompleteOutputHtmlCode,
//   _outputHtmlCode: function( target ) { app.coderunnerRunCompleteOutputHtmlCode( this, target ) },
//   _cellJson: app.coderunnerRunCompleteCellJson
//  } );
// };
