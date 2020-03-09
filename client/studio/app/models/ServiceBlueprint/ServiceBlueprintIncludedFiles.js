class ServiceBlueprintIncludedFiles {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      source: item.source,
      destination: item.destination,
      owner: item.owner,
      group: item.group,
      permissions: item.permissions,
      template: !!item.template,
    } ) )
  }

  get formObject() {
    return { included_files: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.included_files || {} ) )
  }

  output() {
    return this.collection
  }

}
