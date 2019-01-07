// coderunner.completeCellJson = function( objects ) {
//
// // function appHelperCodeGuidecompleteCellJson( objects ) {
//
//   var result;
//
//   if ( objects instanceof Array ) {
//     result = objects.map(
//       function( object ) {
//         return appHelperCodeGuidecompleteCellJsonDummySerializeFunctions( object )
//       }
//     )
//   } else {
//     result = appHelperCodeGuidecompleteCellJsonDummySerializeFunctions( objects )
//   };
//
//   return JSON.stringify( result, null, 2 );
// };
//
// function appHelperCodeGuidecompleteCellJsonDoValue( value ) {
//   if ( value instanceof Array ) {
//     return value.map( function( item ) {
//       return appHelperCodeGuidecompleteCellJsonDoValue( item );
//     } );
//   } else if ( typeof value === "object" ) {
//     return appHelperCodeGuidecompleteCellJsonDummySerializeFunctions( value );
//   } else if ( typeof value === "function" ) {
//     return ( 'ƒ ' + value ).replace(/\s+/g, ' ');
//   } else {
//     return value;
//   };
// }
//
// function appHelperCodeGuidecompleteCellJsonDummySerializeFunctions( object ) {
//   var result = {};
//   // delete object.$;  // Don't show the $ helper
//   for ( key in object ) {
//     var value = object[key]
//     result[key] = appHelperCodeGuidecompleteCellJsonDoValue( value );
//   };
//   return result;
// };
