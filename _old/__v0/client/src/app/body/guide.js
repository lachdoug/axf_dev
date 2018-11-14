App.prototype.guide = function() {

  var a = this.a;
  var x = this.x;

  return {
    labels: [

      "Introduction",
      "Arguments",
      "Components",
      "Function components",
      "Tag builder",
      "String as argument",
      "Array as argument",
      "Tag options",
      "Cell attributes",
      "Output",
      "Changing cells",
      "Cell data",
      "Cell methods",
      "Get DOM nodes",

      "Accessing extensions",
      "Markdown extension",
      "Chart extension",
      "Table extension",
      "Tabulate extension",
      "Sketch.js",

      "Forms: Tag builder form",
      "Forms: Form builder extension",
      "Forms: Form builder field",
      "Forms: Form builder fields",
      "Forms: Field types",

      "Fetch data",

      "Edit resource",
      "Report extension",
      "Index resource",

    ],
    all: function() {
      return this.labels.map( function( label ) {
        var id = this.indexFor( label );
        return this.guideFor( id, label );
      }.bind(this) );
    },
    guideFor: function( id, label ) {
      var guide = this;
      var id = Number( id );
      var functionName = "guideShow" + label.replace( /\:/g, "").replace( /\./g, "").split(" ").map( function( word ){ return x.lib.capitalize( word ) } ).join("")
      return {
        // name: name,
        label: label,
        id: id,
        functionName: functionName,
        next: function() {
          var nextGuide = guide.find( id + 1 );
          return nextGuide;
        },
      };
    },
    indexFor: function( label ) {
      return this.labels.findIndex( function( item ) { return item === label; } ) + 1
    },
    find: function(id){
      var id = Number( id );
      var label = this.labels[ id - 1 ];
      return label ? this.guideFor( id, label ) : null;
    },
    // findByName: function( label ) {
    //   return this.find( this.indexFor( label ) );
    // }
  };

};

//
// var labelFromName = function ( name ) {
//   return name[0] + name.slice(1).replace( /([A-Z])/g, " $1" ).toLowerCase();
// };
