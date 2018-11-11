ax.extension.appkit.lib.form.collection.from = function( collection ) {

  if ( !collection ) {
    return []
  } else if ( collection instanceof Array ) {
    return collection.map( function(item) {
      if ( item instanceof Array ) {
        return { value: item[0], label: item[1] }
      } else if ( typeof item === "object" ) {
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
