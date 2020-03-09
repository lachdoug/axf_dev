app.charts.storage = storage => (a,x) => {

  storage = Object.keys( storage ).map( name => {

    let disk = storage[name]
    let total = Number( disk.used ) + Number( disk.available )
    let used = Number( disk.used ) / total
    let free = Number( disk.available ) / total
    let size = total / 1048576

    return {
      label: `${ name } ${ size.toFixed(1) }GB`,
      used: used,
      free: free,
      size: size,
    }

  } ).sort( (a,b) => b.size - a.size )

  return [
    x.chart( {
      wrapperTag: {
        class: 'system-show-chart',
        style: {
          height: `${ storage.length * 14 + 52 }px`,
        },
      },
      chartjs: {
        type: 'horizontalBar',
        data: {
          labels: storage.map ( disk => disk.label ),
          used: storage.map ( disk => disk.used ),
          free: storage.map ( disk => disk.free ),
          // size: storage.map ( disk => disk.size ),
          datasets: [
            {
              label: 'Used',
              backgroundColor: 'blue',
              data: storage.map ( disk => disk.used )
            },
            {
              label: 'Free',
              backgroundColor: 'lightgrey',
              data: storage.map ( disk => disk.free )
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
                  return `${ data.used[tooltipItem.index].toFixed(1) }GB used`
                } else {
                  return `${ data.free[tooltipItem.index].toFixed(1) }GB free`
                }
              }
            }
          },
        },
      }
    } ),
  ]

}
