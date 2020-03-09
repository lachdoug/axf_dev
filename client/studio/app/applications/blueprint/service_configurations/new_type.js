app.applications.blueprint.service_configurations.new_type = blueprint => controller => (a,x) => [

  a.h5( 'New service configuration type' ),
  a.h5( controller.params.namespace ),

  app.http(
    `/~/consumables/namespaces/query`,
    ( types, el ) => el.$nodes = [

      app.form( {
        form: (f) => [
          f.field( {
            key: 'type',
            required: true,
            as: 'select',
            label: false,
            layout: 'vertical',
            selections: types,
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
                '../new',
                {
                  namespace: controller.params.namespace,
                  type: el.$('^form select').value
                },
              )

            }
          } ),

        ]
      } ),

    ],
    {
      query: {
        namespace: controller.params.namespace,
      },
      placeholder: a.p(
        app.hourglass( 'Loading namespace' )
      )
    }
  ),

]
