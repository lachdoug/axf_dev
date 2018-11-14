App.prototype.coderunnerRun = function( runCodeButton ) {

  // var a = this.a;
  // var x = this.x;

  // var newWindow = window.open();

  var coderunner = runCodeButton.closest("coderunner");
  var selectRenderedButton = coderunner.querySelectorAll("outputbuttons button")[0];
  var code = coderunner.querySelector("textarea").$codemirror.getValue();
  var iframe = coderunner.querySelector("iframe");

  selectRenderedButton.click(); // Show the rendered output.

  var iframeDocument = iframe.contentDocument;
  iframeDocument.write(
`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Ax Run</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="favicon.png" type="image/png">


  <link rel="stylesheet" href="/vendor/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="/vendor/text-security-0.0.0/dist/text-security.css">

  <script src="/vendor/celljs-0.0.0.js"></script>
  <script src="/vendor/marked-0.3.6.min.js"></script>
  <script src="/vendor/sketchjs-0.0.0.js"></script>
  <script src="/vendor/chartjs-2.7.2.bundle.min.js"></script>

  <script type="application/javascript" src="/axf.js" ></script>
  <script type="application/javascript" src="/plugins.js" ></script>

  <script>${code}</script>

  <script>
    ax(
      null,
      {
        tag: {
          $init: function() {
            var iframeWindow = this.ownerDocument.defaultView;
            if ( iframeWindow.frameElement ) {
              iframeWindow.frameElement.closest("coderunner")._complete( iframeWindow );
            };
          },
          id: "axCoderunnerComplete"
        }
      }
    );
  </script>

</head>

<body>

</body>
</html>`

// <link rel="stylesheet" href="/vendor/bootstrap-4.1.0-dist/css/bootstrap.min.css">
// <link rel="stylesheet" href="/vendor/codemirror-5.28.0/codemirror.css">
// <link rel="stylesheet" href="/vendor/codemirror-5.28.0/theme/neo.css">
// <link rel="stylesheet" href="/vendor/simplemde-1.11.2/simplemde.min.css">
// <script src="/vendor/codemirror-5.28.0/codemirror.min.js"></script>
// <script src="/vendor/codemirror-5.28.0/mode/shell/shell.js"></script>
// <script src="/vendor/codemirror-5.28.0/mode/javascript/javascript.js"></script>
// <script src="/vendor/codemirror-5.28.0/mode/ruby/ruby.js"></script>
// <script src="/vendor/simplemde-1.11.2/simplemde.min.js"></script>
// <script type="application/javascript" src="/axf/themes/bootstrap.js" ></script>



  );
  iframeDocument.close();
  iframe.closest("output").style.display = "block";
  runCodeButton.scrollIntoView();
};
