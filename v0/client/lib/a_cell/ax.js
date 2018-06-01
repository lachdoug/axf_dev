var ax = function( content, options = {} ) {

  // var id;
  var cellBuilder = new AcellBuilder();

  if ( content && typeof content === "object" ) {
    options.id = options.id || content.id || cellBuilder.randomId();
  } else {
    options.id =  options.id || cellBuilder.randomId();
  };

  var varName = "$" + options.id;
	window[varName] = cellBuilder.cell( content, options );

  return options.id;

};
