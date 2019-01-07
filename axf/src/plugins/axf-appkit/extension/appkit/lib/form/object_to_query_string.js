// ax.extensions.appkit.lib.objectToQueryString = function( object, prefix ) {
//
//   var queryString = []
//   var property;
//
//   for (property in object) {
//     if (object.hasOwnProperty(property)) {
//       var k = prefix ? prefix + "[" + property + "]" : property,
//         v = object[property];
//       queryString.push((v !== null && ax.type.is.object( v )) ?
//         this.objectToQueryString(v, k) :
//         encodeURIComponent(k) + "=" + encodeURIComponent(v));
//     };
//   };
//   return queryString.join("&");
//
// };
