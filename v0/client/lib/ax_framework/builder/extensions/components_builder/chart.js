AxBuilderExtensionsComponentsBuilder.prototype.chart = function( options={} ) {

  var a = this.cellBuilder.tagBuilder;

  return a.div( 
    a.canvas( null, {
    // height: options.height || "100",
    // width: options.width || "100",
    $init: function() {
      // debugger;
      this._chart = new Chart( this.closest("body").querySelector("canvas").getContext('2d'), options.chartjsOptions );
      // debugger;
    },
  } ), {
    // style: "height: 400px; width: 400px;"
    // height: options.height || "400",
    // width: options.width || "400",

  }
);

};
