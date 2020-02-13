app.applications.blueprint.service_configurations.
form = ( controller, blueprint, serviceConfiguration ) => (a,x) => {

  let heading = serviceConfiguration.isNew ?
    'New service configuration':
    `Edit service configuration ${ serviceConfiguration.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      serviceConfiguration,
      (f) => [

        f.field( {
          key: 'publisher_namespace',
          required: true,
          as: 'select',
          selections: [],
        } ),

        f.field( {
          key: 'type_path',
          required: true,
          as: 'select',
          selections: [],
        } ),

      ]

    ),

  ]

}
