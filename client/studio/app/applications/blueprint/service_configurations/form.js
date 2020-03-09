app.applications.blueprint.service_configurations.
form = ( controller, blueprint, serviceConfiguration ) => (a,x) => {

  let heading = serviceConfiguration.isNew ?
    'New service configuration':
    `Edit service configuration ${ serviceConfiguration.id + 1 }`

  return [

    a.h5( heading ),
    a.hr,
    a.h5( `${ serviceConfiguration.namespace } ${ serviceConfiguration.type }` ),
    app.http(
      `/~/consumables/namespaces/types/query`,
      ( params, el ) => el.$nodes = [

        app.blueprintForm(
          controller,
          blueprint,
          serviceConfiguration,
          f => [

            f.field( {
              key: 'publisher_namespace',
              type: 'hidden',
            } ),

            f.field( {
              key: 'type_path',
              type: 'hidden',
            } ),

            f.field( {
              key: 'variables',
              as: 'one',
              label: false,
              layout: 'vertical',
              form: (ff) => params.
                map( param =>
                  ff.field( {
                    key: param.name,
                    label:  param.name,
                    value: param.value,
                  } )
              ),
            } ),

          ]

        ),

      ],
      {
        query: {
          namespace: serviceConfiguration.namespace,
          type: serviceConfiguration.type,
        },
        placeholder: a.p(
          app.hourglass( 'Loading service configuration' )
        )
      }
    ),

  ]

}
