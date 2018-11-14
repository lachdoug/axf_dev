ax.factory.literal = function ( component, attributes ) {

  return ax.cell.process( Object.assign( {
    $text: component,
  }, attributes ) );

};
