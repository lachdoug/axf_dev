ax.extensions.appkit.lib.objectToQueryString = function( object, prefix ) {

  var queryString = []
  var property;

  for (property in object) {
    if (object.hasOwnProperty(property)) {
      var k = prefix ? prefix + "[" + property + "]" : property,
        v = object[property];
      queryString.push((v !== null && typeof v === "object") ?
        this.objectToQueryString(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    };
  };
  return queryString.join("&");

};
