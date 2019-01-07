ax.factory.text = function ( component ) {

  if ( component === undefined ) {
    component = ''
  } else {
    component = ' ' + component + ' '
  }

  return document.createTextNode( component )

}
