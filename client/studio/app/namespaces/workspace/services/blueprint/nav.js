app.namespaces.workspace.services.blueprint.nav = ( blueprint, controller ) => (a,x) => a['ul.nav.flex-column']( [

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
      label: app.icon( 'fa fa-caret-right', 'Disposition' ),
      onclick: (e,el) => {
        controller.open('disposition')
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
      label: app.icon( 'fa fa-caret-right', 'Included files' ),
      onclick: (e,el) => {
        controller.open('included_files')
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
      label: app.icon( 'fa fa-caret-right', 'Target environment variables' ),
      onclick: (e,el) => {
        controller.open('target_environment_variables')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Constants' ),
      onclick: (e,el) => {
        controller.open('constants')
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
      label: app.icon( 'fa fa-caret-right', 'Consumers' ),
      onclick: (e,el) => {
        controller.open('consumers')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Consumer scripts' ),
      onclick: (e,el) => {
        controller.open('consumer_scripts')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Consumer params' ),
      onclick: (e,el) => {
        controller.open('consumer_params')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Custom files' ),
      onclick: (e,el) => {
        controller.open('custom_files')
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
      label: app.icon( 'fa fa-caret-right', 'Configurators' ),
      onclick: (e,el) => {
        controller.open('configurators')
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
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Service dependencies' ),
      onclick: (e,el) => {
        controller.open('service_dependencies')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Guises' ),
      onclick: (e,el) => {
        controller.open('guises')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Capabilities' ),
      onclick: (e,el) => {
        controller.open('capabilities')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Log directories' ),
      onclick: (e,el) => {
        controller.open('log_directories')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Build dependencies' ),
      onclick: (e,el) => {
        controller.open('build_dependencies')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'File permissions' ),
      onclick: (e,el) => {
        controller.open('file_permissions')
      },
    } )
  ),
  a['li.nav-item'](
    app.button( {
      buttonTag: {
        class: 'btn btn-sm app-btn',
      },
      label: app.icon( 'fa fa-caret-right', 'Soft links' ),
      onclick: (e,el) => {
        controller.open('soft_links')
      },
    } )
  ),

] ),
