ax.factory.class = function ( component ) {

  const a = ax.a
  const x = ax.x

  return this.element( new component( a,x ) )

}
