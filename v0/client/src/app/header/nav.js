App.prototype.headerNav = function() {

  var a = this.a;
  var x = this.x;

  return function( params, controller ) {

    var section = params.path.split("/")[1];

    return a.nav(
      [
        a.brand(
          x.btn( [
            a.axtext( "Ax" ),
            a.span( [
              a.img( null, { src: "/ax_logo.png", height: 30 } ),
              a.br(),
              a.subtext( "Framework" ),
            ], { style: "display: inline-block"} ),
          ],
          () => { controller.open( "/" ) },
          {
            buttonAttributes: {
              style: section === "" ? "border-bottom: 2px solid #bbb" : ""
            }
          }
        )
        ),
        // a.hr(),
        x.btn(
          "Get Ax", function(e) { controller._open("/get_ax"); },
          {
            buttonAttributes: {
              style: section === "get_ax" ? "border-bottom: 2px solid #bbb" : ""
            },
            fa: "download"
          }
        ),
        x.btn(
          "Tutorials", () => controller._open( "/tutorials" ),
          {
            buttonAttributes: {
              style: section === "tutorials" ? "border-bottom: 2px solid #bbb" : ""
            },
            fa: "keyboard-o"
          }
        ),
      ]
    );
  }

};
