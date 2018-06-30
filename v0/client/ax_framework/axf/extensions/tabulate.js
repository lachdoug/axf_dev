AxFrameworkExtensions.prototype.tabulate = function ( data, properties, options={} ) {
	var a = this.a;
  var x = this;

  properties = properties || Object.keys( data );

  var head = properties.map( function( property ) { return x.lib.titleize( property ) } )

  var rows = data.map( function( row ) {
    result = [];
    properties.forEach( function( property ) {
      result.push( row[property] );
    } );
    return result;
  } );

  return x.table( rows, head, options.tableOptions );
};


AxFrameworkExtensions.prototype.table = function ( data, options={} ) {
	var a = this.a;
  var x = this;
  var components = [];

  var trAttributes = function( i ) {
    if ( typeof options.trAttributes === "function" ) {
      return options.trAttributes( i );
    } else {
      return options.trAttributes;
    }
  };

	var thAttributes = function( j ) {
    if ( typeof options.thAttributes === "function" ) {
      return options.thAttributes( j );
    } else {
      return options.thAttributes;
    }
  };

	var tdAttributes = function( j ) {
    if ( typeof options.tdAttributes === "function" ) {
      return options.tdAttributes( j );
    } else {
      return options.tdAttributes;
    }
  };

  var properties = options.properties || Object.keys( data[0] );
  var labels = options.labels || {};
  var head = properties.map( function( property ) { return labels[property] || x.lib.titleize( property ); } );

  components.push( a.tr( head.map( function( th, i ) { return a.th( th, thAttributes( i ) ); } ) ) );
  data.map( function( row, i ) {
    components.push(
      a.tr(
        row instanceof Array ?
          row.map( function(td, j) { return a.td(td, tdAttributes( j ) ); } ) :
          properties.map( function(property) { return a.td(row[property]); } ),
        trAttributes( row, i ) )
    )
  } );

  return a.table( components, options.tableAttributes );

};
