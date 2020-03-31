cc.dialogue.builder.output = ( output, params ) => {

  let x = ax.x

  let value

  if ( output.get ) {
    let keys = output.get.split( '.' )
    value = x.lib.object.dig( params, keys )
  } else {
    value = params
  }

  return x.output( value )

}
