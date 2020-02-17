app.applications.new = (controller) => (a,x) => [

  a.h3('New application'),

  app.form( {
    url: '/~/applications',
    scope: 'application',
    form: (f) => [
      f.field( {
        key: 'url',
        as: 'input/url',
        label: false,
        layout: 'vertical',
        placeholder: 'Repo URL',
      } ),
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' )
        }
      } ),
    ],
    success: ( response, el ) => {
      response.json().then( application => {
        controller.open( `/applications/${ application.id }` )
      } )
    }
  } )

]
