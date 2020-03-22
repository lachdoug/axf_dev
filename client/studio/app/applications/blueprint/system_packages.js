app.applications.blueprint.system_packages = blueprint => controller => (a,x) => [

  a.h5( 'System packages' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.systemPackages,
    (f) => [
      f.field( {
        key: 'system_packages',
        as: 'table',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'package',
            required: true,
          } ),
          ff.field( {
            key: 'version',
          } ),
        ]
      } ),

    ]

  ),

]
