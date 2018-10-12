// AxFunction.Extensions.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g, " ") );
// };
//
// // AxFunction.Extensions.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g, " ") );
// // };
//
ax.extensions.lib.humanize = function(string) {
  return string.replace(/_/g, " ");
};
