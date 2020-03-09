app.namespaces.workspace.services.commit = controller => (a,x) => [

  a.hg('Commit'),

  app.form( {
    url: `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/commit`,
    scope: 'commit',
    form: (f) => [
      f.field( {
        key: 'message',
        as: 'textarea',
        label: false,
        required: true,
        layout: 'vertical',
        placeholder: 'Message',
      } ),
      f.buttons( {
        cancel: {
          onclick: () => controller.open( '..' )
        }
      } ),
    ],
    success: ( result, el ) => el.$('^|appkit-asyncform').$nodes = [
      a.pre( result.message ),
      a['div.clearfix']( [
        app.button( {
          label: app.icon( 'fa fa-check', 'OK' ),
          onclick: (e,el) => {
            controller.open( '..' )
          },
          title: 'Return to services',
        } ),
      ] ),
    ]
  } )

]
