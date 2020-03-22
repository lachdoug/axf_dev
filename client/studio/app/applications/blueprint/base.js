app.applications.blueprint.base = blueprint => controller => (a,x) => [

  a.h5( 'Base' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.base,
    (f) => [
      f.field( {
        key: 'inherit',
        as: 'input/url',
      } ),
      f.field( {
        key: 'name',
        label: 'Default name',
        required: true,
      } ),
      f.field( {
        key: 'framework',
        required: true,
        as: 'combobox',
        selections: app.selections.frameworks,
      } ),
      f.field( {
        key: 'deployment_type',
        required: true,
        as: 'select',
        selections: {
          web: 'Web',
          worker: 'Worker'
        },
      } ),
      f.field( {
        key: 'http_protocol',
        required: true,
        as: 'select',
        selections: {
          https_and_http: "HTTPS and HTTP",
          http_and_https: "HTTP and HTTPS",
          https_only: "HTTPS only",
          http_only: "HTTP only",
        },
        dependent: {
          key: 'deployment_type',
          value: 'web',
        },
      } ),
      f.field( {
        key: 'framework_port_override',
        as: 'input/number',
        dependent: {
          key: 'deployment_type',
          value: 'web',
        },
      } ),
      f.field( {
        key: 'web_root_directory',
        dependent: {
          key: 'deployment_type',
          value: 'web',
        },
      } ),
      f.field( {
        key: 'username',
      } ),
      f.field( {
        key: 'user_primary_group',
      } ),
      f.field( {
        key: 'sudo_list',
        as: 'code',
      } ),
      f.field( {
        key: 'continuous_deployment',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'memory',
        as: 'one',
        form: (ff) => [
          ff.field( {
            key: 'required',
            as: 'input/number',
            required: true,
          } ),
          ff.field( {
            key: 'recommended',
            as: 'input/number',
          } ),
        ]
      } ),
      f.field( {
        key: 'first_run_url',
        as: 'input/url',
        label: 'First run URL'
      } ),
      f.field( {
        key: 'installation_report',
        as: 'markdown',
      } ),

    ]

  ),

]
