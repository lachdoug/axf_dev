ax.factory.object.element.properties.$init = function ( element ) {

  if ( element.$object.hasOwnProperty( '$init' ) ) {
    element.appendChild( ax.factory( {
      $tag: "script",
      type: "text/javascript",
      $html: `
      ( function () {
        let script = document.currentScript
        let element = script.parentElement
        element.$init()
        script.remove()
      } )()`
    } ) )
  }

  return element

}
