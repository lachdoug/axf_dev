ax.factory.element.properties.render = function ( element ) {

  let render = this.render

  element.$render = function () {

    if ( element.$properties.hasOwnProperty( '$text' ) ) {
      return render.text( element )
    } else if ( element.$properties.hasOwnProperty( '$html' ) ) {
      return render.html( element )
    } else if ( element.$properties.hasOwnProperty( '$nodes' ) ) {
      return render.nodes( element )
    } else {
      return element
    }

  }

  return element

}
