app.system.domains.default = ( controller ) => (a,x) => [

  a.h5( 'Default' ),

  a( {
    $init: function(el) {
      Promise.all( [

        fetch( '/~/~/system/config/default_domain' ).
        then( response => response.text() ),

        fetch( '/~/~/system/domains/' ).
        then( response => response.json() ),

      ] ).then( ( [
        domain,
        domains
      ] ) => (
        el.$nodes = app.system.domains.default.form(
          controller,
          {
            default_domain: domain,
            domains: domains,
          }
        )
     )
    ).catch( error => {

      console.warn( 'Failed to load default domain.' )

    } )

    },
  } ),


]






// def domains
//   @system_api.get 'system/domains/'
// end
//
// def default_domain
//   @system_api.get 'system/config/default_domain'
// end
//
// def update_default_domain( args )
//   @system_api.post 'system/config/default_domain', args
// end
//
// def create_domain( args )
//   @system_api.post 'system/domains/', args
// end
//
// def domain(domain_name)
//   @system_api.get "system/domain/#{domain_name}"
// end
//
// def update_domain(domain_name, args)
//   @system_api.post "system/domain/#{domain_name}", args
// end
//
// def delete_domain(domain_name)
//   @system_api.delete "system/domains/#{domain_name}"
// end
