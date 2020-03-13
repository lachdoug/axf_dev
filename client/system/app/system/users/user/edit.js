app.system.users.user.edit = controller => (a,x) => {

  let uid = controller.params.user_uid

  return [

    app.http(
      '/~/~/system/uadmin/users/accounts/',
      ( account, el ) => el.$nodes = app.form( {
        url: '/~/~/system/uadmin/users/accounts/',
        method: 'PUT',
        scope: 'api_vars',
        success: () => controller.open( '..', controller.query ),
        object: {
          uid: uid,
          account: account,
        },
        form: f => [
          f.field( {
            key: 'uid',
            as: 'input/hidden',
          } ),
          f.field( {
            key: 'account',
            as: 'one',
            layout: 'vertical',
            label: false,
            form: ff => ff.row( {
              columns: [
                ff.field( {
                  key: 'first_name',
                  layout: 'vertical',
                } ),
                ff.field( {
                  key: 'last_name',
                  layout: 'vertical',
                } ),
              ],
            } ),

          } ),
          f.buttons(),
        ]
      } ),
      {
        query: { uid: uid },
        placeholder: app.hourglass( 'Loading account' ),
      }
    ),

  ]

}
