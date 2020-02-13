class ApplicationBlueprintFileWritePermissions {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      path: item.path,
      recursive: item.recursive ? true : null,
    } ) )
  }

  get formObject() {

    let collection = []

    for ( let item of this.collection ) {
      collection.push( {
        path: item.path,
        recursive: item.recursive ? 'on' : null,
      } )
    }

    return { file_write_permissions: collection }

  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.file_write_permissions || {} ) )
  }

  output() {
    return this.collection
  }

}
