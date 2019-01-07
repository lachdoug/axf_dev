ax.extension.appkit.lib.field.collection.from = function( collection ) {

  if ( !collection ) {
    return []
  } else if ( ax.type.is.array( collection ) ) {
    return collection.map( function(item) {
      if ( ax.type.is.array( item ) ) {
        return { value: item[0], label: item[1] }
      } else if ( ax.type.is.object( item ) ) {
        return item
      } else {
        return { value: item, label: ax.x.appkit.lib.text.labelize( item.toString() ) }
      }
    } )
  } else {
    return Object.keys( collection ).map(function( key ) {
      return { value: key , label: collection[key] }
    } )
  }

}
