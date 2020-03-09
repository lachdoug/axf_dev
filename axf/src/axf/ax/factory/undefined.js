ax.factory.undefined = function () {

  return this.element( {
    $text: 'UNDEFINED',
    $init: el => console.error( 'Component is undefined:', el )
  } )

}
