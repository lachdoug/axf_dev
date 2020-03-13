app.system.users.index = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
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

        accounts.length ?
        accounts.map( account => a.div( app.btn (
          app.icon(
            'fa fa-caret-right',
            [
              account.name,
              a.small( account.uid ),
            ]
          ),
          () => controller.open( 'query', { user_uid: account.uid } )
        ) ) ) :
        a.i( 'None' ),

      ]
    },
    {
      placeholder: app.hourglass( 'Loading accounts' ),
    }
  ),

]
