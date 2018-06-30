AxFrameworkExtensions.prototype.edit = function( action, fields, options={} ) {

  var a = this.axFramework.tags;
  var x = this;

  var defaultCancelOnclick = function(e) {
    var controller = e.target.closest("controller");
    if ( controller ) {
      controller._open( action );
    } else {
      console.error(
        "Ax error: Edit extension can't find a controller to open " + action +
        ". Put the edit in a controller, or override default behavior " +
        "by setting cancelOnclick in edit options."
      )
    };
  };

  var formOptions = options.formOptions || {};

  var cancelOnclick = options.cancelOnclick || defaultCancelOnclick;
  var cancelComponents =  options.cancelComponents;
  var cancelOptions =  options.cancelOptions;

  var submitComponents =  options.submitComponents;
  var submitOptions =  options.submitOptions;

  var fetchSuccess = function ( data, target, request ) {
    formOptions.data = data;
    target.$components = [
      x.form( (f)=> [
        f.fields( fields ),
        f.cancel( cancelOnclick, cancelComponents, cancelOptions ),
        f.submit( submitComponents, submitOptions )
      ], formOptions )
    ];
  };

  var fetchOptions = Object.assign(
    {
      action: action,
      // method: options.fetchMethod,
      success: fetchSuccess
    },
    options.fetchOptions
  );

  return x.fetch( action, fetchOptions );

};
