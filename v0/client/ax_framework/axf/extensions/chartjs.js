AxFrameworkExtensions.prototype.chartjs = function( chartjsOptions, options={} ) {

  var a = this.axFramework.tags;

  var chartAttributes = Object.assign(
    { style: "display: block;" },
    options.chartAttributes || {}
  );

  var canvasAttributes = Object.assign(
    { style: "display: block;" },
    options.canvasAttributes || {}
  );

  return a.chart(
    a.canvas( null, {
      $init: function() {
        this._chart = new Chart( this.getContext('2d'), chartjsOptions );
      },
    }, canvasAttributes ),
    chartAttributes
  );

};

// .chart alias
AxFrameworkExtensions.prototype.chart = AxFrameworkExtensions.prototype.chartjs;
