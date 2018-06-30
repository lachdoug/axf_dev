AxFrameworkExtensionsReportBuilder.prototype.output = function(
	name,
	value,
	options = {} ) {

	var a = this.axFramework.tags;
	var id = options.id || axNextUniqueId();

  var attributes = Object.assign(
    {
      name: name,
			id: id,
			$text: value,
      _dependentValue: function() {
	      return value;
			},
    },
    options.outputAttributes || {}
  )

  return a.output( null, attributes );

};
