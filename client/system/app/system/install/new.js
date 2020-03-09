app.system.install.new = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),

  a.p( [

    controller.params.icon_url ?
    a['div.application-icon']( a.img( null, {
      src: controller.params.icon_url
    } ) ) :
    null,

    controller.params.label

  ] ),

  app.http(
    `/~/~/engine_builder/resolve_blueprint?${
      x.lib.query.from.object( { blueprint_url: controller.params.blueprint_url } )
    }`,
    ( blueprint, el ) => el.$nodes = [

      a.p( app.hourglass( 'Loading installation'), { $init: el => {

        let services = blueprint.software.service_configurations || []

        Promise.all( [

          Promise.all(
            services.map( service => Promise.all( [

              fetch( `/~/~/service_manager/service_definitions/${
                service.publisher_namespace }/${ service.type_path
              }` ).
              then( response => response.json() ),

              fetch( `/~/~/service_manager/persistent_services/${
                service.publisher_namespace }/${ service.type_path
              }` ).
              then( response => response.json() ),

              fetch( `/~/~/service_manager/orphan_services/${
                service.publisher_namespace }/${ service.type_path
                }` ).
              then( response => response.json() ),

            ] ).then( ( [
              definition,
              shareable,
              adoptable
            ] ) => ( {
                definition: definition,
                shareable: shareable,
                adoptable: adoptable,
              } )
            ) )
          ),

          fetch( '/~/~/system/config/default_domain' ).
          then( response => response.text() ),

          fetch( '/~/~/system/domains/' ).
          then( response => response.json() ),

          fetch( '/~/~/system/reserved/engine_names' ).
          then( response => response.json() ),

          fetch( '/~/~/system/reserved/hostnames' ).
          then( response => response.json() ),

          fetch( '/~/~/system/control/base_os/locale' ).
          then( response => response.json() ),

          fetch( '/~/~/containers/engines/status' ).
          then( response => response.json() ),

        ] ).then( ( [
          services,
          default_domain,
          domains,
          reserved_engine_names,
          reserved_hostnames,
          locale,
          applications_status,
        ] ) => {

          let install = app.system.install.new.object( {
            blueprint_url: controller.params.blueprint_url,
            icon_url: controller.params.icon_url,
            blueprint: blueprint,
            default_domain: default_domain,
            domains: domains,
            reserved_engine_names: reserved_engine_names,
            reserved_hostnames: reserved_hostnames,
            locale: locale,
            services: services,
            applications_status: applications_status,
          } )

          el.$nodes = app.system.install.new.form( controller, install )

        } ).catch( error => {

          el.$nodes =  a.p( a['.error']( error.message ) )

        } )

      } } )

    ],
    {
      placeholder: app.hourglass( 'Loading blueprint')
    }
  )


]
