app.system.services.show = (controller) =>  {

  const name = controller.params.name

  return (a,x) => a['app-system-service']( [

    app.http( `/~/~/containers/service/${ name }/status`, ( response, el ) => {
      response.json().then( status => {

        el.$nodes = [

          a['div.container']( [
            a['app-container-state']( {
              $state: status,
              // $mergeState: function( statusUpdate ) {
              //   this.$state = { ...this.$state, ...statusUpdate }
              // },
              $nodes: function() { return [
                a.h3( [
                  app.containerStateIcons( this.$state ),
                  `${ name } service`,
                  app.containerErrorIcons( this.$state ),
                ] ),
                x.list( this.$state ),
              ] },
              name: `service_${ name }`
            } ),

            a['app-system-container-instructions']( [
              app.btn( app.icon( 'fas fa-stop-circle', 'Stop' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/stop`) ),
              app.btn( app.icon( 'fas fa-play-circle', 'Start' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/start`) ),
              app.btn( app.icon( 'far fa-play-circle', 'Restart' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/restart`) ),
              app.btn( app.icon( 'fas fa-pause-circle', 'Pause' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/pause`) ),
              app.btn( app.icon( 'far fa-pause-circle', 'Unpause' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/unpause`) ),
              app.btn( app.icon( 'far fa-stop-circle', 'Halt' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/halt`) ),
              app.btn( app.icon( 'far fa-check-circle', 'Create' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/create`) ),
              app.btn( app.icon( 'fas fa-check-circle', 'Recreate' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/~/~/containers/service/${ name }/recreate`) ),
              a.br,
            ] ),
            a['app-system-container-instructions-result'](),
          ] ),
          a.hr(),

          a['div.container']( [
            a.h6( 'Websites' ),
            app.http(
              `/~/~/containers/service/${ name }/websites`,
              ( response, el ) => response.json().then( websites => {
                el.$nodes = websites.length ? websites.map( ( website ) => [
                  a.a( website, { href: website, target: website, class: 'btn btn-link' } ),
                  a.br
                ] ) : a.p( a.i( 'None' ) )
            } )
            ),
          ] ),
          a.hr(),

          app.http(
            `/~/~/containers/service/${ name }/logs`,
            ( response, el  ) => response.json().then( logs => {
              el.$nodes = [
                a.h3('App logs'),
                a.h4('Out'),
                app.xterm( { text: logs.stdout } ),
                a.h4('Error'),
                app.xterm( { text: logs.stderr } ),
              ]
            } )
          ),

          a['div.container']( [
            a.h6( 'Uptime' ),
            app.http(
              `/~/~/containers/service/${ name }/uptime`,
              ( response, el ) => response.json().then( result => { el.$nodes = x.list( result ) } )
            ),
            a.h6( 'Memory' ),
            app.http(
              `/~/~/containers/service/${ name }/metrics/memory`,
              ( response, el ) => {
                response.json().then( memory => {

                  el.$nodes = [
                    x.list( memory ),
                    x.chart( {
                      wrapperTag: {
                        style: {
                          height: '100px',
                        },
                      },
                      chartjs: {
                        type: 'horizontalBar',
                        data: {
                          labels: Object.keys( memory ).map( label => x.lib.text.labelize( label ) ),
                          datasets: [
                            {
                              label: 'Memory MB',
                              backgroundColor: [ 'blue', 'green', 'darkred' ],
                              data: Object.values( memory ).map( value => value/1024/1024 )
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

            a.h6( 'Network' ),
            app.http(
              `/~/~/containers/service/${ name }/metrics/network`,
              ( response, el ) => response.json().then( network => {
                el.$nodes = x.list( network )
              } )
            ),
          ] ),
          a.hr,

          a['div.container']( [
            a.h6( 'Consumers' ),
            app.http(
              `/~/~/containers/service/${ name }/consumers/`,
              ( response, el ) => response.json().then( result => {
                el.$nodes = x.list( result )
              } )
            ),
          ] ),
          a.hr,

          a['div.container']( [
            app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
              [ a.h5( `/~/~/containers/service/${ name }` ), app.http( `/~/~/containers/service/${ name }` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/service_definition` ), app.http( `/~/~/containers/service/${ name }/service_definition` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/logs` ), app.http( `/~/~/containers/service/${ name }/logs` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/ps` ), app.http( `/~/~/containers/service/${ name }/ps` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/state` ), app.http( `/~/~/containers/service/${ name }/state` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/services/persistent/` ), app.http( `/~/~/containers/service/${ name }/services/persistent/` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/services/non_persistent/` ), app.http( `/~/~/containers/service/${ name }/services/non_persistent/` ), a.br ],
              [ a.h5( `/~/~/containers/service/${ name }/sub_services` ), app.http( `/~/~/containers/service/${ name }/sub_services` ), a.br ],
            ] ),
            a['app-test-btn-result'](),
          ] ),
          a.hr,

          a['div.container']( [
            app.link( { label: 'Export', href: `/~/download/service/${ name }`, target: '_blank' } ),
            app.link( { label: 'TEST DOWNLOAD', href: '/~/download/test', target: '_blank' } ),
          ] ),

          a['div.container']( [
            x.filepond( { url: `/~/upload/service/${ name }` } ),
          ] ),

        ]

      } )
      // el.$send( '' )

    }, {
      // placeholder: "Loading",
    } ),

  ] )

}
