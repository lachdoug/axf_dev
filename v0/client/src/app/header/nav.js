App.prototype.header.nav = function( app ) {

  var a = app.a;
  var x = app.x;
  // var app = this;

  return function( params, controller ) {
// debugger
    var active = params.path.split("/")[1];
    var activeCss = "border-bottom: 2px solid #bbb";

    return a.nav(
      [
        a.brand(
          app.appbtn( [
            a.axtext( "ax" ),
            a.span( [
              a.img( null, { src: "/ax_logo.png", width: 70, height: 30 } ),
              a.br(),
              a.subtext( "function" ),
            ], { style: "display: inline-block"} ),
          ],
          () => { controller.$open( "/" ) },
          {
            buttonTag: {
              style: active === "" ? activeCss : ""
            }
          }
        )
        ),
        // a.hr(),
        app.appbtn(
          "Get", function(e) { controller.$open("/get_ax"); },
          {
            buttonTag: {
              style: active === "get_ax" ? activeCss : ""
            },
            icon: "fa fa-download"
          }
        ),
        app.appbtn(
          "Guide", () => controller.$open( "/guide" ),
          {
            buttonTag: {
              style: active === "guide" ? activeCss : ""
            },
            icon: "fa fa-graduation-cap"
          }
        ),
        inDevelopment ? app.appbtn(
          "Dev", () => controller.$open( "/dev" ),
          {
            buttonTag: {
              style: active === "dev" ? activeCss : ""
            },
            icon: "fa fa-keyboard-o"
          }
        ) : {},

      ]
    );
  }

};
