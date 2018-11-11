ax.cell.pipeline.push( function( cell ) {

  // The 'multiple' attribute needs to be the first property of the Cell gene object.
  // This fix is needed so that dropdown menu on <select multiple: true> works.
  // see https://github.com/intercellular/cell/issues/176

  if ( cell.multiple ) {
    let multiple = cell.multiple
    delete cell.multiple
    cell = Object.assign( { multiple: multiple }, cell )
  }

  return cell

} )
