ax.cell.pipeline.push( function( cell ) {

  // The 'multiple' attribute to be the first property of the Cell object.
  // This fix is needed so that dropdown menu on <select multiple: true> works.
  // Nasty hack!

  if ( cell.multiple ) {
    let multiple = cell.multiple
    delete cell.multiple
    cell = Object.assign( { multiple: multiple }, cell )
  }

  return cell

} )
