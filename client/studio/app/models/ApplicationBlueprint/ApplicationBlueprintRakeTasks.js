class ApplicationBlueprintRakeTasks {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      action: item.action,
      always_run: item.always_run ? true : null,
    } ) )
  }

  get formObject() {

    let collection = []

    for ( let item of this.collection ) {
      collection.push( {
        action: item.action,
        always_run: item.always_run ? 'on' : null,
      } )
    }

    return { rake_tasks: collection }

  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.rake_tasks || {} ) )
  }

  output() {
    return this.collection
  }

}
