ax.extension.appkit.button = function( content, onclick, options = {} ) {

  let buttonTag = {
    type: "button",
    $on: { click: function(e) {
      onclick.bind( this )( e, this, this.$state() )
    } },
    ...options.buttonTag
  }

  let icon_class

  if ( options.icon ) {
    if ( ax.type.is.string( options.icon ) ) {
      icon_class = options.icon
    } else {
      icon_class = options.icon.class
    }
    content = ax.x.appkit.icon( icon_class, content, options.icon )
  }
  return ax.a.button( content, buttonTag )

}
