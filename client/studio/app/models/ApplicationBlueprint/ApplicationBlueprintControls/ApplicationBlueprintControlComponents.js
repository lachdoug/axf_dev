class ApplicationBlueprintControlComponents {
// class ApplicationBlueprintPersistentFiles {

  constructor( control, collection ) {
    this.control = control
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = ax.x.lib.compact( collection ) || {}
  }

  get formObject() {
    return { components: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.components || {} ) )
  }

  output() {
    return this.collection
  }

}
