app.charts.containers = containers => (a,x) => {

  containers = Object.keys( containers ).map( name => {

    let container = containers[name]
    let current = container.current / container.limit
    let peak = ( container.maximum / container.limit ) - current
    let headroom = 1 - peak - current
    let size = container.limit / 1048576

    return {
      label: `${ name } ${ size }MB`,
      current: current,
      peak: peak,
      headroom: headroom,
      size: size,
    }

  } ).sort( (a,b) => b.size - a.size )

  return [
    x.chart( {
      wrapperTag: {
        class: 'system-show-chart',
        style: {
          height: `${ containers.length * 14 + 52 }px`,
        },
      },
      chartjs: {
        type: 'horizontalBar',
        data: {
          labels: containers.map ( container => container.label ),
          size: containers.map ( container => container.size ),
          datasets: [
            {
              label: 'Current',
              backgroundColor: 'blue',
              data: containers.map ( container => container.current )
            },
            {
              label: 'Peak',
              backgroundColor: 'green',
              data: containers.map ( container => container.peak )
            },
            {
              label: 'Headroom',
              backgroundColor: 'lightgrey',
              data: containers.map ( container => container.headroom )
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
                let total = data.size[tooltipItem.index]
                let current_data = data.datasets[0].data[tooltipItem.index]
                let peak_data = data.datasets[1].data[tooltipItem.index]
                let current = ( current_data * total ).toFixed(1)
                let peak = ( ( current_data + peak_data ) * total ).toFixed(1)
                let headroom = ( total - peak ).toFixed(1)
                if (tooltipItem.datasetIndex == 0) {
                  return `${ current }MB current usage`
                } else if (tooltipItem.datasetIndex == 1) {
                  return `${ peak }MB peak usage`
                } else {
                  return `${ headroom }MB unused`
                }
              }
            }
          },
        },
      }
    } ),
  ]

}
