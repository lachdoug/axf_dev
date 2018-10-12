AxFunction.Extensions.prototype.index = function( action, properties, options={} ) {

  var a = this.axFunction.tags;
  var x = this;

  var defaultOnclick = function( showAction ) {
    var controller = e.target.closest("controller");
    if ( controller ) {
      if ( record.id ) {
        controller.$open( showAction );
      } else {
        console.error(
          "Ax error: Index extension can't find an id for record " +
          JSON.stringify( record ) +
          ". Give the record an id, or override default behavior " +
          "by setting showOnclick in index options."
        );
      };
    } else {
      console.error(
        "Ax error: Index extension can't find a controller to open " + showAction +
        ". Put the index in a controller, or override default behavior " +
        "by setting cancelOnclick in edit options."
      );
    };
  };

  var tablulateOptions = {
    tableOptions: Object.assign(
      {
        rowAttributes: function( row, i ) {
          return {
            onclick: function(e) {
              alert("hi");
              // debugger
              var showAction = action + "/" + record.id

              defaultOnclick( showAction )
            }
          };
        }
      },
      options.tableOptions || {}
    ),
  };

  // var defaultOnclick

  // var backOnclick = options.backOnclick || defaultCancelOnclick;
  // var backComponents =  options.backComponents;
  // var backOptions =  options.backOptions;
  //
  // var editOnclick = options.editOnclick || defaultCancelOnclick;
  // var editComponents =  options.editComponents;
  // var editOptions =  options.editOptions;

  var fetchSuccess = function ( data, target, request ) {
    target.$components = [
      x.tabulate( data, properties, tablulateOptions )
    ];
  };

  var fetchOptions = Object.assign(
    {
      // action: action,
      // method: options.fetchMethod,
      success: fetchSuccess
    },
    options.fetchOptions
  );

  return x.fetch( action, fetchOptions );

};
