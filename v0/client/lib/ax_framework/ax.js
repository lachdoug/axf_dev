var axUniqueId = 0;
var axNextUniqueId = function () {
  return "ax_" + ( axUniqueId += 1 );
};

var ax = function( content, attributes = {} ) {

  // var axFramework = new AxFramework();
  var cellBuilder = new AxCellBuilder;

  var randomId = function () {
    var random;
  	do { random = axNextUniqueId() }
    while ( window[ "$" + random ] !== undefined );
    return random;
  };

  attributes.id = attributes.id || randomId();

  var varName = "$" + attributes.id;

	window[varName] = Object.assign(
    { $cell: true },
    cellBuilder.tag( null, content, attributes )
  );

  return attributes.id;

};
