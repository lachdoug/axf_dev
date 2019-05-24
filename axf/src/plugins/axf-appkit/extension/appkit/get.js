// ax.extension.appkit.
// get = function( url, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   let request = new XMLHttpRequest()
//
//   let success = function( data, element, request ) {
//     if ( options.success ) {
//       options.success.bind(element)( data, element, request )
//     } else {
//       element.$nodes = x.appkit.put( data )
//     }
//   }
//
//   let error = function( data, element, request ) {
//     if ( options.error ) {
//       options.error.bind(element)( data, element, request )
//     } else {
//       element.$nodes = x.appkit.put( data )
//     }
//   }
//
//   let resolver = options.resolver || function( element, promise ) {
//     promise.then( function( data ) {
//       success.bind(element)( data, element, request )
//     } ).catch( function( data ) {
//       error.bind(element)( data, element, request )
//     } )
//   }
//
// 	let promise = new Promise(function (resolve, reject) {
// 		request.onreadystatechange = function () {
// 			if (request.readyState !== 4) return
// 			if (request.status >= 200 && request.status < 300) {
//         if( request.getResponseHeader("Content-Type") === "application/json" ) {
//           resolve( JSON.parse( request.responseText ) )
//         } else {
//           resolve( request.responseText )
//         }
// 			} else {
// 				reject( {
// 					status: request.status,
// 					statusText: request.statusText
// 				} )
// 			}
//
// 		}
//
// 		request.open( options.method || 'GET', url, true )
// 		request.send()
//
// 	})
//
//   let getTag = Object.assign(
//     {
//       $init: function( element ) { resolver( element, promise ) },
//     },
//     options.getTag
//   )
//
//   let component = options.loading || x.appkit.loading()
//
//   return a['appkit-get']( component, getTag )
//
// }
// //
// // resolver = resolver || function( element, promise ) {
// //   promise.then( function( data ) {
// //     element.$nodes = x.appkit.put( data )
// //   } ).catch( function(error) {
// //     element.$nodes = x.appkit.put( error )
// //   } )
// // }
