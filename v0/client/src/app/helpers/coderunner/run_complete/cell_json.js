App.prototype.coderunnerRunCompleteCellJson = function( objects ) {

// function appHelperCodeTutorialRunCompleteCellJson( objects ) {

  var result;

  if ( objects instanceof Array ) {
    result = objects.map(
      function( object ) {
        return appHelperCodeTutorialRunCompleteCellJsonDummySerializeFunctions( object )
      }
    )
  } else {
    result = appHelperCodeTutorialRunCompleteCellJsonDummySerializeFunctions( objects )
  };

  return JSON.stringify( result, null, 2 );
};

function appHelperCodeTutorialRunCompleteCellJsonDoValue( value ) {
  if ( value instanceof Array ) {
    return value.map( function( item ) {
      return appHelperCodeTutorialRunCompleteCellJsonDoValue( item );
    } );
  } else if ( typeof value === "object" ) {
    return appHelperCodeTutorialRunCompleteCellJsonDummySerializeFunctions( value );
  } else if ( typeof value === "function" ) {
    return 'ƒ ' + value;
  } else {
    return value;
  };
}

function appHelperCodeTutorialRunCompleteCellJsonDummySerializeFunctions( object ) {
  var result = {};
  for ( key in object ) {
    var value = object[key]
    result[key] = appHelperCodeTutorialRunCompleteCellJsonDoValue( value );
  };
  return result;
};
