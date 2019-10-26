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

    app.http( `/api/-/containers/service/${ name }/status`, ( result, el ) => {
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
              x.appkit.list( this.$state ),
            ] },
            name: `service_${ name }`
          } ),

          a['app-system-container-instructions']( [
            app.btn( app.icon( 'fas fa-stop-circle', 'Stop' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/stop`) ),
            app.btn( app.icon( 'fas fa-play-circle', 'Start' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/start`) ),
            app.btn( app.icon( 'far fa-play-circle', 'Restart' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/restart`) ),
            app.btn( app.icon( 'fas fa-pause-circle', 'Pause' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/pause`) ),
            app.btn( app.icon( 'far fa-pause-circle', 'Unpause' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/unpause`) ),
            app.btn( app.icon( 'far fa-stop-circle', 'Halt' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/halt`) ),
            app.btn( app.icon( 'far fa-check-circle', 'Create' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/create`) ),
            app.btn( app.icon( 'fas fa-check-circle', 'Recreate' ), (e,el) => el.$('^app-system-service app-system-container-instructions-result').$nodes = app.http( `/api/-/containers/service/${ name }/recreate`) ),
            a.br,
          ] ),
          a['app-system-container-instructions-result'](),
        ] ),
        a.hr(),

        a['div.container']( [
          a.h6( 'Websites' ),
          app.http(
            `/api/-/containers/service/${ name }/websites`,
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
            `/api/-/containers/service/${ name }/uptime`,
            ( result, el ) => el.$nodes = a.p( result.content )
          ),
          a.h6( 'Memory' ),
          app.http(
            `/api/-/containers/service/${ name }/metrics/memory`,
            ( result, el ) => {
              let memory = result.content
              el.$nodes = [
                x.appkit.list( memory ),
                x.chart( {
                  type: 'bar',
                  data: {
                  // labels: ,
                    datasets: Object.keys( memory ).map( (key) => ( {
                      label: key,
                      data: [ memory[key] ],
                    } ) )
                  }
                } ),
              ]
            }
          ),
          a.h6( 'Network' ),
          app.http(
            `/api/-/containers/service/${ name }/metrics/network`,
            ( network, el ) => el.$nodes = x.appkit.list( network )
          ),
        ] ),
        a.hr,

        a['div.container']( [
          a.h6( 'Consumers' ),
          app.http(
            `/api/-/containers/service/${ name }/consumers/`,
            ( result, el ) => el.$nodes = x.appkit.list( result.content )
          ),
        ] ),
        a.hr,

        a['div.container']( [
          app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
            [ a.h5( `/api/-/containers/service/${ name }` ), app.http( `/api/-/containers/service/${ name }` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/service_definition` ), app.http( `/api/-/containers/service/${ name }/service_definition` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/logs` ), app.http( `/api/-/containers/service/${ name }/logs` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/ps` ), app.http( `/api/-/containers/service/${ name }/ps` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/state` ), app.http( `/api/-/containers/service/${ name }/state` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/services/persistent/` ), app.http( `/api/-/containers/service/${ name }/services/persistent/` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/services/non_persistent/` ), app.http( `/api/-/containers/service/${ name }/services/non_persistent/` ), a.br ],
            [ a.h5( `/api/-/containers/service/${ name }/sub_services` ), app.http( `/api/-/containers/service/${ name }/sub_services` ), a.br ],
          ] ),
          a['app-test-btn-result'](),
        ] ),
        a.hr,

        a['div.container']( [
          app.link( 'Export', `/api/download/service/${ name }`, { target: '_blank' } ),
          app.link( 'TEST DOWNLOAD', '/api/download/test', { target: '_blank' } ),
        ] ),

        a['div.container']( [
          x.dropzone( { url: `/api/upload/service/${ name }` } ),
        ] ),


      ]
    }, {
      // placeholder: "Loading",
    } ),

  ] )

}
