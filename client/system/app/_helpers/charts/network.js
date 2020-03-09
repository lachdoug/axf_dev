app.charts.network = network => (a,x) => {

  network = Object.keys( network ).map( name => {

    let adapter = network[name]
    let total = Number( adapter.rx ) + Number( adapter.tx )
    let rx = Number( adapter.rx )
    let tx = Number( adapter.tx )

    return {
      label: name,
      rx: rx,
      tx: tx,
      total: total,
    }

  } ).sort( (a,b) => b.total - a.total )

  return [
    x.chart( {
      wrapperTag: {
        class: 'system-show-chart',
        style: {
          height: `${ network.length * 14 + 52 }px`,
        },
      },
      chartjs: {
        type: 'horizontalBar',
        data: {
          labels: network.map ( adapter => adapter.label ),
          rx: network.map ( adapter => adapter.rx ),
          tx: network.map ( adapter => adapter.tx ),
          datasets: [
            {
              label: 'Used',
              backgroundColor: 'blue',
              data: network.map ( adapter => ( adapter.rx / adapter.total ) )
            },
            {
              label: 'Free',
              backgroundColor: 'green',
              data: network.map ( adapter => ( adapter.tx / adapter.total ) )
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
                  return `${ data.rx[tooltipItem.index] } RX`
                } else {
                  return `${ data.tx[tooltipItem.index] } TX`
                }
              }
            }
          },
        },
      }
    } ),
  ]

}
