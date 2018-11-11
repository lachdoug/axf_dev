ax.factory.object.element.properties.accessors.$nodes = function ( element ) {

  Object.defineProperty( element, "$nodes", {
    get : function () {
      return element.$object.$nodes || []
    },
    set : function( nodes ) {
      delete element.$object.$text
      delete element.$object.$html
      element.$object.$nodes = nodes
      element.$render()
    }
  } )

  return element

}
