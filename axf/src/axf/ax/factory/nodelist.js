ax.factory.nodelist = function ( component ) {
  return this( { $nodes: Array.from( component ) } )
}
