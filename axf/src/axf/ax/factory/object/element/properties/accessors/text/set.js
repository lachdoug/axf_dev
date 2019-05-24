ax.factory.object.element.properties.accessors.text.
set = function ( element, text ) {

  delete element.$object.$html
  delete element.$object.$nodes
  element.$object.$text = text
  element.$render()
  
  return element

}
