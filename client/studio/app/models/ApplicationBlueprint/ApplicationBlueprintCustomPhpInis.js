class ApplicationBlueprintCustomPhpInis {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      content: item.content,
    } ) )
  }

  get formObject() {
    return { custom_php_inis: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.custom_php_inis || {} ) )
  }

  output() {
    return this.collection
  }

}
