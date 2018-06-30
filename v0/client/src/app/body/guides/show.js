App.prototype.guidesShow = function() {

  var a = this.a;
  var x = this.x;
  var app = this;

  return ( params, controller ) => {

    var guides = this.guides(); // .all;



    // var id;
    var guide;

    if ( params.id ) {
      guide = guides.find( params.id );
    } else {
      guide = guides.findByName( params.name );
    };

    if ( guide ) {
      var nextGuide = guide.next();

      // if ( nextGuide ) {
      //   var nextGuide = guides[id];
      //   var nextGuideLabel = nextGuide[0] + nextGuide.slice(1).replace( /([A-Z])/g, " $1" ).toLowerCase();
      // };
      // var functionName = "appGuidesShow" + guide;
// debugger;

      return [
        a.p( [
          guide.id > 1 ?
            app.appbtn(
              null,
              () => controller._open( "/guides/" + ( guide.id - 1 ) ),
              { fa: "arrow-left", attributes: { style: "float: left;" } }
            ) : null,
          nextGuide ?
            app.appbtn(
              nextGuide.label,
              () => controller._open( "/guides/" + ( guide.id + 1 ) ),
              { fa: "arrow-right", faReverse: true, attributes: { style: "float: right;" } }
            ) : null,
        ], { style: "overflow-y: auto;"} ),
        a.h3( guide.id + ". " + guide.label ),
        this[guide.functionName] ?
          this[guide.functionName]( params, controller ) :
          "Guide does not exist." ,
      ];
    } else {
      return a.p("Guide not found.")
    };

  };
};
