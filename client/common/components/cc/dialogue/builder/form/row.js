cc.dialogue.builder.form.row = ( f, componentSpec, params ) => {

  let a = ax.a
  let x = ax.x

  let columns = []

  if ( componentSpec.columns ) {
    let columnsSpec = componentSpec.columns || []
    let result = []
    for ( let i in columnsSpec ) {
      result.push( cc.dialogue.builder.form.component( f, columnsSpec[i] ) )
    }
    columns = result
  }

  return f.row( {
    ...componentSpec,
    columns: columns,
  } )

}
