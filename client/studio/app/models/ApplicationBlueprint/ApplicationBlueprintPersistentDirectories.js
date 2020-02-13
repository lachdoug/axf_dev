class ApplicationBlueprintPersistentDirectories {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      path: item.path,
      volume_name: item.volume_name,
    } ) )
  }

  get formObject() {
    return { persistent_directories: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.persistent_directories || {} ) )
  }

  output() {
    return this.collection
  }

}
