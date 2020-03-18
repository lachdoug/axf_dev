app.system.users.user.show = controller => (a,x) => [

  a['div.clearfix'](
    a['div.float-right']( [
      app.close( controller, 'Close' ),
    ] )
  ),
  a.br,

  app.http(
    '/~/~/system/uadmin/users/accounts/',
    ( account, el ) => el.$nodes = [

      a['div.float-right'](
        app.btn(
          app.icon( 'fas fa-address-card', 'Name' ),
          () => controller.open( 'edit', controller.query ),
        ),
      ),
      a.h5( account.name, { class: 'pt-2' } ),
      a.hr,

      a['div.float-right'](
        app.btn(
          app.icon( 'fas fa-user-friends', 'Groups' ),
          () => controller.open( 'groups', controller.query ),
        ),
      ),
      account.groups.length ?
      x.output( account.groups ) :
      a.div( a.i( 'No groups' ), { class: 'pt-2' } ),
      a.hr,

      account.email.mailbox ? [
        a['div.float-right'](
          app.btn(
            app.icon( 'fas fa-envelope-square', 'Mailbox' ),
            () => controller.open( 'mailbox' )
          )
        ),
        a.div( a.strong( account.email.mailbox ), { class: 'pt-2' } ),
        a.br,
        a['div.float-right'](
          app.btn(
            app.icon( 'fas fa-share-square', 'Aliases' ),
            () => controller.open( 'aliases' )
          )
        ),
        account.email.aliases.length ?
        x.output( account.email.aliases ) :
        a.div( a.i( 'No aliases' ), { class: 'pt-2' } ),
        a.br,
        a['div.float-right'](
          app.btn(
            app.icon( 'far fa-list-alt', 'Lists' ),
            () => controller.open( 'lists' )
          )
        ),
        account.email.distribution_groups.length ?
        x.output( account.email.distribution_groups ) :
        a.div( a.i( 'No lists' ), { class: 'pt-2' } ),

      ] : [
        a.i( 'Email not enabled', { class: 'pt-2' } ),
        a['div.float-right'](
          app.btn(
            app.icon( 'fas fa-mail-bulk', 'Enable' ),
            () => controller.open( 'enable' )
          )
        ),
      ],

    ],
    {
      query: { uid: controller.params.user_uid },
      placeholder: app.hourglass( 'Loading account' ),
    }
  ),

]
