class ApplicationBlueprintInstalledPackages {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      name: item.name,
      download_type: item.download_type,
      command_options: item.command_options,
      source_url: item.source_url,
      destination: item.destination,
      extraction_command: item.extraction_command,
      path_to_extracted: item.path_to_extracted,
      authentication: item.authentication,
    } ) )
  }

  get formObject() {
    return { installed_packages: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.installed_packages || {} ) )
  }

  output() {
    return this.collection
  }

}
