class ServiceBlueprintCustomFiles {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      type: item.type,
      path: item.path,
      language: item.language,
      content: item.content,
      execute: !!item.execute,
      sudo: !!item.sudo,
    } ) )
  }

  get formObject() {

    let collection = []

    for ( let item of this.collection ) {
      collection.push( {
        type: item.type,
        path: item.path,
        content: item.content,
        content_mode: app.codemirrorMode( item.language ),
        execute: item.execute ? true : false,
        sudo: item.sudo ? true : false,
      } )
    }

    return { custom_files: collection }

  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.custom_files || {} ).map( item => ( {
      path: item.path,
      content: item.content,
      language: app.codemirrorLanguage( item.content_mode ),
    } ) ) )
  }

  output() {
    return this.collection
  }

}
