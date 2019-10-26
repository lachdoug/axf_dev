ax.factory.element.properties.accessors.nodes.
set = function ( element, nodes ) {

  delete element.$properties.$text
  delete element.$properties.$html
  element.$properties.$nodes = nodes
  element.$render()

  return element

}
