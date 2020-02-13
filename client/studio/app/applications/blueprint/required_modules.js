app.applications.blueprint.required_modules = blueprint => controller => (a,x) => [

  a.h5( 'Required modules' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.requiredModules,
    (f) => [
      f.field( {
        key: 'required_modules',
        as: 'table',
        addable: true,
        removable: true,
        sortable: true,
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'type',
            as: 'select',
            selections: app.selections.required_module_types,
          } ),
          ff.field( {
            key: 'os_package',
            label: 'OS package',
          } ),
          ff.field( {
            key: 'name',
            required: true,
          } ),
        ]
      } ),

    ]

  ),

]
