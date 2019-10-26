ax.factory.element = function ( properties ) {

  properties = { $tag: 'span', ...properties }

  if ( properties.$tag == 'tr|appkit-form-nest-item' ) debugger
  let element = document.createElement( properties.$tag )
  element.$properties = properties

  return this.element.properties.init(
    this.element.properties( element ).$render()
  )

}
