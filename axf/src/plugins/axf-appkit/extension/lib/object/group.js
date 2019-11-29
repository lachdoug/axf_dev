ax.extension.lib.object.group = function( collection, key ) {

  return collection.reduce(function(result, item) {

    ( result[ item[key] ] = result[ item[key] ] || [] ).push( item )

    return result

  }, {} )

}
