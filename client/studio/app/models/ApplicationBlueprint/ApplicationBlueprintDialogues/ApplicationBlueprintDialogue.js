class ApplicationBlueprintDialogue {

  constructor( dialogues, object, id ) {
    this.dialogues = dialogues
    this.id = id
    this.assign( object )
    this.parameters = new ApplicationBlueprintDialogueParameters( this, object.parameters || [] )
    this.components = new ApplicationBlueprintDialogueComponents( this, object.components || [] )
    this.tests = new ApplicationBlueprintDialogueTests( this, object.tests || [] )
  }

  assign( object ) {

    this.object = {
      name: object.name,
    }

  }

  delete() {
    this.dialogues.delete( this.id )
  }

  get formObject() {
    return {
      ...this.object,
    }
  }

  formSubmit( formObject ) {
    this.assign( formObject )
    if ( this.isNew ) this.dialogues.create( this )
  }

  output() {
    return {
      ...this.object,
      parameters: this.parameters.output(),
      components: this.components.output(),
      tests: this.tests.output(),
    }
  }

}
