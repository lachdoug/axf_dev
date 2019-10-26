ax.tag.collection.shim = {
 get: ( target, property ) => {

   return function( ...components ) {
     return components.map( function( component ) {
       return ax.a[ property ]( component )
     } )
   }

 }
}
