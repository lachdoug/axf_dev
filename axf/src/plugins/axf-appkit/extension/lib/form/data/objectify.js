ax.extension.lib.form.data.objectify = function( data ) {

  let object = {}
  let lib = ax.extension.lib

  for (var pair of data.entries() ) {
    lib.object.assign( object, lib.name.dismantle( pair[0] ), pair[1] )
  }

  return object

}
