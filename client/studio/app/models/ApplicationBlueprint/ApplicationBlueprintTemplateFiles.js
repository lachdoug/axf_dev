class ApplicationBlueprintTemplateFiles {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      path: item.path,
      language: item.language,
      content: item.content,
    } ) )
  }

  get formObject() {

    let collection = []

    for ( let item of this.collection ) {
      collection.push( {
        path: item.path,
        content: item.content,
        content_mode: app.codemirrorMode( item.language ),
      } )
    }

    return { template_files: collection }

  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.template_files || {} ).map( item => ( {
      path: item.path,
      content: item.content,
      language: app.codemirrorLanguage( item.content_mode ),
    } ) ) )
  }

  output() {
    return this.collection
  }

}
