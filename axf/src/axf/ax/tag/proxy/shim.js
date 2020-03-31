/**
 * Tag Generator proxy shim.
 * Creates arbitrary HTML elements.
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

      return ( component=null, attributes={} ) => ax.factory.element( {
        ...ax.tag.proxy.shim.component( component ),
        ...ax.tag.proxy.shim.attributes( property, attributes )
      } )

    }
  }
}
