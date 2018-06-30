App.prototype.headerNav = function() {

  var a = this.a;
  var x = this.x;
  var app = this;

  return function( params, controller ) {

    var active = params.path.split("/")[1];
    var activeCss = "border-bottom: 2px solid #bbb";

    return a.nav(
      [
        a.brand(
          app.appbtn( [
            a.axtext( "Ax" ),
            a.span( [
              a.img( null, { src: "/ax_logo.png", height: 30 } ),
              a.br(),
              a.subtext( "Framework" ),
            ], { style: "display: inline-block"} ),
          ],
          () => { controller.open( "/" ) },
          {
            attributes: {
              style: active === "" ? activeCss : ""
            }
          }
        )
        ),
        // a.hr(),
        app.appbtn(
          "Get Ax", function(e) { controller._open("/get_ax"); },
          {
            attributes: {
              style: active === "get_ax" ? activeCss : ""
            },
            fa: "download"
          }
        ),
        app.appbtn(
          "Guides", () => controller._open( "/guides" ),
          {
            attributes: {
              style: active === "guides" ? activeCss : ""
            },
            fa: "keyboard-o"
          }
        ),
      ]
    );
  }

};
