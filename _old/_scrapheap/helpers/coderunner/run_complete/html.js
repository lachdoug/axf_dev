// coderunner.complete.html = function ( coderunner, target ) {
//
// //   var a = coderunner.a;
// //   var x = coderunner.x;
// //
// // function appHelperCodeGuidecomplete.output.html( coderunner ) {
// // debugger;
//   var codemirror = coderunner.querySelector("output " + target + "htmlcode codemirror").$codemirror;
//   // var htmlcodeTarget = coderunner.querySelector("output " + target + "htmlcode textarea");
//   var iframe = coderunner.querySelector("output rendered iframe");
//   var iframeWindow = iframe.contentWindow;
//   var sourceCells = iframe.contentDocument.body.children;
//   var styleCell = iframe.contentDocument.body.firstChild;
//   var callbackCell = iframe.contentDocument.body.lastChild;
//   var htmlcodeSnips = [];
//
//   // Check to see if more than one ax() function called.
//   // Test is > 2 because callback cell also present.
//   if ( sourceCells.length > 2 ) {
//     for ( var sourceCell of sourceCells ) {
//       if ( sourceCell.id === "axCoderunnerComplete" ) { break; };
//       htmlcodeSnips.push( sourceCell.outerHTML );
//     };
//   } else {
//     var sourceCell = sourceCells[0];
//     htmlcodeSnips.push( sourceCell.outerHTML );
//   };
//
//   var htmlcode = html_beautify( htmlcodeSnips.join("\n"), { unformatted: [] } );
//
//   codemirror.getDoc().setValue( htmlcode );
//   codemirror.setSize( "100%", "100%" );
//   codemirror.refresh();
//
// };
