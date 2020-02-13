class ApplicationBlueprint {

  constructor( id, object ) {
    this.id = id

    this.object = importApplicationBlueprint( object )
    let metadata = this.object.metadata || {}
    let software = this.object.software || {}
    let framworkSpecific = software.framework_specific || {}

    this.metadata = new ApplicationBlueprintMetadata( this, metadata.software || {} )
    this.base = new ApplicationBlueprintBase( this, software.base || {} )
    this.ports = new ApplicationBlueprintPorts( this, software.ports || [] )
    this.scripts = new ApplicationBlueprintScripts( this, software.scripts || {} )
    this.externalRepositories = new ApplicationBlueprintExternalRepositories( this, software.external_repositories || [] )
    this.systemPackages = new ApplicationBlueprintSystemPackages( this, software.system_packages || [] )
    this.installedPackages = new ApplicationBlueprintInstalledPackages( this, software.installed_packages || [] )
    this.requiredModules = new ApplicationBlueprintRequiredModules( this, software.required_modules || [] )
    this.serviceConfigurations = new ApplicationBlueprintServiceConfigurations( this, software.service_configurations || [] )
    this.environmentVariables = new ApplicationBlueprintEnvironmentVariables( this, software.environment_variables || [] )
    this.templateFiles = new ApplicationBlueprintTemplateFiles( this, software.template_files || [] )
    this.replacementStrings = new ApplicationBlueprintReplacementStrings( this, software.replacement_strings || [] )
    this.databaseSeed = new ApplicationBlueprintDatabaseSeed( this, software.database_seed || {} )
    this.fileWritePermissions = new ApplicationBlueprintFileWritePermissions( this, software.file_write_permissions || [] )
    this.persistentDirectories = new ApplicationBlueprintPersistentDirectories( this, software.persistent_directories || [] )
    this.persistentFiles = new ApplicationBlueprintPersistentFiles( this, software.persistent_files || [] )
    this.components = new ApplicationBlueprintComponents( this, software.components || {} )
    this.workers = new ApplicationBlueprintWorkers( this, software.workers || {} )
    this.actionators = new ApplicationBlueprintActionators( this, software.actionators || [] )
    this.schedules = new ApplicationBlueprintSchedules( this, software.schedules || [] )
    this.rakeTasks = new ApplicationBlueprintRakeTasks( this, framworkSpecific.rake_tasks || [] )
    this.customPhpInis = new ApplicationBlueprintCustomPhpInis( this, framworkSpecific.custom_php_inis || [] )
    this.apacheHtaccessFiles = new ApplicationBlueprintApacheHtaccessFiles( this, framworkSpecific.apache_htaccess_files || [] )
    this.apacheHttpdConfigurations = new ApplicationBlueprintApacheHttpdConfigurations( this, framworkSpecific.apache_httpd_configurations || [] )
  }

  get apiEndpoint() {
    return `/~/applications/${ this.id }/blueprint`
  }

  get framework() {
    return this.base.object.framework
  }

  get hasRakeTasks() {
    return [ 'rails4', 'rails5', 'sinatra' ].includes( this.framework )
  }

  get hasCustomPhpInis() {
    return [ 'apache_php', 'apache_php56' ].includes( this.framework )
  }

  get hasApacheHtaccessFiles() {
    return [ 'apache_php', 'apache_php56' ].includes( this.framework )
  }

  get hasApacheHttpdConfigurations() {
    return [ 'apache_php', 'apache_php56' ].includes( this.framework )
  }

  get output() {

    let object = {
      metadata: {
        software: this.metadata.output(),
      },
      software: {
        base: this.base.output(),
        ports: this.ports.output(),
        scripts: this.scripts.output(),
        external_repositories: this.externalRepositories.output(),
        system_packages: this.systemPackages.output(),
        installed_packages: this.installedPackages.output(),
        required_modules: this.requiredModules.output(),
        service_configurations: this.serviceConfigurations.output(),
        environment_variables: this.environmentVariables.output(),
        template_files: this.templateFiles.output(),
        replacement_strings: this.replacementStrings.output(),
        database_seed: this.databaseSeed.output(),
        file_write_permissions: this.fileWritePermissions.output(),
        persistent_directories: this.persistentDirectories.output(),
        persistent_files: this.persistentFiles.output(),
        components: this.components.output(),
        workers: this.workers.output(),
        actionators: this.actionators.output(),
        schedules: this.schedules.output(),
        framework_specific: {
         rake_tasks: this.rakeTasks.output(),
         custom_php_inis: this.customPhpInis.output(),
         apache_htaccess_files: this.apacheHtaccessFiles.output(),
         apache_httpd_configurations: this.apacheHttpdConfigurations.output(),
        },
      },
      schema: {
        type: 'app_blueprint',
        version: { major: 0, minor: 1 },
        origin: 'Engines Developer Studio 0.3'
      },

    }

    return ax.x.lib.object.compact( JSON.parse( JSON.stringify( object) ) )

  }

}





function importApplicationBlueprint( object ) {

  let dig = ax.x.lib.object.dig

  let schema = object.schema || {}
  let type = schema.type

  if ( type === 'app_blueprint' ) {

    let version = schema.version || {}

    let major = Number( version.major )
    let minor = Number( version.minor )

    if ( major === 0 && minor === 1 ) {

      // Current version, so do nothing
      return object

    } else if ( major === 1 && minor === 0 ) {

      // NASTY HACK:
      // Some v0.1 blueprints were incorrectly marked as v1.0 by EDSv0.2
      // v1.0 doesn't exist yet, so handle v1.0 blueprints as v0.1 blueprints
      return object

    } else {

      // TODO: import old versions

      ax.throw( `Unable to import this blueprint schema.` )

    }

  } else {

    ax.throw( `Invalid blueprint type. Must be application blueprint.` )

  }

}
