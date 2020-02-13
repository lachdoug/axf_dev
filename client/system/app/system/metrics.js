app.system.metrics = ( controller ) => (a,x) => a['app-system-overview']( [

  a.h3( 'System metrics' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.btn( app.icon( 'fa fa-arrow-up' ), (e,el) => controller.open( '../diagnostics' ) ),
    ] )
  ),

  app.http(
    '/~/~/system/metrics/disks',
    ( response, el ) => {
      response.json().then( disks => {

        el.$nodes = [
          x.list( disks ),
          x.chart( {
            wrapperTag: {
              style: {
                height: '100px',
              },
            },
            chartjs: {
              type: 'horizontalBar',
              data: {
                labels: Object.keys( disks ).map( label => x.lib.text.labelize( label ) ),
                datasets: [
                  {
                    label: 'Memory MB',
                    backgroundColor: [ 'blue', 'green', 'darkred' ],
                    data: Object.values( disks ).map( disk => disk.used )
                  }
                ],
              },
              options: {
                legend: false,
                responsive: true,
                maintainAspectRatio: false,
              },
            }
          } ),
        ]

      } )

    }
  ),



  [ a.h5( '/~/~/system/metrics/disks' ), app.http( '/~/~/system/metrics/disks' ), a.br ],
  [ a.h5( '/~/~/system/metrics/load' ), app.http( '/~/~/system/metrics/load' ), a.br ],
  [ a.h5( '/~/~/system/metrics/memory' ), app.http( '/~/~/system/metrics/memory' ), a.br ],
  [ a.h5( '/~/~/system/metrics/memory/statistics' ), app.http( '/~/~/system/metrics/memory/statistics' ), a.br ],
  [ a.h5( '/~/~/system/metrics/network' ), app.http( '/~/~/system/metrics/network' ), a.br ],

] )
