class ServiceBlueprint {

  constructor( namespace, id, object ) {
    this.namespace = namespace
    this.id = id

    this.object = importServiceBlueprint( object )
    let metadata = this.object.metadata || {}
    let software = this.object.software || {}
    let framworkSpecific = software.framework_specific || {}

    this.metadata = new ApplicationBlueprintMetadata( this, metadata.software || {} )
    this.base = new ServiceBlueprintBase( this, software.base || {} )
    this.disposition = new ServiceBlueprintDisposition( this, software.disposition || {} )
    this.ports = new ApplicationBlueprintPorts( this, software.ports || [] )
    this.scripts = new ServiceBlueprintScripts( this, software.scripts || {} )
    this.externalRepositories = new ApplicationBlueprintExternalRepositories( this, software.external_repositories || [] )
    this.systemPackages = new ApplicationBlueprintSystemPackages( this, software.system_packages || [] )
    this.installedPackages = new ServiceBlueprintInstalledPackages( this, software.installed_packages || [] )
    this.requiredModules = new ApplicationBlueprintRequiredModules( this, software.required_modules || [] )
    this.includedFiles = new ServiceBlueprintIncludedFiles( this, software.included_files || [] )
    this.serviceConfigurations = new ApplicationBlueprintServiceConfigurations( this, software.service_configurations || [] )
    this.environmentVariables = new ApplicationBlueprintEnvironmentVariables( this, software.environment_variables || [] )
    this.targetEnvironmentVariables = new ServiceBlueprintTargetEnvironmentVariables( this, software.target_environment_variables || [] )
    this.constants = new ServiceBlueprintConstants( this, software.constants || [] )
    this.templateFiles = new ApplicationBlueprintTemplateFiles( this, software.template_files || [] )
    this.replacementStrings = new ApplicationBlueprintReplacementStrings( this, software.replacement_strings || [] )
    this.persistentDirectories = new ApplicationBlueprintPersistentDirectories( this, software.persistent_directories || [] )
    this.consumers = new ServiceBlueprintConsumers( this, software.consumers || {} )
    this.consumerScripts = new ServiceBlueprintConsumerScripts( this, software.consumer_scripts || [] )
    this.consumerParams = new ApplicationBlueprintEnvironmentVariables( this, software.consumer_params || [] )
    this.customFiles = new ServiceBlueprintCustomFiles( this, software.custom_files || [] )
    this.actionators = new ApplicationBlueprintActionators( this, software.actionators || [] )
    this.configurators = new ServiceBlueprintConfigurators( this, software.configurators || [] )
    this.schedules = new ApplicationBlueprintSchedules( this, software.schedules || [] )
    this.serviceDependencies = new ServiceBlueprintServiceDependencies( this, software.service_dependencies || [] )
    this.guises = new ServiceBlueprintGuises( this, software.guises || [] )
    this.capabilities = new ServiceBlueprintServiceCapabilities( this, software.capabilities || [] )
    this.logDirectories = new ServiceBlueprintLogDirectories( this, software.log_directories || [] )
    this.buildDependencies = new ServiceBlueprintBuildDependencies( this, software.build_dependencies || [] )
    this.filePermissions = new ServiceBlueprintFilePermissions( this, software.file_permissions || [] )
    this.softLinks = new ServiceBlueprintSoftLinks( this, software.soft_links || [] )
  }

  get apiEndpoint() {
    return `/~/namespaces/${ this.namespace.id }/workspace/services/${ this.id }/blueprint`
  }

  // get framework() {
  //   return this.base.object.framework
  // }
  //
  // get hasRakeTasks() {
  //   return [ 'rails4', 'rails5', 'sinatra' ].includes( this.framework )
  // }
  //
  // get hasCustomPhpInis() {
  //   return [ 'apache_php', 'apache_php56' ].includes( this.framework )
  // }
  //
  // get hasApacheHtaccessFiles() {
  //   return [ 'apache_php', 'apache_php56' ].includes( this.framework )
  // }
  //
  // get hasApacheHttpdConfigurations() {
  //   return [ 'apache_php', 'apache_php56' ].includes( this.framework )
  // }

  get output() {

    let object = {
      metadata: {
        software: this.metadata.output(),
      },
      software: {
        base: this.base.output(),
        disposition: this.disposition.output(),
        ports: this.ports.output(),
        scripts: this.scripts.output(),
        external_repositories: this.externalRepositories.output(),
        system_packages: this.systemPackages.output(),
        installed_packages: this.installedPackages.output(),
        required_modules: this.requiredModules.output(),
        service_configurations: this.serviceConfigurations.output(),
        environment_variables: this.environmentVariables.output(),
        target_environment_variables: this.targetEnvironmentVariables.output(),
        constants: this.constants.output(),
        template_files: this.templateFiles.output(),
        replacement_strings: this.replacementStrings.output(),
        persistent_directories: this.persistentDirectories.output(),
        consumers: this.consumers.output(),
        consumer_scripts: this.consumerScripts.output(),
        consumer_params: this.consumerParams.output(),
        custom_files: this.customFiles.output(),
        actionators: this.actionators.output(),
        configurators: this.configurators.output(),
        schedules: this.schedules.output(),
        service_dependencies: this.serviceDependencies.output(),
        guises: this.guises.output(),
        capabilities: this.capabilities.output(),
        log_directories: this.logDirectories.output(),
        build_dependencies: this.buildDependencies.output(),
        file_permissions: this.filePermissions.output(),
        soft_links: this.softLinks.output(),
      },
      schema: {
        type: 'service_blueprint',
        version: { major: 0, minor: 1 },
        origin: 'Engines Developer Studio 0.3'
      },

    }

    return ax.x.lib.object.compact( JSON.parse( JSON.stringify( object) ) )

  }

}


function importServiceBlueprint( object ) {

  let dig = ax.x.lib.object.dig

  let schema = object.schema || {}
  let type = schema.type

  if ( type === 'service_blueprint' ) {

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

    ax.throw( `Invalid blueprint type. Must be service blueprint.` )

  }

}
