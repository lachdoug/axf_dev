app.charts.ram = ram => (a,x) => {

  let total = Number( ram.total )
  let free = Number( ram.free )
  let used = total - free

  return [
    x.chart( {
      wrapperTag: {
        class: 'system-show-chart',
        style: {
          height: '66px',
        },
      },
      chartjs: {
        type: 'horizontalBar',
        data: {
          labels: [ `RAM ${ ( total / 1048576 ).toFixed(1) }GB` ],
          datasets: [
            {
              label: 'Used',
              backgroundColor: 'blue',
              data: [ ( used / total ) ]
            },
            {
              label: 'Free',
              backgroundColor: 'lightgray',
              data: [ ( free / total ) ]
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
                  return `${ ( used / 1048576 ).toFixed(1) }GB used`
                } else {
                  return `${ ( free / 1048576 ).toFixed(1) }GB free`
                }
              }
            }
          },
        },
      }
    } ),
  ]

}
