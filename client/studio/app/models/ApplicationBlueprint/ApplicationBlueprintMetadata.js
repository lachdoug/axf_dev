class ApplicationBlueprintMetadata {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let display = object.display || {}
    let license = object.license || {}

    this.object = {
      display: {
        title: display.title,
        version: display.version,
        url: display.url,
      },
      license: {
        label: license.label,
        url: license.url,
      },
    }

  }


  get formObject() {
    return this.object
  }

  formSubmit( formObject ) {
    this.assign( formObject )
  }

  output() {
    return this.object
  }

}
