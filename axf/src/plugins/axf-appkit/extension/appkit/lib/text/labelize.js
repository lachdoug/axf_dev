// AxFunction.extension.Appkit.Library.prototype.titleize = function(string) {
//   return this.capitalize( string.replace(/_/g, " ") );
// };
//
// // AxFunction.extension.Library.prototype.titleize = function(string) {
// //   return this.capitalize( string.replace(/_/g, " ") );
// // };
//
ax.extension.appkit.lib.text.labelize = function(string='') {
  return this.capitalize( string.toString().replace(/_/g, " ") );
};
