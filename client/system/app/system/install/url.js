app.system.install.url = ( controller ) => (a,x) => [
  a.h5( "URL side load" ),
  app.form( {
    // url: '/~/~/system/control/base_os/shutdown',
    form: (f) => [
      // f.field( { key: 'user_name', value: 'engines', type: 'hidden' } ),
      f.input( { name: 'install[url]', placeholder: 'URL', type: 'url', required: 'true' } ),
      a.br,
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' ),
        },
        submit: {
          // label: app.icon( 'fa fa-check', 'OK' ),
          // class: 'btn btn-primary',
          onclick: (e,el) => {
            e.preventDefault()
            let form = el.$('^form')
            form.reportValidity()
            let url = form.$('input').value
            controller.open( '../new', { label: 'Side load', blueprint_url: url } )
          },
        },
      } ),
    ]
  } )
]
