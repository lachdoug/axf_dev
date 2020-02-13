class ApplicationBlueprintActionators {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ApplicationBlueprintActionator( this, item, i )
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
    let actionator = new ApplicationBlueprintActionator( this, {} )
    actionator.isNew = true
    return actionator
  }

  create( actionator ) {
    actionator.id = this.collection.length
    delete actionator.isNew
    this.collection.push( actionator )
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
    return this.collection.map( actionator => actionator.output() )
  }

}
