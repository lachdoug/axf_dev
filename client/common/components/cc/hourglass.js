cc.hourglass = ( text ) => (a,x) => x.cycle( {
  collection: [
    cc.icon('far fa-hourglass', text ),
    cc.icon('fas fa-hourglass-start', text ),
    cc.icon('fas fa-hourglass-half', text ),
    cc.icon('fas fa-hourglass-end', text ),
    cc.icon('far fa-hourglass', text ),
  ],
} )
