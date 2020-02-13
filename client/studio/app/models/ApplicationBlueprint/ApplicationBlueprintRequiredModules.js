class ApplicationBlueprintRequiredModules {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      type: item.type,
      os_package: item.os_package,
      name: item.name,
    } ) )
  }

  get formObject() {
    return { required_modules: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.required_modules || {} ) )
  }

  output() {
    return this.collection
  }

}
