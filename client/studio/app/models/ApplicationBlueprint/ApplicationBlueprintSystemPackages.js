class ApplicationBlueprintSystemPackages {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      package: item.package,
      version: item.version,
    } ) )
  }

  get formObject() {
    return { system_packages: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.system_packages || {} ) )
  }

  output() {
    return this.collection
  }

}
