app.system.users.new = controller => (a,x) => [

  app.form( {
    url: '/~/~/system/uadmin/users/accounts/',
    scope: 'api_vars[account]',
    form: f => [
      f.row( {
        columns: [
          f.field( {
            key: 'first_name',
            layout: 'vertical',
          } ),
          f.field( {
            key: 'last_name',
            layout: 'vertical',
          } ),
        ],
      } ),
      f.field( {
        key: 'uid',
        label: 'UID username',
        layout: 'vertical',
      } ),
      f.field( {
        key: 'password',
        as: 'password',
        confirmation: true,
        layout: 'vertical',
      } ),
      f.buttons(),
    ]
  } )

]
