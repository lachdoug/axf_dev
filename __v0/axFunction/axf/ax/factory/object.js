ax.factory.object = function ( component, attributes ) {

  if ( !component ) return ax.cell.process( attributes );
  if ( attributes ) return ax.cell.process(
    Object.assign( { $components: [ component ] }, attributes ) 
  );
  return ax.cell.process( component );

};
