app.namespaces.new = controller => (a,x) => [

  a.h5( 'New services provider'),

  app.form( {
    url: '/~/namespaces/new',
    // object: branch,
    scope: 'namespace',
    form: (f) => [
      f.field( {
        key: 'url',
        label: false,
        layout: 'vertical',
        required: true,
        placeholder: 'Repo URL',
      } ),
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' )
        }
      } ),
    ],
    success: namespace => controller.open( `../${ namespace.id }` )
  } ),

]
