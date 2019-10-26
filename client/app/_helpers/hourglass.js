app.hourglass = ( text ) => (a,x) => x.appkit.cycle( {
  // period: 250,
  collection: [
    x.appkit.icon('far fa-hourglass', text ),
    x.appkit.icon('fas fa-hourglass-start', text ),
    x.appkit.icon('fas fa-hourglass-half', text ),
    x.appkit.icon('fas fa-hourglass-end', text ),
    x.appkit.icon('far fa-hourglass', text ),
  ]
} )
