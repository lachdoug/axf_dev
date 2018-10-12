AxFunction.Extensions.Appkit.Library.prototype.dig = function(obj, ...keys) {

  for (var key in keys) {
    if ( obj == null ) {
      return null;
    } else {
      obj = obj[ keys[key] ] || null;
    }
  };

  return obj;

};
