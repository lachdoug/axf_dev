ax.extension.form.object = function( data ) {

  let x = ax.x

  let result = {}

  for( let entry of data.entries() ) {
    let name = entry[0]
    let value = entry[1]
    let keys = x.lib.name.dismantle( name )
    // debugger
    x.lib.object.assign( result, keys, value )
    // console.log( name, value, keys, result )
  }

 return result

}
