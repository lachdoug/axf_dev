ax.factory.function = function ( component ) {

  const a = ax.a
  const x = ax.x

  // The factory checks functions for an $object property.
  // If it finds one, the factory will use its value
  // as the component.
  // For example, the component a['div'] will render an empty <div>.
  // This is so that the tag builder
  // can return uncalled functions and the factory can
  // do something sensible with them. Otherwise such components
  // would be called with (a,x) arguments, which would be wrong.

  if ( ax.type.is.class( component ) ) {
    component = new component( a,x )
  } else if ( ax.type.is.tag( component ) ) {
    component = component()
  } else {
    component = component( a,x )
  }

  return this( component )

}
