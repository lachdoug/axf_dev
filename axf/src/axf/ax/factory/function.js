ax.factory.function = function ( component ) {

  const a = ax.a
  const x = ax.x

  return this( component( a,x ) )

}
