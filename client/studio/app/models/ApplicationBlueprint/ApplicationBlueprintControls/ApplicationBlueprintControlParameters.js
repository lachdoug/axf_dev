class ApplicationBlueprintControlParameters {

  constructor( control, collection ) {
    this.control = control
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      ...( item.get ? { get: item.get } : {} ),
      ...( item.action ? { action: item.action } : {} ),
      ...( item.set ? { set: item.set } : {} ),
    } ) )
  }

  get formObject() {
    return { parameters: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.parameters || {} ) )
  }

  output() {
    return this.collection
  }

}
