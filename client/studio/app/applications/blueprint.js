app.applications.blueprint = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/blueprint`,
    ( blueprint, el ) => {

      let blueprintObject = new ApplicationBlueprint( controller.params.application_id, blueprint.object )

      el.$nodes = [

        controller.routes( {
          '/?': app.applications.blueprint.show( blueprintObject ),
          '/metadata': app.applications.blueprint.metadata( blueprintObject ),
          '/base': app.applications.blueprint.base( blueprintObject ),
          '/ports': app.applications.blueprint.ports( blueprintObject ),
          '/scripts': app.applications.blueprint.scripts( blueprintObject ),
          '/external_repositories': app.applications.blueprint.external_repositories( blueprintObject ),
          '/system_packages': app.applications.blueprint.system_packages( blueprintObject ),
          '/installed_packages': app.applications.blueprint.installed_packages( blueprintObject ),
          '/required_modules': app.applications.blueprint.required_modules( blueprintObject ),
          '/service_configurations*': app.applications.blueprint.service_configurations( blueprintObject ),
          '/environment_variables*': app.applications.blueprint.environment_variables( blueprintObject ),
          '/template_files': app.applications.blueprint.template_files( blueprintObject ),
          '/replacement_strings': app.applications.blueprint.replacement_strings( blueprintObject ),
          '/database_seed': app.applications.blueprint.database_seed( blueprintObject ),
          '/file_write_permissions': app.applications.blueprint.file_write_permissions( blueprintObject ),
          '/persistent_directories': app.applications.blueprint.persistent_directories( blueprintObject ),
          '/persistent_files': app.applications.blueprint.persistent_files( blueprintObject ),
          '/components': app.applications.blueprint.components( blueprintObject ),
          '/workers': app.applications.blueprint.workers( blueprintObject ),
          '/actionators*': app.applications.blueprint.actionators( blueprintObject ),
          '/schedules*': app.applications.blueprint.schedules( blueprintObject ),
          '/rake_tasks': app.applications.blueprint.rake_tasks( blueprintObject ),
          '/custom_php_inis': app.applications.blueprint.custom_php_inis( blueprintObject ),
          '/apache_htaccess_files': app.applications.blueprint.apache_htaccess_files( blueprintObject ),
          '/apache_httpd_configurations': app.applications.blueprint.apache_httpd_configurations( blueprintObject ),
          '/dialogues*': app.applications.blueprint.dialogues( blueprintObject ),
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
