class ApplicationBlueprintControls {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ApplicationBlueprintControl( this, item, i )
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
    let control = new ApplicationBlueprintControl( this, {} )
    control.isNew = true
    return control
  }

  create( control ) {
    control.id = this.collection.length
    delete control.isNew
    this.collection.push( control )
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
    return this.collection.map( control => control.output() )
  }

}
