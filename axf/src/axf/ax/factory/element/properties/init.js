ax.factory.element.properties.init = function ( element ) {

  if ( ax.is.function( element.$properties.$init ) ) {
    element.appendChild( ax.factory.element( {
      $tag: 'script',
      type: 'text/javascript',
      $html:  '(function(){' +
                'let script=document.currentScript;' +
                'let element=script.parentElement;' +
                'script.remove();' +
                'element.$init( element, element.$state );' +
              '})()'
    } ) )
  }

  return element

}
