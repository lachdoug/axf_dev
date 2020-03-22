app.applications.blueprint.apache_htaccess_files = blueprint => controller => (a,x) => [

  a.h5( 'Apache htaccess files' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.apacheHtaccessFiles,
    (f) => [
      f.field( {
        key: 'apache_htaccess_files',
        as: 'many',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'directory',
          } ),
          ff.field( {
            key: 'content',
            as: 'code',
            layout: 'vertical',
            label: false,
          } ),
        ]
      } ),

    ]

  ),

]
