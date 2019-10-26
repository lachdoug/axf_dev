// app.form.row = function( f, options={} ) {
//
//   let a = ax.a
//
//   let cols = options.cols || []
//
//   let klass
//   let length = cols.length
//
//   if ( length == 1 ) {
//     klass = 'col-12'
//   } else if ( length == 2 ) {
//     klass = 'col-12.col-sm-6'
//   } else if ( length == 3 ) {
//     klass = 'col-12.col-md-4'
//   } else if ( length >= 4 ) {
//     klass = 'col-12.col-sm-6.col-lg-3'
//   }
//
//   let column = function(col) {
//     return a[`div.${ klass }`](
//       col
//     )
//   }
//
//   let component = cols.map( (col) => column(col)  )
//
//   return a['div.row']( component, options.rowTag )
//
// }
