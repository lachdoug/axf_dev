class ServiceBlueprintConfigurators {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ServiceBlueprintConfigurator( this, item, i )
    )

  }

  lookup(name) {
    return this.collection.find( item => item.object.name === name )
  }

  find(i) {
    return this.collection[i]
  }

  map(fn) {
    return this.collection.map(fn)
  }

  new() {
    let configurator = new ServiceBlueprintConfigurator( this, {} )
    configurator.isNew = true
    return configurator
  }

  create( configurator ) {
    configurator.id = this.collection.length
    delete configurator.isNew
    this.collection.push( configurator )
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
    return this.collection.map( configurator => configurator.output() )
  }

}
