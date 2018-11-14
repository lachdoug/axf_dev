ax.cell.process = function ( cell ) {

  let base = { $type: 'span' };

  cell = Object.assign(
    base,
    ax.cell.base,
    cell
  );

  this.pipeline.forEach( function( pipelineFunction ) {
    cell = pipelineFunction( cell )
  } );

  return cell

};
