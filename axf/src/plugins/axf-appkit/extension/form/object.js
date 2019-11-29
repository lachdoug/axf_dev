ax.extension.form.object = function( data ) {

  let x = ax.x

  let result = {}

  for( let entry of data.entries() ) {
    let name = entry[0]
    let value = entry[1]
    let keys = x.lib.name.dismantle( name )
    x.lib.object.assign( result, keys, value )
  }

 return result

}
