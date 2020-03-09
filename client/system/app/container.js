app.container = {}

//  type => controller => (a,x) => {
//
//   return a['div.row']( [
//     a['div.col-3']( app.container.show.menu( controller, type ) ),
//     a['div.col-9']( app.container.show( controller, type ) ),
//   ] )
//
// }
