class ServiceBlueprintBuildDependencies {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection
  }

  get formObject() {
    return { build_dependencies: this.collection.map( ( item, i ) => ( {
      type: item,
    } ) ) }
  }

  formSubmit( formObject ) {
    let collection = Object.values( formObject.build_dependencies || {} ).map(
      item => item.type
    )
    this.assign( collection )
  }

  output() {
    return this.collection
  }

}
