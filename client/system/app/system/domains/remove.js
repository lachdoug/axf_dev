app.system.domains.remove = controller => (a,x) => [

  a.h5( 'Remove' ),

  app.http(
    '/~/~/system/domains/',
    ( domains, el ) => el.$nodes = [

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

          f.buttons(),

        ],

        action: ( submition ) => {

          let domain = submition.data.domain

          submition.output.$nodes = app.http(
            `/~/~/system/domains/${ domain }`,
            () => controller.open( '..' ),
            {
              complete: submition.complete,
              method: 'DELETE'
            }
          )

        },

      } )

    ]
  ),

]
