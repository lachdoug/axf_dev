AxFunction.Extensions.prototype.chartjs = function( chartjsOptions, options={} ) {

  var a = this.axFunction.tags;

  var chartAttributes = Object.assign(
    { style: "display: block;" },
    options.chartAttributes || {}
  );

  var canvasAttributes = Object.assign(
    { style: "display: block;" },
    options.canvasAttributes || {}
  );

  return a.chart( [
    a.div( null, {
      $init: function() {
        this.parentElement.$chart = new Chart( this.nextSibling.getContext('2d'), chartjsOptions );
      }
    } ),
    a.canvas( null, canvasAttributes ),
  ], chartAttributes );

};

// .chart alias
AxFunction.Extensions.prototype.chart = AxFunction.Extensions.prototype.chartjs;
