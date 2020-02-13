app.settings = ( controller ) => (a,x) => [

  // a.h3( 'Home' ),
  app.http(
    '/~/settings',
    ( response, el ) => {
      let settings = response.json() || []

      el.$nodes = [

        a.h3( 'Settings' ),

        a['div.clearfix']( a['div.btn-group.float-right']( [
          app.up( controller, 'Return to home' ),
        ] ) ),

        a['div.input-group']( [
          a['div.input-group-prepend'](
            a['div.input-group-text']( 'SSH public key' )
          ),
          a.input( {
            name: 'public_key',
            value: settings.public_key,
            class: 'form-control',
          } ),
          a['div.input-group-append'](
            app.button( {
              label: app.icon( 'fa fa-copy' ),
              class: 'btn btn-primary',
              title: 'Copy to clipboard',
              onclick: (e,el) => {
                let keyText = el.$('^.input-group [name="public_key"]')
                keyText.focus(),
                keyText.select(),
                document.execCommand('copy')
              },
            } )
          ),
        ] ),

      ]

    }
  )
]
