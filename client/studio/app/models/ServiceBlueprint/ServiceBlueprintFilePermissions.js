class ServiceBlueprintFilePermissions {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      path: item.path,
      recursive: !!item.recursive,
      user: item.user,
      group: item.group,
      permissions: item.permissions,
      create: item.create,
    } ) )
  }

  get formObject() {
    return { file_permissions: this.collection.map( item => ( {
      ...item,
      recursive: item.recursive ? 'on' : null
    } ) ) }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.file_permissions || {} ) )
  }

  output() {
    return this.collection
  }

}
