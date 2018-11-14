App.prototype.coderunnerRunCompleteCellJson = function( objects ) {

// function appHelperCodeGuideRunCompleteCellJson( objects ) {

  var result;

  if ( objects instanceof Array ) {
    result = objects.map(
      function( object ) {
        return appHelperCodeGuideRunCompleteCellJsonDummySerializeFunctions( object )
      }
    )
  } else {
    result = appHelperCodeGuideRunCompleteCellJsonDummySerializeFunctions( objects )
  };

  return JSON.stringify( result, null, 2 );
};

function appHelperCodeGuideRunCompleteCellJsonDoValue( value ) {
  if ( value instanceof Array ) {
    return value.map( function( item ) {
      return appHelperCodeGuideRunCompleteCellJsonDoValue( item );
    } );
  } else if ( typeof value === "object" ) {
    return appHelperCodeGuideRunCompleteCellJsonDummySerializeFunctions( value );
  } else if ( typeof value === "function" ) {
    return ( 'ƒ ' + value ).replace(/\s+/g, ' ');
  } else {
    return value;
  };
}

function appHelperCodeGuideRunCompleteCellJsonDummySerializeFunctions( object ) {
  var result = {};
  // delete object.$;  // Don't show the $ helper
  for ( key in object ) {
    var value = object[key]
    result[key] = appHelperCodeGuideRunCompleteCellJsonDoValue( value );
  };
  return result;
};
