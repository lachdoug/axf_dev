app.system.install.new.object = ( install ) => {

  // let blueprint = install.blueprint
  // let default_domain = install.default_domain
  // let engine_names = install.engine_names
  // let hostnames = install.hostnames
  // let locale = install.locale

  let dig = ( ...keys ) => ax.x.lib.object.dig( install.blueprint, keys )

  return {
    blueprint_url: install.blueprint_url,
    icon_url: install.icon_url,
    engine_name: dig ( 'software', 'base', 'name' ),
    memory: dig( 'software', 'base', 'memory', 'recommended' ),
    minimum_memory: dig( 'software', 'base', 'memory', 'required' ),
    country_code: install.locale.country_code,
    language_code: install.locale.lang_code,
    http_protocol: dig ( 'software', 'base', 'http_protocol' ),
    host_name: dig ( 'software', 'base', 'name' ),
    domain_name: install.default_domain,

    services: install.services.map( service => ( {
      publisher_namespace: service.definition.publisher_namespace,
      type_path: service.definition.type_path,
      create_types: {
        create_new: 'Create new',
        ...( service.shareable.length > 0 ?
          { share_existing: 'Share existing' } : {}
        ),
        ...( service.adoptable.length > 0 ?
          { adopt_orphan: 'Adopt orphan' } : {}
        ),
      },
      shareable: service.shareable.map( service => `${ service.parent_engine }/${ service.service_handle }` ),
      adoptable: service.adoptable.map( service => `${ service.parent_engine }/${ service.service_handle }` ),
    } ) ),

    environment_variables:  dig( 'software', 'environment_variables' ) || [],


    domains: Object.keys( install.domains ),
    application_names: Object.keys( install.applications_status ),


    reserved_engine_names: install.reserved_engine_names,
    reserved_hostnames: install.reserved_hostnames,
    locale: install.locale,

    blueprint: install.blueprint,
  }

}
