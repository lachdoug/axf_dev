app.namespaces.workspace.services.blueprint = namespace => controller => (a,x) => [

  app.http(
    `/~/namespaces/${ controller.params.namespace_id }/workspace/services/${ controller.params.service_id }/blueprint`,
    ( blueprint, el ) => {

      let blueprintObject = new ServiceBlueprint( namespace, controller.params.service_id, blueprint.object )

      el.$nodes = [

        controller.routes( {
          '/?': app.namespaces.workspace.services.blueprint.show( blueprintObject ),
          '/metadata': app.applications.blueprint.metadata( blueprintObject ),
          '/base': app.namespaces.workspace.services.blueprint.base( blueprintObject ),
          '/disposition': app.namespaces.workspace.services.blueprint.disposition( blueprintObject ),
          '/ports': app.applications.blueprint.ports( blueprintObject ),
          '/scripts': app.namespaces.workspace.services.blueprint.scripts( blueprintObject ),
          '/external_repositories': app.applications.blueprint.external_repositories( blueprintObject ),
          '/system_packages': app.applications.blueprint.system_packages( blueprintObject ),
          '/installed_packages': app.applications.blueprint.installed_packages( blueprintObject ),
          '/required_modules': app.applications.blueprint.required_modules( blueprintObject ),
          '/included_files': app.namespaces.workspace.services.blueprint.included_files( blueprintObject ),
          '/service_configurations': app.applications.blueprint.service_configurations( blueprintObject ),
          '/environment_variables*': app.applications.blueprint.environment_variables( blueprintObject ),
          '/target_environment_variables': app.namespaces.workspace.services.blueprint.target_environment_variables( blueprintObject ),
          '/constants': app.namespaces.workspace.services.blueprint.constants( blueprintObject ),
          '/template_files': app.applications.blueprint.template_files( blueprintObject ),
          '/replacement_strings': app.applications.blueprint.replacement_strings( blueprintObject ),
          '/persistent_directories': app.applications.blueprint.persistent_directories( blueprintObject ),
          '/consumers': app.namespaces.workspace.services.blueprint.consumers( blueprintObject ),
          '/consumer_scripts': app.namespaces.workspace.services.blueprint.consumer_scripts( blueprintObject ),
          '/consumer_params*': app.namespaces.workspace.services.blueprint.consumer_params( blueprintObject ),
          '/custom_files': app.namespaces.workspace.services.blueprint.custom_files( blueprintObject ),
          '/actionators*': app.applications.blueprint.actionators( blueprintObject ),
          '/configurators*': app.namespaces.workspace.services.blueprint.configurators( blueprintObject ),
          '/schedules*': app.applications.blueprint.schedules( blueprintObject ),
          '/service_dependencies': app.namespaces.workspace.services.blueprint.service_dependencies( blueprintObject ),
          '/guises': app.namespaces.workspace.services.blueprint.guises( blueprintObject ),
          '/capabilities': app.namespaces.workspace.services.blueprint.capabilities( blueprintObject ),
          '/log_directories': app.namespaces.workspace.services.blueprint.log_directories( blueprintObject ),
          '/build_dependencies': app.namespaces.workspace.services.blueprint.build_dependencies( blueprintObject ),
          '/file_permissions': app.namespaces.workspace.services.blueprint.file_permissions( blueprintObject ),
          '/soft_links': app.namespaces.workspace.services.blueprint.soft_links( blueprintObject ),
        } )

      ]

    },
    {
      placeholder: a.p(
        app.hourglass( 'Loading blueprint' )
      )
    }
  )

]
