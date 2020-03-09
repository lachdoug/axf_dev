app.applications.blueprint.nav = ( blueprint, controller ) => (a,x) => a['ul.nav.flex-column']( [

  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Metadata' ),
      onclick: (e,el) => {
        controller.open('metadata')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Base' ),
      onclick: (e,el) => {
        controller.open('base')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Ports' ),
      onclick: (e,el) => {
        controller.open('ports')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Scripts' ),
      onclick: (e,el) => {
        controller.open('scripts')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'External repositories' ),
      onclick: (e,el) => {
        controller.open('external_repositories')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'System packages' ),
      onclick: (e,el) => {
        controller.open('system_packages')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Installed packages' ),
      onclick: (e,el) => {
        controller.open('installed_packages')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Required modules' ),
      onclick: (e,el) => {
        controller.open('required_modules')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Service configurations' ),
      onclick: (e,el) => {
        controller.open('service_configurations')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Environment variables' ),
      onclick: (e,el) => {
        controller.open('environment_variables')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Template files' ),
      onclick: (e,el) => {
        controller.open('template_files')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Replacement strings' ),
      onclick: (e,el) => {
        controller.open('replacement_strings')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Database seed' ),
      onclick: (e,el) => {
        controller.open('database_seed')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'File write permissions' ),
      onclick: (e,el) => {
        controller.open('file_write_permissions')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Persistent directories' ),
      onclick: (e,el) => {
        controller.open('persistent_directories')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Persistent files' ),
      onclick: (e,el) => {
        controller.open('persistent_files')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Components' ),
      onclick: (e,el) => {
        controller.open('components')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Workers' ),
      onclick: (e,el) => {
        controller.open('workers')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Actionators' ),
      onclick: (e,el) => {
        controller.open('actionators')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Schedules' ),
      onclick: (e,el) => {
        controller.open('schedules')
      },
    } )
  ),
  blueprint.hasRakeTasks ? a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Rake tasks' ),
      onclick: (e,el) => {
        controller.open('rake_tasks')
      },
    } )
  ) : null,
  blueprint.hasCustomPhpInis ? a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Custom PHP inis' ),
      onclick: (e,el) => {
        controller.open('custom_php_inis')
      },
    } )
  ) : null,
  blueprint.hasApacheHtaccessFiles ? a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Apache htaccess files' ),
      onclick: (e,el) => {
        controller.open('apache_htaccess_files')
      },
    } )
  ) : null,
  blueprint.hasApacheHttpdConfigurations ? a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Apache httpd configurations' ),
      onclick: (e,el) => {
        controller.open('apache_httpd_configurations')
      },
    } )
  ) : null,
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Stages' ),
      title: 'Stages',
      onclick: (e,el) => {
        controller.open('../stages')
      },
    } )
  ),

] ),
