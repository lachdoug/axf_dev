ax.extensions.table = function ( contents, options={} ) {

  let a = ax.a
  let x = ax.x

  let table = this

  let components = []

  let trTag = function( i, row ) {
    if ( typeof options.trTag === "function" ) {
      return options.trTag( i, row, table )
    } else {
      return options.trTag
    }
  }

  let thTag = function( i, j, content ) {
    if ( typeof options.thTag === "function" ) {
      return options.thTag( i, j, content, table )
    } else {
      return options.thTag
    }
  }

  let tdTag = function( i, j, content ) {
    if ( typeof options.tdTag === "function" ) {
      return options.tdTag( i, j, content, table )
    } else {
      return options.tdTag
    }
  }

  let headers
  if ( options.headers === false ) {
    headers = { rows: [], cols: [] }
  } else if ( options.headers === true || !options.headers ) {
    headers = { rows: [ 0 ], cols: [] }
  } else {
    headers = { rows: options.headers.rows || [], cols: options.headers.cols || [] }
  }

  let tableCellFor = function( i, j, content ) {
    if ( headers.rows.includes( i ) ) {
      let attributes = Object.assign(
        { scope: "col" },
        thTag( i, j, content )
      )
      return a.th( content, attributes )
    } else if ( headers.cols.includes( j ) ) {
      let attributes = Object.assign(
        { scope: "row" },
        thTag( i, j, content )
      )
      return a.th( content, attributes )
    } else {
      return a.td( content, tdTag( i, j, content ) )
    }
  }

  contents.map( function( row, i ) {
    components.push(
      a.tr(
        row.map( function( content, j) {
          return tableCellFor( i, j, content )
        } ),
        trTag( i, row ) )
    )
  } )

  // let tableTag = options.tableTag

  return a.table( components, options.tableTag )
}
