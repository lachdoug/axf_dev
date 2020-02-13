class ApplicationBlueprintApacheHtaccessFiles {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      directory: item.directory,
      content: item.content,
    } ) )
  }

  get formObject() {
    return { apache_htaccess_files: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.apache_htaccess_files || {} ) )
  }

  output() {
    return this.collection
  }

}
