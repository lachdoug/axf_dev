// ax.extension.report.factory.
// string = function( options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let value = options.value || null
//
//   if ( options.type ) {
//     value = x.lib.coerce[ options.type ]( value )
//   }
//
//   let stringTagOptions = {
//     name: options.name,
//     ...options.stringTag
//   }
//
//   return a['span|appkit-string']( value, stringTagOptions )
//
// }
