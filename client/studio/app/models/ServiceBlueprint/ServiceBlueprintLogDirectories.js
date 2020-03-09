class ServiceBlueprintLogDirectories {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection
  }

  get formObject() {
    return { log_directories: this.collection.map( ( item, i ) => ( {
      path: item,
    } ) ) }
  }

  formSubmit( formObject ) {
    let collection = Object.values( formObject.log_directories || {} ).map(
      item => item.path
    )
    this.assign( collection )
  }

  output() {
    return this.collection
  }

}
