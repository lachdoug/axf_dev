ax.cell.process = function ( cell ) {

  let base = { $type: 'span' };

  cell = Object.assign(
    base,
    ax.cell.base,
    cell
  );
  // if ( cell.$type === "selectinput" ) debugger
  // console.log( cell.$type )

  this.pipeline.forEach( function( pipelineFunction ) {
    cell = pipelineFunction( cell )
  } );

  return cell

};
