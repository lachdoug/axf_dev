ax.extension.report.field.dependent.shim.
dependent.dependency = ( el, options ) => {

  let lib = ax.x.lib.field

  let selector

  if ( options.selector ) {
    selector = options.selector
  } else {
    let name = options.name
    selector = `[name='${ name }']`
  }

  let search = options.search || '^|appkit-report'
// debugger
  let selected = el.$( search ).$( selector )

  if ( selected ) {
    selected = selected.$('^|appkit-report-field-dependent')
    if ( selected ) {
      return selected
    } else {
      ax.log.error( `Form field failed to find <appkit-report-field-dependent> parent for its dependency using options:`,  options )
    }
  } else {
    ax.log.error( `Form field failed to select its dependency using options:`, options )
  }

}
