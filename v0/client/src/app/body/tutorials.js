App.prototype.tutorials = function() {

  var a = this.a;
  var x = this.x;

  return {
    names: [
      "Introduction",
      "Arguments",
      "FunctionComponents",
      "TagBuilder",
      "StringAsArgument",
      "ArrayAsArgument",
      "TagOptions",
      "CellAttributes",
      "MarkdownExtension",
      "ChartExtension",
      "AccessingExtensions",
      "ChangingCells",
      "CellData",
      "CellMethods",
      "GetD^o^m^Nodes"
    ],
    all: function() {
      return this.names.map( function( name ) {
        var id = this.indexFor( name );
        return this.tutorialFor( id, name );
      }.bind(this) );
    },
    tutorialFor: function( id, name ) {
      var tutorials = this;
      var id = Number( id );
      var labelFor = function() {
        var parts = ( name[0] + name.slice(1).replace( /([A-Z])/g, " $1" ).toLowerCase() ).split("^")
        var last = parts.length - 1;
        return parts.map( function( part, i ) { return i < last ? part.slice(0,-1) + part.slice(-1).toUpperCase() :part } ).join("");
      };
      return {
        name: name,
        label: labelFor( name ),
        id: Number( id ),
        functionName: "tutorialsShow" + name.replace(/\^/g,""),
        next: function() {
          var nextTutorial = tutorials.find( id + 1);
          return nextTutorial;
        },
      };
    },
    indexFor: function( name ) {
      return this.names.findIndex( function( item ) { return item === name; } ) + 1
    },
    find: function(id){
      var id = Number( id );
      var name = this.names[ id - 1 ];
      return name ? this.tutorialFor( id, name ) : null;
    },
    findByName: function( name ) {
      return this.find( this.indexFor( name ) );
    }
  };

};

//
// var labelFromName = function ( name ) {
//   return name[0] + name.slice(1).replace( /([A-Z])/g, " $1" ).toLowerCase();
// };
