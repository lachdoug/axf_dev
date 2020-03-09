app.system.users.index = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),

  app.http(
    '/~/~/system/uadmin/users/accounts',
    ( accounts, el ) => {
      el.$nodes = [

        app.btn(
          app.icon( 'fa fa-plus', 'New' ),
          (e,el) => controller.open( 'new' )
        ),

        accounts.map( account => a.div( app.btn (
          app.icon(
            'fa fa-caret-right',
            [
              account.name,
              a.small( account.uid ),
            ]
          ),
          () => controller.open( account.uid )
        ) ) ),

        //
        // Object.values( domains ).length == 0 ? a.i( 'None' ) : null,
        // a.ul( Object.values( domains ).map(
        //   domain => a.li( [
        //     domain.domain_name || a['.error']( 'Missing name.' ),
        //     a.small( [
        //       domain.self_hosted ? 'self-hosted' : null,
        //       domain.internal_only ? 'internal' : null,
        //     ] ),
        //     domain.domain_name === defaultDomain ?
        //       app.icon( 'fas fa-star' ) : null
        //   ] )
        // ) ),

      ]
    }
  ),

  // app.http(
  //   '/~/~/system/domains/',
  //   ( domains, el ) => el.$nodes = [
  //
  //     app.http(
  //       '/~/~/system/config/default_domain',
  //       ( defaultDomain, el ) => el.$nodes =
  //     ),
  //
  //   ]
  // ),

]
