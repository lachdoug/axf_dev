app.applications.blueprint.service_configurations.new_namespace = blueprint => controller => (a,x) => [

  a.h5( 'New service configuration namespace' ),

  app.http(
    `/~/consumables/namespaces`,
    ( namespaces, el ) => el.$nodes = [

      app.form( {
        form: (f) => [
          f.field( {
            key: 'namespace',
            required: true,
            as: 'select',
            label: false,
            layout: 'vertical',
            selections: namespaces,
          } ),
          app.button( {
            label: app.icon( 'fa fa-times', 'Cancel' ),
            title: 'Cancel',
            class: 'btn btn-secondary',
            onclick: (e,el) => {
              controller.open( '..' )
            }
          } ),
          ' ',
          app.button( {
            label: app.icon( 'fa fa-arrow-right', 'Next' ),
            title: 'Next',
            class: 'btn btn-primary',
            onclick: (e,el) => {
              controller.open(
                '../new_type',
                { namespace: el.$('^form select').value },
              )
            }
          } ),

        ]
      } ),

    ],
    {
      placeholder: a.p(
        app.hourglass( 'Loading namespaces' )
      )
    }
  ),

]
