app.system.domains.remove = ( controller ) => (a,x) => [

  a.h5( 'Remove' ),

  app.http(
    '/~/~/system/domains/',
    ( response, el ) => response.json().then(
      domains => el.$nodes = [

        app.form( {
          // scope: 'api_vars',
          form: (f) => [

            f.field( {
              key: 'domain',
              label: false,
              layout: 'vertical',
              as: 'select',
              selections: Object.keys( domains ),
              placeholder: 'Select domain...',
              required: 'required',
            } ),

            f.buttons( {
              cancel: {
                onclick: () => controller.open( '..' ),
              }
            } ),

          ],
          formTag: {
            $init: function() {
              this.$off( 'submit: async submit' )
            },
            $on: { 'submit: custom submit': (e,el) => {
              e.preventDefault()
              if ( el.checkValidity() ) {
                let domain = el.$data().get('domain')
                el.$nodes = app.http(
                  `/~/~/system/domains/${ domain }`,
                  () => controller.open( '..' ),
                  {
                    method: 'DELETE',
                    placeholder: app.hourglass( `Removing domain...` )
                  }
                )

              }
            } }
          }
        } )

      ]
    )
  ),

]
