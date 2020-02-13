app.applications.blueprint = controller => (a,x) => [

  app.http(
    `/~/applications/${ controller.params.application_id }/blueprint`,
    ( response, el ) => {
      response.json().then( blueprint => {

          let parseBlueprint = function( json ) {

            let object
            let message

            try { object = JSON.parse( json ) }
            catch(error) { message = error.message }

            if ( object ) {

              let blueprint = new ApplicationBlueprint( controller.params.application_id, object )

              return controller.routes( {
                '/?': app.applications.blueprint.show( blueprint ),
                '/metadata': app.applications.blueprint.metadata( blueprint ),
                '/base': app.applications.blueprint.base( blueprint ),
                '/ports': app.applications.blueprint.ports( blueprint ),
                '/scripts': app.applications.blueprint.scripts( blueprint ),
                '/external_repositories': app.applications.blueprint.external_repositories( blueprint ),
                '/system_packages': app.applications.blueprint.system_packages( blueprint ),
                '/installed_packages': app.applications.blueprint.installed_packages( blueprint ),
                '/required_modules': app.applications.blueprint.required_modules( blueprint ),
                '/service_configurations*': app.applications.blueprint.service_configurations( blueprint ),
                '/environment_variables*': app.applications.blueprint.environment_variables( blueprint ),
                '/template_files': app.applications.blueprint.template_files( blueprint ),
                '/replacement_strings': app.applications.blueprint.replacement_strings( blueprint ),
                '/database_seed': app.applications.blueprint.database_seed( blueprint ),
                '/file_write_permissions': app.applications.blueprint.file_write_permissions( blueprint ),
                '/persistent_directories': app.applications.blueprint.persistent_directories( blueprint ),
                '/persistent_files': app.applications.blueprint.persistent_files( blueprint ),
                '/components': app.applications.blueprint.components( blueprint ),
                '/workers': app.applications.blueprint.workers( blueprint ),
                '/actionators*': app.applications.blueprint.actionators( blueprint ),
                '/schedules*': app.applications.blueprint.schedules( blueprint ),
                '/rake_tasks': app.applications.blueprint.rake_tasks( blueprint ),
                '/custom_php_inis': app.applications.blueprint.custom_php_inis( blueprint ),
                '/apache_htaccess_files': app.applications.blueprint.apache_htaccess_files( blueprint ),
                '/apache_httpd_configurations': app.applications.blueprint.apache_httpd_configurations( blueprint ),
              } )

            } else {

              return a['.error']( message )

            }

        }




        el.$nodes = [

          a['div.clearfix']( [

            a['div.btn-group.float-right']( [
              app.up( controller, 'Return to application' ),
            ] ),

          ] ),

          parseBlueprint( blueprint.content )

        ]



      } )



    },
    {
      placeholder: a.p(
        app.icon( 'fa fa-spinner fa-spin', 'Loading application blueprint' )
      )
    }
  )

]
