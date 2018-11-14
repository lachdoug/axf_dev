App.prototype.guideShow = function() {

  var a = this.a;
  var x = this.x;
  var app = this;

  return ( params, controller ) => {

    var guide = this.guide(); // .all;



    // var id;
    var guide;

    if ( params.id ) {
      guide = guide.find( params.id );
    } else {
      guide = guide.findByName( params.name );
    };

    if ( guide ) {
      var nextGuide = guide.next();

      // if ( nextGuide ) {
      //   var nextGuide = guide[id];
      //   var nextGuideLabel = nextGuide[0] + nextGuide.slice(1).replace( /([A-Z])/g, " $1" ).toLowerCase();
      // };
      // var functionName = "appGuideShow" + guide;
// debugger;

      return [
        a.p( [
          guide.id > 1 ?
            app.appbtn(
              null,
              () => controller.$open( "/guide/" + ( guide.id - 1 ) ),
              { icon: "fa fa-arrow-left", buttonTag: { style: "float: left;" } }
            ) : null,
          nextGuide ?
            app.appbtn(
              nextGuide.label, 
              () => controller.$open( "/guide/" + ( guide.id + 1 ) ),
              { icon: "fa fa-arrow-right", iconReverse: true, buttonTag: { style: "float: right;" } }
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
