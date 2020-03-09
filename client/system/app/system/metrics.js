// app.system.metrics = controller => (a,x) => a['app-system-overview']( [
//
//   a.h3( 'System metrics' ),
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
//         el.$nodes = [
//           x.chart( {
//             wrapperTag: {
//               style: {
//                 height: `${ Object.keys( disks ).length * 70 + 30 }px`,
//               },
//             },
//             chartjs: {
//               type: 'horizontalBar',
//               data: {
//                 labels: Object.keys( disks ),
//                 datasets: [
//                   {
//                     label: 'Used',
//                     backgroundColor: 'blue',
//                     data: Object.values( disks ).map(
//                       disk => ( Number( disk.used ) / 1024 / 1024 ).toFixed(2)
//                     )
//                   },
//                   {
//                     label: 'Available',
//                     backgroundColor: 'green',
//                     data: Object.values( disks ).map(
//                       disk => ( Number( disk.available ) / 1024 / 1024 ).toFixed(2)
//                     )
//                   },
//                 ],
//               },
//               options: {
//                 legend: false,
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 scales: {
//                   xAxes: [ { stacked: true } ],
//                   yAxes: [ { stacked: true } ],
//                 },
//               },
//             }
//           } ),
//         ]
//
//       } )
//
//     }
//   ),
//
//
//
//   [ a.h5( '/~/~/system/metrics/load' ), app.http( '/~/~/system/metrics/load' ), a.br ],
//   [ a.h5( '/~/~/system/metrics/memory' ), app.http( '/~/~/system/metrics/memory' ), a.br ],
//   [ a.h5( '/~/~/system/metrics/memory/statistics' ), app.http( '/~/~/system/metrics/memory/statistics' ), a.br ],
//   [ a.h5( '/~/~/system/metrics/network' ), app.http( '/~/~/system/metrics/network' ), a.br ],
//
// ] )
