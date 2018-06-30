// App.prototype.headerNav = function() {
//
//   var a = this.a;
//   var x = this.x;
//
//   var open = function( button, path ) {
//     button.closest("header").querySelector("controller").open( button.$path );
//   };
//
//   return a.nav(
//     [
//       a.brand(
//         appbtn( [
//           a.axtext( "Ax" ),
//           a.span( [
//             a.img( null, { src: "/ax_logo.png", height: 30 } ),
//             a.br(),
//             a.subtext( "Framework" ),
//           ], { style: "display: inline-block"} ),
//         ],
//         function() { open( this, "/" ) },
//         {
//           attributes: {
//             $path: "/"
//           }
//         }
//       )
//       ),
//       // a.hr(),
//       appbtn(
//         "Get Ax", function() { open( this ); },
//         {
//           attributes: {
//             $path: "/get_ax"
//           },
//           fa: "download"
//         }
//       ),
//       appbtn(
//         "Guides", function() { open( this ) },
//         {
//           attributes: {
//             $path: "/guides"
//           },
//           fa: "keyboard-o"
//         }
//       ),
//       a.indicator()
//     ]
//   );
//
// };
