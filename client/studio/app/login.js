app.login = ( controller ) => (a,x) => a['app-login'](
  [
    a.h3( "Log in" ),
    app.form( {
      url: '/~/session',
      success: () => {
        nav.$setUser( true )
        controller.open()
      },
      when: {
        401: null,
      },
      form: (f) => [
        f.input( { name: 'name', value: 'Engines Studio', inputTag: { class: 'd-none' } } ),
        f.input( { name: 'password', type: 'password', placeholder: 'Password', required: 'required' } ),
        f.submit( {
          label: app.icon( 'fas fa-sign-in-alt' ),
          title: 'Log in',
          to: app.hourglass(),
          success: () => { controller.open() }
        } ),
      ],
      formTag: { class: 'form-inline' },
    } )
  ],
)
