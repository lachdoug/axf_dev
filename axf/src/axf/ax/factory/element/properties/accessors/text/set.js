ax.factory.element.properties.accessors.text.
set = function ( element, text ) {

  delete element.$properties.$html
  delete element.$properties.$nodes
  element.$properties.$text = text
  element.$render()
  
  return element

}
