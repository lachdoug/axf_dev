ax.factory.object.element.properties.render = function ( element ) {

  let render = this.render

  element.$render = function () {

    if ( element.$object.hasOwnProperty( '$text' ) ) {
      return render.text( element )
    } else if ( element.$object.hasOwnProperty( '$html' ) ) {
      return render.html( element )
    } else if ( element.$object.hasOwnProperty( '$nodes' ) ) {
      return render.nodes( element )
    } else {
      return element
    }

  }

  return element

}
