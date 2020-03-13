app.login = controller => (a,x) => [
  a['div.d-flex.justify-content-center.mt-5'](
    app.form( {
      url: '/~/session',
      success: ( response, el ) => el.$send( 'app.authenticated' ),
      form: (f) => [
        f.input( { name: 'password', type: 'password', placeholder: 'Password' } ),
        f.submit( {
          label: app.icon( 'fas fa-sign-in-alt' ),
          button: { to: app.hourglass() },
        } ),
      ],
      formTag: { class: 'form-inline' },
    } )
  ),
]
