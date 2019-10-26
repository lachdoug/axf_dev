ax.extension.lib.tabable = function( element ) {
  if ( element.tabIndex >= 0 && ax.x.lib.element.visible( element ) ) {
    // // if ( !element.$ ) debugger
    // // use .closest to find element, rather than .$('^'), because element may
    // // not have been created by ax and won't have the Traversal Tool.
    // let dependent = element.closest('|appkit-form-field |appkit-form-field-dependent')
    // if ( dependent ) {
    //   return dependent.$match()
    // } else {
      return true
    // }
  } else {
    return false
  }
}
