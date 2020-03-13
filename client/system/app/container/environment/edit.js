app.container.environment.edit = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }`

  return [

    app.http(
      path,
      ( container, el ) => {

        let fields = container.environments.map( environment_variable => ( {
          key: environment_variable.name,
          label: environment_variable.name,
          value: environment_variable.value || '',
          readonly: environment_variable.immutable || undefined,
        } ) )

        el.$nodes = app.form( {
          url: `${ path }/properties/runtime`,
          object: container,
          success: () => controller.open( '..' ),
          scope: 'api_vars',
          form: (f) => [

            fields.map( field => f.field( field ) ),
            f.buttons(),
          ]
        } )

      },
      {
        placeholder: app.hourglass( 'Loading environment' )
      }

    ),

  ]


}
