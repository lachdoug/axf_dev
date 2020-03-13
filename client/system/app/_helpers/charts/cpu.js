app.charts.cpu = cpu => (a,x) => x.chart( {
  wrapperTag: {
    class: 'system-show-chart',
    style: {
      height: '94px',
    },
  },
  chartjs: {
    type: 'horizontalBar',
    data: {
      labels: [ '1 min', '5 mins', '15 mins' ],
      datasets: [
        {
          label: 'Load',
          backgroundColor: 'blue',
          data: [ cpu.one, cpu.five, cpu.fifteen ]
        },
        {
          label: 'Idle',
          backgroundColor: 'lightgray',
          data: [
            ( 1 - cpu.one ) > 0 ? 1 - cpu.one : 0,
            ( 1 - cpu.five ) > 0 ? 1 - cpu.five : 0,
            ( 1 - cpu.fifteen ) > 0 ? 1 - cpu.fifteen : 0,
          ]
        },
      ],
    },
    options: {
      legend: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [ {
          stacked: true,
          display: false,
          // ticks: {
          //   callback: value => `${ Math.round( value * 100 ) }%`
          // },
        } ],
        yAxes: [ {
          stacked: true,
          afterFit: axis => axis.width = 150,
        } ]
      },
      layout: {
        padding: {
          top: 10,
          bottom: 42,
          right: 12,
        }
      },
      tooltips: {
        mode: 'point',
        callbacks: {
          label: function(tooltipItem, data) {
            if ( tooltipItem.datasetIndex === 0 ) {
              return `${ ( tooltipItem.value * 100 ).toFixed(0) }% load`
            } else {
              return `${ ( tooltipItem.value * 100 ).toFixed(0) }% idle`
            }
          }
        }
      },
    },
  }
} )
