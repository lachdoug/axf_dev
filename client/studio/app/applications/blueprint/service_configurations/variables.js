app.applications.blueprint.service_configurations.variables = blueprint => controller => (a,x) => {

  let serviceConfiguration = blueprint.serviceConfigurations.find( controller.params.service_configuration_id )

  return [

    a.h5( `Service configuration ${ service_configuration.id + 1 } params` ),
    a.hr,

    app.blueprintForm(
      controller,
      blueprint,
      serviceConfiguration.variables,
      (f) => [
        f.field( {
          key: 'params',
          as: 'many',
          layout: 'vertical',
          label: false,
          form: (ff) => [
            ff.field( {
              key: 'name',
              as: 'input/hidden',
            } ),
            ff.field( {
              key: 'value',
              label: ff.object.name,
            } ),
          ]
        } ),
      ]

    ),

  ]

}
