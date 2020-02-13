class ApplicationBlueprintPorts {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      port: item.port,
      external: item.external,
      protocol: item.protocol,
    } ) )
  }

  get formObject() {
    return { ports: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.ports || {} ) )
  }

  output() {
    return this.collection
  }

}
