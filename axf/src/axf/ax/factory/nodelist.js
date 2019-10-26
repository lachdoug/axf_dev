ax.factory.nodelist = function ( component ) {

  return this.element( { $nodes: Array.from( component ) } )

}
