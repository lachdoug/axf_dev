app.applications.blueprint.ports = blueprint => controller => (a,x) => [

  a.h5( 'Ports' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.ports,
    (f) => [
      f.field( {
        key: 'ports',
        as: 'table',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'port',
            required: true,
          } ),
          ff.field( {
            key: 'external',
            required: true,
          } ),
          ff.field( {
            key: 'protocol',
            required: true,
            as: 'select',
            selections: {
              tcp: 'TCP',
              udp: 'UDP',
              tcp_and_udp: 'TCP and UDP',
            },
          } ),
        ]
      } ),

    ]

  ),

]
