cc.control.builder.form.row = ( f, componentSpec, params ) => {

  let a = ax.a
  let x = ax.x

  if ( componentSpec.columns ) {
    let columnsSpec = componentSpec.columns || []
    let result = []
    for ( let i in columnsSpec ) {
      result.push( cc.control.builder.form.component( f, columnsSpec[i] ) )
    }
    componentSpec.columns = result
  }

  return f.row( componentSpec )

}
