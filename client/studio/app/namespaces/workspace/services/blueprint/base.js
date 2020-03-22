app.namespaces.workspace.services.blueprint.base = blueprint => controller => (a,x) => [

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
        key: 'cardinal',
      } ),
      f.field( {
        key: 'publisher_namespace',
        label: 'Namepsace',
        readonly: true,
      } ),
      f.field( {
        key: 'type_path',
        // label: 'Type',
        required: true,
      } ),
      f.field( {
        key: 'service_handle_field',
        required: true,
      } ),
      f.field( {
        key: 'parent_image',
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
        key: 'hostname',
      } ),
      f.field( {
        key: 'domain_name',
      } ),
      f.field( {
        key: 'set_state',
        as: 'select',
        selections: [ "running", "stopped", "nocontainer" ],
      } ),
      f.field( {
        key: 'default_stop_timeout',
      } ),
      f.field( {
        key: 'restart_policy',
        as: 'select',
        placeholder: ' ',
        selections: [ "on-failure", "unless-stopped", "always", "no" ],
      } ),
      f.field( {
        key: 'restart_attempts',
        dependent: {
          key: 'restart_policy',
          value: 'on-failure',
        },
      } ),

      f.field( {
        key: 'run_as_user',
      } ),
      f.field( {
        key: 'user_id',
      } ),
      f.field( {
        key: 'user_primary_group',
      } ),
      f.field( {
        key: 'create_user',
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
        key: 'source_files',
        as: 'input/url',
      } ),

    ]

  ),

]
