class ApplicationBlueprintReplacementStrings {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      string: item.string,
      source_file: item.source_file,
      destination_file: item.destination_file,
    } ) )
  }

  get formObject() {
    return { replacement_strings: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.replacement_strings || {} ) )
  }

  output() {
    return this.collection
  }

}
