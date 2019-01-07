ax.factory.array = function ( component ) {
  return this( { $tag: "div", $nodes: component } )
}
