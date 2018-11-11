// AxFunction.Extensions.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g, " ") );
// };
//
// // AxFunction.Extensions.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g, " ") );
// // };
//
ax.extensions.lib.labelize = function(string) {
  return this.capitalize( string.replace(/_/g, " ") );
};
