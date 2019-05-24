ax.tag.collection.function = () => {}

ax.tag.collection.shim = {
 get: ( target, property ) => {
  //  ax.log( property )

   return function( ...components ) {
// debugger
     return components.map( function( component ) {
       return ax.a[ property ]( component )
     } )
   }



    //  return function ( component, attributes={} ) {
    //    component = ax.tag.proxy.shim.component( component )
    //    attributes = ax.tag.proxy.shim.attributes( property, attributes )
    //    return ax.factory.object( { ...component, ...attributes } )
    //  }

 }
}
