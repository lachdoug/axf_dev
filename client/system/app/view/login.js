app.view.login = ( controller ) => (a,x) => a['app-login'](
  [
    a.h3( "Log in" ),
    app.form( {
      url: '/~/session',
      success: ( response, el ) => el.$send( 'app.authenticated' ),
      when: {
        401: null, // Perform default error behaviour on 401, i.e. Show error message.
      },
      form: (f) => [
        // f.field( { key: 'user_name', value: 'engines', type: 'hidden' } ),
        f.input( { name: 'password', type: 'password', placeholder: 'Password' } ),
        f.submit( {
          label: app.icon( 'fas fa-sign-in-alt' ),
          button: { to: app.hourglass() },
          // success: () => { controller.open() }
        } ),
      ],
      formTag: { class: 'form-inline' },
    } )
  ]
)
