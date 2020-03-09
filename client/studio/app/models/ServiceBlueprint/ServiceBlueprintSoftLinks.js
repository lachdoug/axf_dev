class ServiceBlueprintSoftLinks {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      source: item.source,
      target: item.target,
      owner: item.owner,
    } ) )
  }

  get formObject() {
    return { soft_links: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.soft_links || {} ) )
  }

  output() {
    return this.collection
  }

}
