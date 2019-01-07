ax.extension.appkit.lib.form.data.object = function( form ) {

  let lib = ax.extension.appkit.lib
  let result = {};
  let data = new FormData(form)

  for( let entry of data.entries() ) {
    let name = entry[0]
    let value = entry[1]
    let keys = lib.field.name.dismantle( name )
    lib.object.assign( result, keys, value )
  }

 return result

}
