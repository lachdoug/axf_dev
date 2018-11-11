ax.factory.function = function ( component ) {

  const a = ax.a
  const x = ax.x

  // The factory checks functions for an $object property.
  // If it finds one, the factory will use its value
  // as the component. This is so that the tag builder
  // can return uncalled functions and the factory can
  // do something sensible with them. Otherwise such components
  // would be called with (a,x) arguments, which would be wrong.
  // For example, the component a['div'] will render an empty <div>.

  if ( ( '' + component ).slice(0,5) === 'class' ) {
    component = new component( a,x )
  } else if ( ax.a.tagProxyFunction + '' === component + '' ) {
    component = component()
  } else {
    component = component( a,x )
  }

  return this( component )

}
