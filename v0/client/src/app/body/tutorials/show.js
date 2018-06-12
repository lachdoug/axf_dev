App.prototype.tutorialsShow = function() {

  var a = this.a;
  var x = this.x;

  return ( params, controller ) => {

    var tutorials = this.tutorials(); // .all;



    // var id;
    var tutorial;

    if ( params.id ) {
      tutorial = tutorials.find( params.id );
    } else {
      tutorial = tutorials.findByName( params.name );
    };

    if ( tutorial ) {
      var nextTutorial = tutorial.next();

      // if ( nextTutorial ) {
      //   var nextTutorial = tutorials[id];
      //   var nextTutorialLabel = nextTutorial[0] + nextTutorial.slice(1).replace( /([A-Z])/g, " $1" ).toLowerCase();
      // };
      // var functionName = "appTutorialsShow" + tutorial;
// debugger;

      return [
        a.p( [
          tutorial.id > 1 ?
            x.btn(
              null,
              () => controller._open( "/tutorials/" + ( tutorial.id - 1 ) ),
              { fa: "arrow-left", buttonAttributes: { style: "float: left;" } }
            ) : null,
          nextTutorial ?
            x.btn(
              nextTutorial.label,
              () => controller._open( "/tutorials/" + ( tutorial.id + 1 ) ),
              { fa: "arrow-right", faReverse: true, buttonAttributes: { style: "float: right;" } }
            ) : null,
        ], { style: "overflow-y: auto;"} ),
        a.h3( tutorial.id + ". " + tutorial.label ),
        this[tutorial.functionName] ?
          this[tutorial.functionName]( params, controller ) :
          "Tutorial does not exist." ,
      ];
    } else {
      return a.p("Tutorial not found.")
    };

  };
};
