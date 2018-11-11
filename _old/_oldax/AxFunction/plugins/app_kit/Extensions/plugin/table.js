AxFunction.Extensions.prototype.table = function ( contents, options={} ) {
  var a = this.a;
  var x = this;
  var components = [];

  var trAttributes = function( i, row ) {
    if ( typeof options.trAttributes === "function" ) {
      return options.trAttributes( i, row );
    } else {
      return options.trAttributes;
    }
  };

  var thAttributes = function( i, j, content ) {
    if ( typeof options.thAttributes === "function" ) {
      return options.thAttributes( i, j, content );
    } else {
      return options.thAttributes;
    }
  };

  var tdAttributes = function( i, j, content ) {
    if ( typeof options.tdAttributes === "function" ) {
      return options.tdAttributes( i, j, content );
    } else {
      return options.tdAttributes;
    }
  };

  var headers;
  if ( options.headers === false ) {
    headers = { rows: [], cols: [] };
  } else if ( options.headers === true || !options.headers ) {
    headers = { rows: [ 0 ], cols: [] };
  } else {
    headers = { rows: options.headers.rows || [], cols: options.headers.cols || [] };
  };

  var tableCellFor = function( i, j, content ) {
    if ( headers.rows.includes( i ) ) {
      var attributes = Object.assign(
        { scope: "col" },
        thAttributes( i, j, content )
      );
      return a.th( content, attributes );
    } else if ( headers.cols.includes( j ) ) {
      var attributes = Object.assign(
        { scope: "row" },
        thAttributes( i, j, content )
      );
      return a.th( content, attributes );
    } else {
      return a.td( content, tdAttributes( i, j, content ) )
    };
  };

  contents.map( function( row, i ) {
    components.push(
      a.tr(
        row.map( function( content, j) {
          return tableCellFor( i, j, content );
        } ),
        trAttributes( i, row ) )
    )
  } );

  // var tableAttributes = options.tableAttributes;

  return a.table( components, options.tableAttributes );
};
