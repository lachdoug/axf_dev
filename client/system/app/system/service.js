// app.system.service = (controller) =>  {
//
//   const name = controller.params.name
//
//   return (a,x) => a['app-system-service']( [
//
//     a.h3(`Service - ${ name }`),
//
//
//   ] )
//
// }
//

app.system.service = (controller) =>  {

  const name = controller.params.name

  return (a,x) => a['app-system-service']( [

    app.http( `/~/~/containers/service/${ name }/status`, ( result, el ) => {
      // el.$send( '' )
      el.$nodes = [

        a['div.container']( [
          a['app-container-state']( {
            $state: result.content,
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
            ( result, el ) => {
              let websites = result.content
              el.$nodes = websites.length ? websites.map( ( website ) => [
                a.a( website, { href: website, target: website, class: 'btn btn-link' } ),
                a.br
              ] ) : a.p( a.i( 'None' ) )
          }
          ),
        ] ),
        a.hr(),

        a['div.container']( [
          a.h6( 'Uptime' ),
          app.http(
            `/~/~/containers/service/${ name }/uptime`,
            ( result, el ) => el.$nodes = a.p( result.content )
          ),
          a.h6( 'Memory' ),
          app.http(
            `/~/~/containers/service/${ name }/metrics/memory`,
            ( result, el ) => {
              let memory = result.content
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
                    data:

                    // {
                    //     labels: ["Vanilla", "Chocolate", "Strawberry"],
                    //       datasets: [
                    //         {
                    //             label: "Ice Cream Prices ",
                    //             fill: true,
                    //             backgroundColor: [
                    //                 'moccasin',
                    //                 'saddlebrown',
                    //                 'lightpink'],
                    //             data: [11, 9, 4]
                    //         }
                    //     ]
                    // },

                    {
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
            }
          ),
          a.h6( 'Network' ),
          app.http(
            `/~/~/containers/service/${ name }/metrics/network`,
            ( network, el ) => el.$nodes = x.list( network )
          ),
        ] ),
        a.hr,

        a['div.container']( [
          a.h6( 'Consumers' ),
          app.http(
            `/~/~/containers/service/${ name }/consumers/`,
            ( result, el ) => el.$nodes = x.list( result.content )
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
          app.link( 'Export', `/~/download/service/${ name }`, { target: '_blank' } ),
          app.link( 'TEST DOWNLOAD', '/~/download/test', { target: '_blank' } ),
        ] ),

        a['div.container']( [
          x.filepond( { url: `/~/upload/service/${ name }` } ),
        ] ),


      ]
    }, {
      // placeholder: "Loading",
    } ),

  ] )

}
