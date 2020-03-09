class ServiceBlueprintConstants {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      name: item.name,
      value: item.value,
    } ) )
  }

  get formObject() {
    return { constants: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.constants || {} ) )
  }

  output() {
    return this.collection
  }

}
