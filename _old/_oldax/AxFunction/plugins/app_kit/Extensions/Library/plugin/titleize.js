// AxFunction.Extensions.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g, " ") );
// };
//
// // AxFunction.Extensions.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g, " ") );
// // };
//
AxFunction.Extensions.Library.plugin( 'titleize', function(string) {
  return this.capitalize( string.replace(/_/g, " ") );
} );
