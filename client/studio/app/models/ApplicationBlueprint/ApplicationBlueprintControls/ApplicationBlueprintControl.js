class ApplicationBlueprintControl {

  constructor( controls, object, id ) {
    this.controls = controls
    this.id = id
    this.assign( object )
    this.parameters = new ApplicationBlueprintControlParameters( this, object.parameters || [] )
    this.components = new ApplicationBlueprintControlComponents( this, object.components || [] )
    this.tests = new ApplicationBlueprintControlTests( this, object.tests || [] )
  }

  assign( object ) {

    this.object = {
      name: object.name,
    }

  }

  delete() {
    this.controls.delete( this.id )
  }

  get formObject() {
    return {
      ...this.object,
    }
  }

  formSubmit( formObject ) {
    this.assign( formObject )
    if ( this.isNew ) this.controls.create( this )
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
