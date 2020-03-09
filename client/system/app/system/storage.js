// app.system.storage = controller => (a,x) => [
//
//   a.h3( 'Storage' ),
//
//   a['div.clearfix'](
//     a['div.float-right']( [
//       app.up( controller, 'Close' ),
//     ] )
//   ),
//
//   app.http(
//     '/~/~/system/metrics/disks',
//     ( response, el ) => {
//       response.json().then( disks => {
//
//         let chartDataFor = ( disks ) => Object.keys( disks ).map( name => {
//
//           let disk = disks[name]
//           let total = Number( disk.used ) + Number( disk.available )
//           let used = Number( disk.used ) / total
//           let free = Number( disk.available ) / total
//           let size = total / 1048576
//
//           return {
//             label: `${ name } ${ size.toFixed(1) }GB`,
//             used: used,
//             free: free,
//             size: size,
//           }
//
//         } ).sort( (a,b) => b.size - a.size )
//
//         let chartFor = disks => {
//
//           disks = chartDataFor( disks )
//
//           return [
//             x.chart( {
//               wrapperTag: {
//                 style: {
//                   height: `${ disks.length * 30 + 100 }px`,
//                 },
//               },
//               chartjs: {
//                 type: 'horizontalBar',
//                 data: {
//                   labels: disks.map ( disk => disk.label ),
//                   size: disks.map ( disk => disk.size ),
//                   datasets: [
//                     {
//                       label: 'Used',
//                       backgroundColor: 'blue',
//                       data: disks.map ( disk => disk.used )
//                     },
//                     {
//                       label: 'Free',
//                       backgroundColor: 'lightgrey',
//                       data: disks.map ( disk => disk.free )
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
//                         callback: value => `${ Math.round( value * 100 ) }%`
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
//                         let used_data = data.datasets[0].data[tooltipItem.index]
//                         let free_data = data.datasets[1].data[tooltipItem.index]
//                         let used = ( used_data * total )
//                         let free = ( free_data * total )
//                         if (tooltipItem.datasetIndex == 0) {
//                           return `Used: ${ used.toFixed(1) }GB`
//                         } else {
//                           return `Free: ${ free.toFixed(1) }GB of ${ total.toFixed(1) }GB`
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
//           chartFor( disks ),
//         ]
//
//       } )
//
//     }
//   ),
//
// ]
