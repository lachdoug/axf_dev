app.system.install.url = controller => (a,x) => [
  a.h5( "URL side load" ),
  app.form( {
    // url: '/~/~/system/control/base_os/shutdown',
    action: ( submition ) => {
      let url = submition.data.url
      controller.open( '../new', { label: 'Side load', blueprint_url: url } )
    },
    form: (f) => [
      // f.field( { key: 'user_name', value: 'engines', type: 'hidden' } ),
      f.input( { name: 'install[url]', placeholder: 'URL', type: 'url', required: 'true' } ),
      a.br,
      f.btns( controller ),
      // f.buttons( {
      //   cancel: {
      //     onclick: () => controller.open( '..' ),
      //   },
      //   submit: {
      //     onclick: (e,el) => {
      //       e.preventDefault()
      //       let form = el.$('^form')
      //       form.reportValidity()
      //       let url = form.$('input').value
      //       controller.open( '../new', { label: 'Side load', blueprint_url: url } )
      //     },
      //   },
      // } ),
    ]
  } )
]
