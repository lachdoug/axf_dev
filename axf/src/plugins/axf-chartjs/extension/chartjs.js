ax.extension.chartjs = function( chartjsOptions, options={} ) {

  var a = ax.a;

  var chartTag = Object.assign(
    { style: "display: block;" },
    options.chartTag || {}
  );

  var canvasTag = Object.assign(
    { style: "display: block;" },
    options.canvasTag || {}
  );

  return a.chart( [
    a.div( null, {
      $init: function() {
        this.parentElement.$chart = new Chart( this.nextSibling.getContext('2d'), chartjsOptions );
      }
    } ),
    a.canvas( null, canvasTag ),
  ], chartTag );

};

// .chart alias
ax.extension.chart = ax.extension.chartjs;
