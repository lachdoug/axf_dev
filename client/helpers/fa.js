app.fa = function( icon, text ) {
  return (a,x) => a.span( [
    x.appkit.icon( `fa fa-${ icon }` ),
    text ? ' ' + text : null,
  ] )
}
