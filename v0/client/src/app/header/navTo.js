// App.prototype.headerNavTo = function( params, controller ) {
//
//   // var a = this.a;
//   // var x = this.x;
//
//   // return function( params, controller ) {
//
//     var active = params.path.split("/")[1];
//     var activeCss = "border-bottom: 2px solid #bbb";
//
//     var nav = controller.closest("header").querySelector("nav");
//     var buttons = nav.querySelectorAll("button");
//
//     var indicator = nav.querySelector("indicator")
//
//     var activeButton;
//
//     for ( var i in buttons ) {
//       if ( buttons[i].$path === params.path ) {
//         activeButton = buttons[i];
//         break;
//       }
//     };
//
//
//     debugger
//
//
//
//   //   return a.nav(
//   //     [
//   //       a.brand(
//   //         appbtn( [
//   //           a.axtext( "Ax" ),
//   //           a.span( [
//   //             a.img( null, { src: "/ax_logo.png", height: 30 } ),
//   //             a.br(),
//   //             a.subtext( "Framework" ),
//   //           ], { style: "display: inline-block"} ),
//   //         ],
//   //         () => { controller.open( "/" ) },
//   //         {
//   //           attributes: {
//   //             style: active === "" ? activeCss : ""
//   //           }
//   //         }
//   //       )
//   //       ),
//   //       // a.hr(),
//   //       appbtn(
//   //         "Get Ax", function(e) { controller._open("/get_ax"); },
//   //         {
//   //           attributes: {
//   //             style: active === "get_ax" ? activeCss : ""
//   //           },
//   //           fa: "download"
//   //         }
//   //       ),
//   //       appbtn(
//   //         "Guides", () => controller._open( "/guides" ),
//   //         {
//   //           attributes: {
//   //             style: active === "guides" ? activeCss : ""
//   //           },
//   //           fa: "keyboard-o"
//   //         }
//   //       ),
//   //     ]
//   //   );
//
//
//   // }
//
// };
