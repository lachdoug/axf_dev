ax.tag.proxy.shim.component = function ( component ) {

  let is = ax.type.is
// debugger
  if ( is.node( component ) ) return { $nodes: [ component ] }
  if ( is.nodelist( component ) ) return { $nodes: [ Array.from( component ) ] }
  if ( is.array( component ) ) return { $nodes: component }
  if ( is.object( component ) ) return component
  if ( is.function( component ) ) return { $nodes: [ component ] }
  if ( is.undefined( component ) ) ax.factory.undefined()
  return { $text: component }

  // return ax.factory( component )

}

// ax.tag.proxy.shim.component = function ( component ) {
//
//   let is = ax.type.is
// // debugger
//   if ( is.node( component ) ) return { $nodes: [ component ] }
//   if ( is.nodelist( component ) ) return { $nodes: [ Array.from( component ) ] }
//   if ( is.array( component ) ) return { $nodes: component }
//   if ( is.object( component ) ) return component
//   if ( is.function( component ) ) return { $nodes: [ component ] }
//   if ( is.undefined( component ) ) return {}
//   return { $text: component }
//
// }

// ax.tag.proxy.shim.component = function ( component ) {
//
//   let is = ax.type.is
// // debugger
//   if ( is.null( component ) ) return null
//   if ( is.node( component ) ) return { $nodes: [ component ] }
//   if ( is.nodelist( component ) ) return { $nodes: [ Array.from( component ) ] }
//   if ( is.array( component ) ) return { $nodes: component }
//   if ( is.promise( component ) ) return { $nodes: [ component ] }
//   if ( is.object( component ) ) return component
//   if ( is.function( component ) ) return { $nodes: [ component ] }
//   // if ( is.undefined( component ) ) {
//   //   // debugger
//   //   return { $text: "UNDEFINED" }
//   //   // return ax.factory.undefined()
//   // }
//   return component
//
// }
//
//
// // if ( is.null( component ) ) return null
// // if ( is.node( component ) ) return component
// // if ( is.nodelist( component ) ) return ax.factory.nodelist( component )
// // if ( is.array( component ) ) return ax.factory.array( component )
// // if ( is.promise( component ) ) return ax.factory.promise( component )
// // if ( is.object( component ) ) return ax.factory.object( component )
// // if ( is.function( component ) ) return ax.factory.function( component )
// // if ( is.undefined( component ) ) return ax.factory.undefined()
// // return ax.factory.text( component )
