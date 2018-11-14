ax.extension.appkit.button = function( content, onclickFunction, options = {} ) {

  var buttonTag = {
    type: "button",
    $on: { click: onclickFunction },
    ...options.buttonTag
   }

  if ( options.icon ) {
    content = this.appkit.icon( options.icon, content, options.icon )
  }

  return ax.a.button( content, buttonTag )

}
