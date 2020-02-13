class ApplicationBlueprintExternalRepositories {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      source: item.source,
      key: item.key,
    } ) )
  }

  get formObject() {
    return { external_repositories: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.external_repositories || {} ) )
  }

  output() {
    return this.collection
  }

}
