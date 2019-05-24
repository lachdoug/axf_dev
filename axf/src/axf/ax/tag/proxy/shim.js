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
    // ax.log( property )
    if ( property === '$$' ) {
 // debugger
      return ax.tag.collection.proxy()

    } else {

      return function ( component=null, attributes={} ) {
        component = ax.tag.proxy.shim.component( component )
        attributes = ax.tag.proxy.shim.attributes( property, attributes )
        return ax.factory.object( { ...component, ...attributes } )
      }

    }
  }
}

// ax.tag.collection = {}
//
//
//
// ax.tag.collection.function = () => {}
//
// ax.tag.collection.shim = {
//  get: ( target, property ) => {
//   //  ax.log( property )
//
//    return function( ...components ) {
// // debugger
//      return components.map( function( component ) {
//        return ax.a[ property ]( component )
//      } )
//    }
//
//
//
//     //  return function ( component, attributes={} ) {
//     //    component = ax.tag.proxy.shim.component( component )
//     //    attributes = ax.tag.proxy.shim.attributes( property, attributes )
//     //    return ax.factory.object( { ...component, ...attributes } )
//     //  }
//
//  }
// }
//
// ax.tag.collection.proxy = () => new Proxy( ax.tag.collection.function, ax.tag.collection.shim )
