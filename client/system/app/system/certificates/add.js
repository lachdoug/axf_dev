app.system.certificates.add = controller => (a,x) => [

  a.h5( 'Add' ),

  app.form( {
    url: '/~/~/system/certs/',
    success: () => controller.open( '..' ),
    scope: 'api_vars',
    form: (f) => [

      f.field( {
        key: 'certificate_name',
        label: false,
        layout: 'vertical',
        required: 'required',
      } ),

      f.field( {
        key: 'self_hosted',
        as: 'check',
        checked: 'true',
        // unchecked: 'false',
      } ),

      f.field( {
        key: 'internal_only',
        as: 'check',
        checked: 'true',
        // unchecked: 'false',
      } ),

      f.buttons(),

    ],

    // formTag: {
    //   $init: function() {
    //     this.$off( 'submit: async submit' )
    //   },
    //   $on: { 'submit: custom submit': (e,el) => {
    //     e.preventDefault()
    //     if ( el.checkValidity() ) {
    //       let domain = el.$data().get('domain')
    //       el.$nodes = app.http(
    //         `/~/~/system/domains/${ domain }`,
    //         () => controller.open( '..' ),
    //         {
    //           method: 'DELETE',
    //           placeholder: app.hourglass( `Removing domain...` )
    //         }
    //       )
    //
    //     }
    //   } }
    // }
  } )

]
