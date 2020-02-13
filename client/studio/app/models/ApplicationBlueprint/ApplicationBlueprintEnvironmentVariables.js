class ApplicationBlueprintEnvironmentVariables {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ApplicationBlueprintEnvironmentVariable( this, item, i )
    )

  }

  lookup(name) {
    return this.collection.find( item => item.attributes.name === name )
  }

  find(i) {
    return this.collection[i]
  }

  map(fn) {
    return this.collection.map(fn)
  }

  new() {
    let environment_variable = new ApplicationBlueprintEnvironmentVariable( this, {} )
    environment_variable.isNew = true
    return environment_variable
  }

  create( environment_variable ) {
    environment_variable.id = this.collection.length
    delete environment_variable.isNew
    this.collection.push( environment_variable )
  }

  delete(i) {
    this.collection.splice(i, 1)
    this.reindex()
  }

  reindex() {
    for ( let [ i, item ] of this.collection.entries() ) {
      item.id = i
    }
  }

  output() {
    return this.collection.map( environment_variable => environment_variable.object )
  }

}
