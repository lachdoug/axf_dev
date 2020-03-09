class ServiceBlueprintGuises {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection
  }

  get formObject() {
    return { guises: this.collection.map( ( item, i ) => ( {
      type: item,
    } ) ) }
  }

  formSubmit( formObject ) {
    let collection = Object.values( formObject.guises || {} ).map(
      item => item.type
    )
    this.assign( collection )
  }

  output() {
    return this.collection
  }

}
