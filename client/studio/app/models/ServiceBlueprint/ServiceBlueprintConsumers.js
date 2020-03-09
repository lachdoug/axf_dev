class ServiceBlueprintConsumers {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {
    this.collection = object.accepts || []
  }

  get formObject() {
    return { accepts: this.collection.map( ( type, i ) => ( {
        type: type
      } ) )

     }
  }

  formSubmit( formObject ) {
    let accepts = Object.values( formObject.accepts || {} )
    this.assign( { accepts: accepts.map( accept => accept.type ) } )
  }

  output() {
    return { accepts: this.collection }
  }

}
