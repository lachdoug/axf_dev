ax.extension.appkit.lib.field.collection.name = function(name) {

  if ( name && name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

  return name;

};
