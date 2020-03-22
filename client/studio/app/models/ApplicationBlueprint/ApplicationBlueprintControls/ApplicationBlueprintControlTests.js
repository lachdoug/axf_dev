class ApplicationBlueprintControlTests {

  constructor( control, collection ) {
    this.control = control
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      label: item.label,
      parameters: item.parameters,
    } ) )
  }

  get formObject() {
    return { tests: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.tests || {} ) )
  }

  output() {
    return this.collection
  }

  map(fn) {
    return this.collection.map(fn)
  }

  find(i) {
    return this.collection[i]
  }

}
