ax.factory.object.element.properties.accessors.$text = function ( element ) {

  Object.defineProperty( element, "$text", {
    get : function () {
      return element.$object.$text
    },
    set : function( text ) {
      delete element.$object.$html
      delete element.$object.$nodes
      element.$object.$text = text
      element.$render()
    }
  } )

  return element

}
