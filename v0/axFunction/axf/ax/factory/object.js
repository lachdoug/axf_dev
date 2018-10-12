ax.factory.object = function ( components, attributes ) {

  if ( !components ) return ax.cell.process( attributes );
  if ( attributes ) return ax.cell.process(
    Object.assign( { $components: [ components ] }, attributes ) 
  );
  return ax.cell.process( components );

};
