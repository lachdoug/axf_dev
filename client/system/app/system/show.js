app.system.show = ( controller ) => (a,x) => a['app-system']( [

  a['div.float-right'](
    x.popup( app.btn( app.icon( 'fas fa-power-off' ) ), {
      menu: [
        app.btn(
          'Restart',
          () => controller.load( '/system/restart' ),
          {
            class: 'btn btn-outline-secondary app-btn d-block w-100 text-left',
          }
        ),
        app.btn(
          'Shutdown',
          () => controller.load( '/system/shutdown' ),
          {
            class: 'btn btn-outline-secondary app-btn d-block w-100 text-left',
          }
        ),
      ]
    } ),
  ),

  a.h3( 'System' ),

  a['app-system-state']( {
    $update: (el,system) => {
      el.$nodes = a.p( [
        system.needs_reboot ? app.btn(
          a['.text-warning']( app.icon( 'fa fa-bell', 'Needs restart' ) ),
          (e,el) => controller.load( 'restart' ),
          { class: 'btn btn-outline-secondary app-btn' }
        ) : null,
        system.needs_engines_update ? app.btn(
          a['.text-warning']( app.icon( 'fa fa-bell', 'Needs System update' ) ),
          (e,el) => controller.load( 'update' ),
          { class: 'btn btn-outline-secondary app-btn' }
        ) : null,
        system.needs_base_update ? app.btn(
          a['.text-warning']( app.icon( 'fa fa-bell', 'Needs OS update' ) ),
          (e,el) => controller.load( 'update/os' ),
          { class: 'btn btn-outline-secondary app-btn' }
        ) : null,
        system.did_build_fail ? app.btn(
          a['.error']( app.icon( 'fas fa-tools', 'Install failed' ) ),
          (e,el) => controller.open( 'install/last' ),
          { class: 'btn btn-outline-secondary app-btn' }
        ) : null,
        system.is_building ? app.btn(
          a['.text-info']( app.icon( 'fas fa-tools' , 'Installing' ) ),
          (e,el) => controller.open( 'install/monitor' ),
          { class: 'btn btn-outline-secondary app-btn' }
        ) : null,
      ] )
    },
    $state: {},
    $init: function() {
      this.$state = system.$state
    },
  } ),

  app.btn(
    app.icon( 'fa fa-plus', 'Install' ),
    (e,el) => controller.open( 'install' )
  ),

  a['div.float-right']( [
    app.btn(
      app.icon( 'fas fa-stethoscope', 'Diagnostics' ),
      (e,el) => controller.open( 'diagnostics' )
    ),
    app.btn(
      app.icon( 'fas fa-cog', 'Settings' ),
      (e,el) => controller.open( 'settings' )
    ),
  ] ),


  a.hr,
  a['div.row']( [
    a['div.col']( [
      a.small( 'System' ),
      [ 'Engines', app.http( '/~/~/system/version/ident' ) ],
      app.btn(
        app.icon( 'fas fa-redo', 'Update' ),
        (e,el) => controller.load( 'update' )
      ),
    ] ),
    a['div.col']( [
      a.small( 'OS' ),
      [ app.http( '/~/~/system/version/base_os', ( response, el ) => response.json().then( os => el.$text = os.pretty_name ) ) ],
      app.btn(
        app.icon( 'fas fa-redo', 'Update' ),
        (e,el) => controller.load( 'update/os' )
      ),
    ] ),
  ] ),

  a.hr,
  app.http(
    '/~/~/system/metrics/summary',
    ( response, el ) => response.json().then(
      metrics => {

        el.$nodes = [

          a.small( 'Memory' ),
          [
            'Free', ( Number( metrics.memory.free ) / 1024 /1024 ).toFixed(2), 'GB',
            '-',
            'Total', ( Number( metrics.memory.total ) / 1024 /1024 ).toFixed(2), 'GB',
          ],

          a.br,

          a.small( 'Storage' ),
          Object.keys( metrics.storage ).map( name => [
            [ metrics.storage[name].mount, a.small( name ) ],
            'Free', ( Number( metrics.storage[name].free ) / 1024 /1024 ).toFixed(2), 'GB',
            '-',
            'Total', ( Number( metrics.storage[name].size ) / 1024 /1024 ).toFixed(2), 'GB',
          ] ),


          // x.chart( {
          //   canvasTag: {
          //     height: 125
          //   },
          //   chartjs: {
          //     type: 'horizontalBar',
          //     data: {
          //       labels: [ 'Memory' ],
          //       datasets: [
          //         {
          //           label: 'Used',
          //           data: [ ( Number( metrics.memory.total ) - Number( metrics.memory.free ) ) / Number( metrics.memory.total ) ],
          //           backgroundColor: "#48d",
          //         },
          //         {
          //           label: 'Available',
          //           data: [ Number( metrics.memory.free ) / Number( metrics.memory.total ) ],
          //           backgroundColor: "lightgrey",
          //         }
          //
          //       ]
          //     },
          //     options: {
          //       layout: { padding: { bottom: 60 } },
          //       maintainAspectRatio: false,
          //       responsive: true,
          //       scales: {
          //         xAxes: [ { display: false, stacked: true } ],
          //         yAxes: [ {
          //           stacked: true,
          //           afterFit: function(scaleInstance) {
          //             scaleInstance.width = 100; // sets the width to 100px
          //           }
          //
          //         } ]
          //       },
          //       tooltips: {
          //         callbacks: {
          //           label: function(tooltipItem, data) {
          //             var key = Object.keys( metrics.storage )[tooltipItem.index];
          //             var disk = metrics.storage[key]
          //             if (tooltipItem.datasetIndex == 0) {
          //               return `Used: ${ ( ( Number( metrics.memory.total ) - Number( metrics.memory.free ) ) / 1024 / 1024 ).toFixed(1) }GB`
          //             } else {
          //               return `Free: ${ ( Number( metrics.memory.free ) / 1024 / 1024 ).toFixed(1) }GB`
          //             };
          //            }
          //          }
          //       },
          //     },
          //   }
          // } ),
          //
          //
          // x.chart( {
          //   canvasTag: {
          //     height: Object.keys( metrics.storage ).length * 20 + 82
          //   },
          //   chartjs: {
          //     type: 'horizontalBar',
          //     data: {
          //       labels: Object.keys( metrics.storage ),
          //       datasets: [
          //         {
          //           label: 'Used',
          //           data: Object.values( metrics.storage ).map(
          //             disk => ( ( Number( disk.size ) - Number( disk.free ) ) ) / Number( disk.size )
          //           ),
          //           backgroundColor: "#48d",
          //         },
          //         {
          //           label: 'Available',
          //           data: Object.values( metrics.storage ).map( disk => Number( disk.free ) / Number( disk.size ) ),
          //           backgroundColor: "lightgrey",
          //         }
          //
          //       ]
          //     },
          //     options: {
          //       legend: false,
          //       layout: { padding: { bottom: 60 } },
          //       maintainAspectRatio: false,
          //       responsive: true,
          //       scales: {
          //         xAxes: [ { display: false, stacked: true } ],
          //         yAxes: [ {
          //           stacked: true,
          //           afterFit: function(scaleInstance) {
          //             scaleInstance.width = 100; // sets the width to 100px
          //           }
          //
          //         } ]
          //       },
          //       tooltips: {
          //         callbacks: {
          //           label: function(tooltipItem, data) {
          //             var key = Object.keys( metrics.storage )[tooltipItem.index];
          //             var disk = metrics.storage[key]
          //             if (tooltipItem.datasetIndex == 0) {
          //               return `Used: ${ ( ( Number( disk.size ) - Number( disk.free ) ) / 1024 / 1024 ).toFixed(1) }GB`
          //             } else {
          //               return `Free: ${ ( Number( disk.free ) / 1024 / 1024 ).toFixed(1) }GB`
          //             };
          //            }
          //          }
          //       },
          //     },
          //   }
          // } ),




        ]
      }
    )
  ),

  // a['div.float-right']( [
  // ] ),






] )
