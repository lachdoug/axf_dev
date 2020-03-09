// app.system.memory = controller => (a,x) => a['app-system-memory']( [
//
//   a.h3( 'Memory' ),
//
//   a['div.clearfix'](
//     a['div.float-right']( [
//       app.up( controller, 'Close' ),
//     ] )
//   ),
//
//   // [ a.h5( '/~/~/system/metrics/load' ), app.http( '/~/~/system/metrics/load' ), a.br ],
//   // [ a.h5( '/~/~/system/metrics/memory' ), app.http( '/~/~/system/metrics/memory' ), a.br ],
//   // [ a.h5( '/~/~/system/metrics/memory/statistics' ), app.http( '/~/~/system/metrics/memory/statistics' ), a.br ],
//   // [ a.h5( '/~/~/system/metrics/network' ), app.http( '/~/~/system/metrics/network' ), a.br ],
//   //
//   //
//   // this._chart( {
//   //   label: "Apps memory",
//   //   mdCols: 6,
//   //   chart: {
//   //     type: 'doughnut',
//   //     data: chartsData["appsMemory"],
//   //     options: {
//   //       legend: { display: true, position: 'right', responsive: true, }
//   //     },
//   //   },
//   // } ),
//
//   app.http(
//     '/~/~/system/metrics/memory/statistics',
//     ( response, el ) => {
//       response.json().then( memory => {
//
//         let chartDataFor = ( containers ) => Object.keys( containers ).map( name => {
//
//           let container = containers[name]
//           let current = container.current / container.limit
//           let peak = ( container.maximum / container.limit ) - current
//           let headroom = 1 - peak - current
//           let size = container.limit / 1048576
//
//           return {
//             label: `${ name } ${ size }MB`,
//             current: current,
//             peak: peak,
//             headroom: headroom,
//             size: size,
//           }
//
//         } ).sort( (a,b) => b.size - a.size )
//
//         let chartFor = containers => {
//
//           containers = chartDataFor( containers )
//
//           return [
//             x.chart( {
//               wrapperTag: {
//                 style: {
//                   height: `${ containers.length * 30 + 100 }px`,
//                 },
//               },
//               chartjs: {
//                 type: 'horizontalBar',
//                 data: {
//                   labels: containers.map ( container => container.label ),
//                   size: containers.map ( container => container.size ),
//                   datasets: [
//                     {
//                       label: 'Current',
//                       backgroundColor: 'blue',
//                       data: containers.map ( container => container.current )
//                     },
//                     {
//                       label: 'Peak',
//                       backgroundColor: 'green',
//                       data: containers.map ( container => container.peak )
//                     },
//                     {
//                       label: 'Headroom',
//                       backgroundColor: 'lightgrey',
//                       data: containers.map ( container => container.headroom )
//                     },
//                   ],
//                 },
//                 options: {
//                   legend: false,
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   scales: {
//                     xAxes: [ {
//                       stacked: true,
//                       ticks: {
//                         callback: value => `${ Math.round(value * 100) }%`
//                       },
//                     } ],
//                     yAxes: [ {
//                       stacked: true,
//                       afterFit: axis => axis.width = 150,
//                     } ]
//                   },
//                   layout: {
//                     padding: {
//                       bottom: 60
//                     }
//                   },
//                   tooltips: {
//                     callbacks: {
//                       label: function(tooltipItem, data) {
//                         let total = data.size[tooltipItem.index]
//                         let current_data = data.datasets[0].data[tooltipItem.index]
//                         let peak_data = data.datasets[1].data[tooltipItem.index]
//                         let current = ( current_data * total ).toFixed(1)
//                         let peak = ( ( current_data + peak_data ) * total ).toFixed(1)
//                         let headroom = ( total - peak ).toFixed(1)
//                         if (tooltipItem.datasetIndex == 0) {
//                           return `Current: ${ current }MB`
//                         } else if (tooltipItem.datasetIndex == 1) {
//                           return `Peak: ${ peak }MB`
//                         } else {
//                           return `Headroom: ${ headroom }MB of ${ total }MB`
//                         }
//                       }
//                     }
//                   },
//                 },
//               }
//             } ),
//           ]
//
//         }
//
//         el.$nodes = [
//           a.h5( 'Applications' ),
//           chartFor( memory.containers.applications ),
//           a.h5( 'Services' ),
//           chartFor( memory.containers.services ),
//         ]
//
//       } )
//
//     }
//   ),
//
// ] )
