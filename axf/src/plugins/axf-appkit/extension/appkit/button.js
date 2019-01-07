ax.extension.appkit.button = function( content, onclick, options = {} ) {

  let buttonTag = {
    type: "button",
    $on: { click: onclick },
    ...options.buttonTag
   }

  if ( options.icon ) {
    content = this.appkit.icon( options.icon, content, options.icon )
  }
// debugger
  return ax.a.button( content, buttonTag )

}
