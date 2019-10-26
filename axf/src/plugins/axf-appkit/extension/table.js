ax.extension.table = function ( contents, options={} ) {

  // let a = ax.a
  // let x. = ax.x

  // let table = this

  let component = []

  let trTag = function( i, row ) {
    if ( ax.is.function( options.trTag ) ) {
      return options.trTag( i, row )
    } else {
      return options.trTag
    }
  }

  let thTag = function( i, j, content ) {
    if ( ax.is.function( options.thTag ) ) {
      return options.thTag( i, j, content )
    } else {
      return options.thTag
    }
  }

  let tdTag = function( i, j, content ) {
    if ( ax.is.function( options.tdTag ) ) {
      return options.tdTag( i, j, content )
    } else {
      return options.tdTag
    }
  }

  let headers
  if ( options.headers == false ) {
    headers = { rows: [], cols: [] }
  } else if ( options.headers == true || !options.headers ) {
    headers = { rows: [ 0 ], cols: [] }
  } else {
    headers = {
      rows: options.headers.rows || [],
      cols: options.headers.cols || []
    }
  }

  let tableCellFor = function( i, j, content ) {
    if ( headers.rows.includes( i ) ) {
      let attributes = {
        scope: col,
        ...thTag( i, j, content )
      }
      return ax.a.th( content, attributes )
    } else if ( headers.cols.includes( j ) ) {
      let attributes = {
        scope: row,
        ...thTag( i, j, content )
      }
      return ax.a.th( content, attributes )
    } else {
      return ax.a.td( content, tdTag( i, j, content ) )
    }
  }

  contents.map( function( row, i ) {
    component.push(
      ax.a.tr(
        row.map( function( content, j) {
          return tableCellFor( i, j, content )
        } ),
        trTag( i, row ) )
    )
  } )

  // let tableTag = options.tableTag

  return ax.a.table( component, options.tableTag )

}
