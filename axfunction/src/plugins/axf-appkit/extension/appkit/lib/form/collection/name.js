ax.extension.appkit.lib.form.collection.name = function(name) {

  if ( name && name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

  return name;

};
