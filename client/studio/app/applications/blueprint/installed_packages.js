app.applications.blueprint.installed_packages = blueprint => controller => (a,x) => [

  a.h5( 'Installed packages' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.installedPackages,
    (f) => [
      f.field( {
        key: 'installed_packages',
        as: 'many',
        layout: 'vertical',
        label: false,
        form: (ff) => [
          ff.field( {
            key: 'name',
            required: true,
          } ),
          ff.field( {
            key: 'download_type',
            as: 'select',
            selections: [ "http(s)", "git", "ftp" ],
          } ),
          ff.field( {
            key: 'command_options',
          } ),
          ff.field( {
            key: 'source_url',
            as: 'input/url',
            label: 'Source URL',
          } ),
          ff.field( {
            key: 'destination',
            hint: 'Relative to /home/app (defaults /home/app).',
          } ),
          ff.field( {
            key: 'extraction_command',
          } ),
          ff.field( {
            key: 'path_to_extracted',
          } ),
          ff.field( {
            key: 'authentication',
            as: 'select',
            placeholder: 'None',
            selections:  {
              credentials: 'Credentials - username and password',
              key: 'Key'
            }
          } ),
        ]
      } ),

    ]

  ),

]
