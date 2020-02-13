ax.css.styles.rules = function( styleSpec, selectors=[] ) {

  if ( selectors[0] && selectors[0][0] == '@' ) {
    return ax.css.styles.rules.at( styleSpec, selectors )
  } else if ( ax.is.object( styleSpec ) ) {
    let result = ax.css.styles.rules.rule( styleSpec, selectors )
    Object.keys( styleSpec ).forEach( function( selector ) {
      let selected = styleSpec[selector]
      selector.split(',').forEach( function( selectorPart ) {
        selectorPart = selectorPart.trim()
        if ( selectorPart.match( /^[a-zA-Z]+$/ ) ) {
          // If the selector is simple set of characters, then kebab it.
          // Selectors like '.someClass' should stay as they are.
          selectorPart = ax.kebab( selectorPart )
        }
        if ( selectorPart[0] == '|' ) {
          let match = selectorPart.match( /^\|([a-zA-Z0-9-_]*)(.*)/ )
          selectorPart = `[data-axf-component="${ match[1] }"]${ match[2] }`
        }
        result += ax.css.styles.rules( selected, selectors.concat( selectorPart ) )
      } )
    } )
    return result
  } else {
    return ''
  }

}
