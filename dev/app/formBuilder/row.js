app.formBuilder.row = ( f, componentSpec, params ) => {

  let a = ax.a
  let x = ax.x

  if ( componentSpec.columns ) {
    let columnsSpec = componentSpec.columns || []
    let result = []
    for ( let i in columnsSpec ) {
      result.push( app.formBuilder.component( f, columnsSpec[i] ) )
    }
    componentSpec.columns = result
  }

  return f.row( componentSpec )

}
