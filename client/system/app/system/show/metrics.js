app.system.show.metrics = controller => (a,x) => app.http(
  [
    '/~/~/system/metrics/load',
    '/~/~/system/metrics/disks',
    '/~/~/system/metrics/memory',
    '/~/~/system/metrics/memory/statistics',
    '/~/~/system/metrics/network',
  ],
  ( [ cpu, storage, ram, memory, network ], el ) =>
  el.$nodes = a.div( [
    app.system.show.metrics.cpu( cpu ),
    app.system.show.metrics.storage( storage ),
    app.system.show.metrics.memory( { ...memory, ram: ram } ),
    app.system.show.metrics.network( network ),
  ], {
    // $init: el => x.lib.animate.fade.in( el ),
    // style: { display: 'none' },
  } )

)
