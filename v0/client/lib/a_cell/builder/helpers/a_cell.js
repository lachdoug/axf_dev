function aCell( geneContent, geneOptions ) {

  var id;

  if ( typeof geneContent === "object" ) {
    id = geneContent.id;
  } else {
    id = ( geneOptions || {} ).id;
  };

  var aCellBuilder = new ACellBuilder();
  var varName = 'aCell_' + ( id || randomId() );
	window[varName] = aCellBuilder.cellFor( geneContent, geneOptions );

  function randomId() {
    var random;
  	do {
  		random = Math.floor( Math.random() * 1e16 );
  	} while (
  		window[ 'aCell_' + random ] != undefined
  	);
  	return random;
  };



};
