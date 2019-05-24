// ax.extension.appkit.fetch = function( action, options={} ) {
//
//   let a = ax.a
//   let x = ax.x
//
//   if ( ax.type.is.function( options ) ) {
//     options = { success: options }
//   }
//
//   let method = options.method || 'GET'
//
//   let successFunction = options.success ||
//     function( result ) {
//       if ( ax.type.is.object( result ) ) {
//         this.$nodes = x.appkit.put( result )
//       } else {
//         this.$text = result
//       }
//     }
//
//   let errorFunction = options.error ||
//     function( response, target ) {
//       target.$text = response.failed || "Failed to load"
//     }
//
//   // Build XMLHttp request function
//   let httpRequest = function( target ) {
//
//     let request = new XMLHttpRequest()
//     request.onreadystatechange = function() {
//       if (this.readyState == 4) {
//         let result
//         if ( this.status >= 200 && this.status < 300 ) {
//           if( this.getResponseHeader("Content-Type") === "application/json" ) {
//             result = JSON.parse( this.responseText )
//           } else {
//             result = this.responseText
//           }
//           target.$success.bind( target )( result, this )
//         } else {
//           result = this.statusText || "Request error"
//           target.$error.bind( target )( result, this )
//         }
//       }
//     }
//     request.open( method, action, true)
//     request.setRequestHeader('Accept', 'application/json')
//     request.send()
//
//   }
//
//   let fetchTag = Object.assign(
//     {
//       $init: function() { httpRequest( this ) },
//       $success: function( result, request ) { successFunction.call( this, result, this, request ) },
//       $error: function( result, request ) { errorFunction.call( this, result, this, request ) }
//     },
//     options.fetchTag
//   )
//
//   let component = a.loading( options.loading || x.appkit.loading() )
//
//   return a['appkit-fetch']( component, fetchTag )
//
// }
