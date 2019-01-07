app.fa = function( icon, text ) {
  return ax.a.span( [
    ax.x.appkit.icon( `fa fa-${ icon }` ),
    text ? ' ' + text : null,
  ] )
}
