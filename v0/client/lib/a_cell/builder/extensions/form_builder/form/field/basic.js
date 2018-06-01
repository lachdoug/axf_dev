AcellBuilderExtensionsFormBuilder.prototype.basic = function(
  fieldName,
  primaryTypeKey,
  secondaryTypeKey,
  options
) {

  // var collectionAsArrayOfArrays = function () {
	// 	var result = [];
	// 	var collection = options.collection;
	// 	if ( collection instanceof Array) {
	// 		result = collection;
	// 	} else {
	// 		var collectionKeys = Object.keys( collection );
	// 	  var collectionValues = Object.values( collection );
	// 	  for (var i = 0; i < collectionKeys.length; i++) {
	// 	    result.push( [ collectionKeys[i], collectionValues[i] ] )
	// 	  }
	// 	};
  //   // debugger;
	// 	return result.map( function ( collectionOption ) {
	// 		return collectionOptionAsArray( collectionOption );
	// 	} );
	// };
  //
	// var collectionOptionAsArray = function ( collectionOption ) {
	// 	if ( collectionOption instanceof Array) {
	// 		return collectionOption;
	// 	} else if ( typeof collectionOption === "string" ) {
	// 		return [ collectionOption, collectionOption ];
	// 	} else {
	// 		var key = Object.keys( collectionOption )[0];
	// 		return [ key, collectionOption[key] ];
	// 	};
	// };

  // // Make field-specific customisations
  // if ( primaryTypeKey === "input" ) {
  // // } else if ( primaryTypeKey === "select" ) {
  // //   if ( options.collection ) {
  // //     // debugger;
  // //     options.collection = collectionAsArrayOfArrays();
  // //   };
  // };

  if ( primaryTypeKey === undefined ) {
    [ primaryTypeKey, secondaryTypeKey ] = [ "input", "text" ];
  } else if ( secondaryTypeKey === undefined ) {
    if ( primaryTypeKey === "input" ) {
      secondaryTypeKey = "text";
    } else if ( primaryTypeKey !== "textarea" && primaryTypeKey !== "select" ) {
      [ primaryTypeKey, secondaryTypeKey ] = [ "input", primaryTypeKey ];
    };
  };

  if ( primaryTypeKey === "input" ) {
    return this.input( fieldName, secondaryTypeKey, options );
  } else {
    return this[primaryTypeKey]( fieldName, options );
  };

};
