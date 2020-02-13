class ApplicationBlueprintSchedules {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ApplicationBlueprintSchedule( this, item, i )
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
    let schedule = new ApplicationBlueprintSchedule( this, {} )
    schedule.isNew = true
    return schedule
  }

  create( schedule ) {
    schedule.id = this.collection.length
    delete schedule.isNew
    this.collection.push( schedule )
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
    return this.collection.map( schedule => schedule.output() )
  }

}
