app.container.memory = type => controller => (a,x) => {

  const name = controller.params.name

  let path = `/~/~/containers/${
    type === 'service' ? 'service' : 'engine'
  }/${ name }`

  return [

    a.h5( 'Memory' ),
    app.http(
      `${ path }/metrics/memory`,
      ( memory, el ) => {
        el.$nodes = [
          app.form( {
            url: `${ path }/properties/runtime`,
            object: { memory: memory.limit / 1048576 },
            scope: 'api_vars',
            success: () => controller.open( '..' ),
            form: (f) =>  [
              f.field( {
                key: 'memory',
                as: 'input/number',
                hint: 'Megabytes',
                label: false,
                layout: 'vertical',
              } ),
              f.btns( controller ),
            ]
          } )
        ]
      },
      {
        placeholder: app.hourglass( 'Loading memory' )
      }
    ),

  ]

}
