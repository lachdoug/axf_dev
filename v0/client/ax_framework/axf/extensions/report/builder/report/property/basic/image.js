AxFrameworkExtensionsReportBuilder.prototype.image = function(
	name,
	value,
	options = {} ) {

	var a = this.axFramework.tags;
	var id = options.id || axNextUniqueId();

  var attributes = Object.assign(
    {
      name: name,
			id: id,
			src: value,
			// $text: value,
      _dependentValue: function() {
	      return value;
			},
    },
    options.imgAttributes || {}
  )

  return a.img( null, attributes );

};
