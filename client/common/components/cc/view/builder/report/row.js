cc.view.builder.report.row = ( r, componentSpec, params ) => {

  let a = ax.a
  let x = ax.x

  if ( componentSpec.columns ) {
    let columnsSpec = componentSpec.columns || []
    let result = []
    for ( let i in columnsSpec ) {
      result.push( cc.view.builder.report.component( r, columnsSpec[i] ) )
    }
    componentSpec.columns = result
  }

  return r.row( componentSpec )

}
