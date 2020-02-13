class ApplicationBlueprintApacheHttpdConfigurations {

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
    return { apache_httpd_configurations: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.apache_httpd_configurations || {} ) )
  }

  output() {
    return this.collection
  }

}
