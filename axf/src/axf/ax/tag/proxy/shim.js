/**
 * Tag Generator proxy shim.
 * Creates arbitrary View Objects.
 * Intercepts get methods and returns a function that,
 * when called, returns a View Object with
 * the $tag property set to the method name for the get.
 *
 * @since 0.0.0
 * @namespace ax.tag.proxy
 *
 */
 ax.tag.proxy.shim = {
  get: ( target, property ) => {

//     if ( property === '$' ) {
          // a.$ doesn't do anything.
//     } else

    if ( property === '$$' ) {

      // The collection proxy is for building multiple tags
      // with syntax like: a.$$.p( "Cats", "Dogs" )
      return ax.tag.collection.proxy()

    } else {

      return function ( component=null, attributes={} ) {

        component = ax.tag.proxy.shim.component( component )
        attributes = ax.tag.proxy.shim.attributes( property, attributes )
        return ax.factory.element( { ...component, ...attributes } )
      }

    }
  }
}
