ax.factory.literal = function ( components, attributes ) {

  return ax.cell.process( Object.assign( {
    $text: components,
  }, attributes ) );

};
