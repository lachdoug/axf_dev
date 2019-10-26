app.system.application = (controller) =>  {

  const name = controller.params.name

  return (a,x) => a['app-system-application']( [

    app.http( `/api/-/containers/engine/${ name }/status`, ( result, el ) => {

      el.$nodes = [

        a['div.container']( [
          a['app-container-state']( {
            $state: result.content,
            $nodes: function() { return [
              a.h3( [
                app.containerStateIcons( this.$state ),
                name,
                app.containerErrorIcons( this.$state ),
              ] ),
              x.appkit.list( this.$state ),
            ] },
            name: `application_${ name }`
          } ),

          a['app-system-container-instructions']( [
            app.btn( app.icon( 'fas fa-stop-circle', 'Stop' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/stop`) ),
            app.btn( app.icon( 'fas fa-play-circle', 'Start' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/start`) ),
            app.btn( app.icon( 'far fa-play-circle', 'Restart' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/restart`) ),
            app.btn( app.icon( 'fas fa-pause-circle', 'Pause' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/pause`) ),
            app.btn( app.icon( 'far fa-pause-circle', 'Unpause' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/unpause`) ),
            app.btn( app.icon( 'far fa-stop-circle', 'Halt' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/halt`) ),
            app.btn( app.icon( 'fas fa-times-circle', 'Destroy' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/destroy`, null, { method: 'delete' } ) ),
            app.btn( app.icon( 'far fa-check-circle', 'Create' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/create`) ),
            app.btn( app.icon( 'fas fa-check-circle', 'Recreate' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/recreate`) ),
            app.btn( app.icon( 'fas fa-plus-circle', 'Reinstall' ), (e,el) => el.$('^app-system-application app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/reinstall`) ),
            // app.btn( app.icon( 'fas fa-play', 'Clear' ), (e,el) => el.$('^ app-system-container-instructions-result').$nodes = app.http(`/api/-/containers/engine/${ name }/clear`) ),
            a.br,
          ] ),
          a['app-system-container-instructions-result'](),
        ] ),
        a.hr,
        a['div.container']( [
          a.h6( 'Websites' ),
          app.http(
            `/api/-/containers/engine/${ name }/websites`,
            ( result, el ) => {
              let websites = result.content
              el.$nodes = websites.length ? websites.map(
                ( website ) => [
                  a.a( website, { href: website, target: website, class: 'btn btn-link' } ),
                  a.br
                ]
              ) : a.p( a.i( 'None' ) )
            }
          ),
        ] ),
        a.hr,
        a['div.container']( [
          a.h6( 'Uptime' ),
          app.http(
            `/api/-/containers/engine/${ name }/uptime`,
            ( result, el ) => el.$nodes = a.p( result.content )
          ),
          a.h6( 'Memory' ),
          app.http(
            `/api/-/containers/engine/${ name }/metrics/memory`,
            ( result, el ) => el.$nodes = x.appkit.list( result.content )
          ),
          a.h6( 'Network' ),
          app.http(
            `/api/-/containers/engine/${ name }/metrics/network`,
            ( result, el ) => el.$nodes = x.appkit.list( result.content )
          ),
        ] ),
        a.hr,
        a['div.container']( [
          a.h6( 'Services' ),
          app.http(
            `/api/-/containers/engine/${ name }/services/persistent/`,
            ( result, el ) => el.$nodes = [
              x.appkit.list( result.content ),
            ]
          ),
          a.br,
          app.http(
            `/api/-/containers/engine/${ name }/services/non_persistent/`,
            ( result, el ) => el.$nodes = x.appkit.list( result.content )
          ),
        ] ),
        a.hr,
        a['div.container']( [
          app.btn( 'GETs', (e,el) => el.nextSibling.$nodes = [
            [ a.h5( `/api/-/containers/engine/${ name }` ), app.http( `/api/-/containers/engine/${ name }` ), a.br ],
            [ a.h5( `/api/-/containers/engine/${ name }/blueprint` ), app.http( `/api/-/containers/engine/${ name }/blueprint` ), a.br ],
            [ a.h5( `/api/-/containers/engine/${ name }/build_report` ), app.http( `/api/-/containers/engine/${ name }/build_report` ), a.br ],
            [ a.h5( `/api/-/containers/engine/${ name }/logs` ), app.http( `/api/-/containers/engine/${ name }/logs` ), a.br ],
            [ a.h5( `/api/-/containers/engine/${ name }/ps` ), app.http( `/api/-/containers/engine/${ name }/ps` ), a.br ],
            [ a.h5( `/api/-/containers/engine/${ name }/state` ), app.http( `/api/-/containers/engine/${ name }/state` ), a.br ],
            [ a.h5( `/api/-/containers/engine/${ name }/icon_url` ), app.http( `/api/-/containers/engine/${ name }/icon_url` ), a.br ],
          ] ),
          a['app-test-btn-result'](),
        ] ),
        a.hr,

      ]
    }, {
      // placeholder: "Loading",
    } ),

  ] )

}
