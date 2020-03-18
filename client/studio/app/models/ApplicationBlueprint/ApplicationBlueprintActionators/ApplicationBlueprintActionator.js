class ApplicationBlueprintActionator {

  constructor( actionators, object, id ) {
    this.actionators = actionators
    this.id = id
    this.assign( object )
    this.variables = new ApplicationBlueprintActionatorVariables( this, object.variables || [] )
  }

  assign( object ) {

    let script = object.script || {}

    this.object = {
      name: object.name,
      label: object.label,
      description: object.description,
      return_type: object.return_type,
      return_file_name: object.return_file_name,
      timeout: object.timeout ? Number( object.timeout ) : null,
      enable_logging: object.enable_logging ? true : null,
      background: object.background ? true : null,
      script: {
        language: script.language,
        content: script.content,
      },
    }

  }

  delete() {
    this.actionators.delete( this.id )
  }

  get formObject() {

    return {
      ...this.object,
      enable_logging: this.object.enable_logging ? 'on' : null,
      background: this.object.background ? 'on' : null,
      script: {
        content_mode: app.codemirrorMode( this.object.script.language ),
        content: this.object.script.content,
      }
    }

  }

  formSubmit( formObject ) {

    formObject.script = formObject.script || {}
    if ( formObject.script.content ) {
      formObject.script.language = app.codemirrorLanguage( formObject.script.content_mode )
    }

    this.assign( formObject )

    if ( this.isNew ) this.actionators.create( this )

  }

  output() {
    return {
      ...this.object,
      variables: this.variables.output(),
    }
  }

}
