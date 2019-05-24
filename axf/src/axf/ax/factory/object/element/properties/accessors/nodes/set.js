ax.factory.object.element.properties.accessors.nodes.
set = function ( element, nodes ) {

  delete element.$object.$text
  delete element.$object.$html
  element.$object.$nodes = nodes
  element.$render()

  return element

}
