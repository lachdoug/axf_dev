function appBody(a,x) {
  // debugger
  return x.router( {
      "/": appBodyRoot(a,x),
      "/get_ax": appGetAx(a,x),
    }, { bind: "controller" } );

};

function appBodyRoot(a,x) {
  return ( params, router ) => [
    a.p("Ax is a client-side javascript web application framework for building dynamic content and user interfaces."),
    a.p( [
      "Ax uses ",
      a.a( "Cell", { href: "https://github.com/intercellular/cell", target: "https://github.com/intercellular/cell"} ),
      ", which is an ingenious library for creating active document components. ",
      "Ax is essentially a set of helpers and builders that output javascript objects for Cell to map to a document."
    ] ),
    a.p( [
      x.btn( "Get Ax", function(e) { router._open("/get_ax"); }, { buttonTag: {}, fa: "download" } ),
    ] ),
    a.hr(),
    a.p( [
      "Start an instance of Ax by using the ax() function in a script on your page. ",
      "First, try passing a string as a parameter. Click run to see the result.",

    ] ),
    appCodeExample( a,x, `ax("Hello world");` ),
    a.p( x.btn( "Next", () => router._open( "/examples/1" ), { fa: "arrow-right" } ) )

  ]
}

function appCodeExample( a,x, code ) {
  return a.coderunner( [
    x.formBuilder.field("code", "code", { label: false, mode: "javascript", value: code } ),
    a.p( a.button(
      x.fa( "play", "Run" ),
      {
        type: "button",
        onclick: function () {
          appRunExampleCode( this );
        }
      }
    ) ),
    a.iframe(),
  ] );
};

function appRunExampleCode( runCodeButton ) {
  // var newWindow = window.open();

  var code = runCodeButton.closest("coderunner").querySelector("textarea")._codemirror.getValue();
  var iframe = runCodeButton.closest("coderunner").querySelector("iframe");
// debugger;
  var iframeDocument = iframe.contentWindow.document;
  iframeDocument.write(
`<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
  <title>Ax</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="favicon.png" type="image/png">

	<link rel="stylesheet" href="/vendor/font-awesome-4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="/vendor/codemirror-5.28.0/codemirror.css">
	<link rel="stylesheet" href="/vendor/codemirror-5.28.0/theme/neo.css">
	<link rel="stylesheet" href="/vendor/simplemde-1.11.2/simplemde.min.css">

	<script type="application/javascript" src="/vendor/celljs-0.0.0.js"></script>
	<script type="application/javascript" src="/vendor/codemirror-5.28.0/codemirror.min.js"></script>
	<script type="application/javascript" src="/vendor/codemirror-5.28.0/mode/shell/shell.js"></script>
	<script type="application/javascript" src="/vendor/codemirror-5.28.0/mode/javascript/javascript.js"></script>
	<script type="application/javascript" src="/vendor/codemirror-5.28.0/mode/ruby/ruby.js"></script>
	<script type="application/javascript" src="/vendor/simplemde-1.11.2/simplemde.min.js"></script>

  <script type="application/javascript" src="/ax.js" ></script>

</head>

<body>
  <script>${code}</script>
  <script>ax( null, { $init: function() { parent.appResizeAllCoderunnerIframes(); } } );</script>
</body>
</html>`
  );
  iframeDocument.close();
  iframe.style.display = "block";
};

function appResizeAllCoderunnerIframes() {
  document.querySelectorAll("coderunner iframe").forEach( function( iframe ) {
    // debugger;
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 50 + 'px';
  } );
}
