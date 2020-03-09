class ApplicationBlueprintServiceConfigurations {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ApplicationBlueprintServiceConfiguration( this, item, i )
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

  new( namespace, type ) {
    let service_configurations = new ApplicationBlueprintServiceConfiguration( this, {
      publisher_namespace: namespace,
      type_path: type,
    } )
    service_configurations.isNew = true
    return service_configurations
  }

  create( service_configurations ) {
    service_configurations.id = this.collection.length
    delete service_configurations.isNew
    this.collection.push( service_configurations )
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
    return this.collection.map( service_configurations => service_configurations.output() )
  }

}
