class ApplicationBlueprintDialogues {

  constructor( blueprint, collection ) {

    this.blueprint = blueprint

    this.collection = collection.map( ( item, i ) =>
      new ApplicationBlueprintDialogue( this, item, i )
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
    let dialogue = new ApplicationBlueprintDialogue( this, {} )
    dialogue.isNew = true
    return dialogue
  }

  create( dialogue ) {
    dialogue.id = this.collection.length
    delete dialogue.isNew
    this.collection.push( dialogue )
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
    return this.collection.map( dialogue => dialogue.output() )
  }

}
