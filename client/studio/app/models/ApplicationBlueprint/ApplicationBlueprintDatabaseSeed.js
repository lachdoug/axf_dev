class ApplicationBlueprintDatabaseSeed {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    this.object = {
      language: object.language,
      content: object.content,
      script: object.script ? true : null,
    }

  }

  get formObject() {

    return {
      content: this.object.content,
      content_mode: app.codemirrorMode( this.object.language ),
      script: this.object.script ? 'on' : null,
    }

  }

  formSubmit( formObject ) {

    this.assign( {
      language: app.codemirrorLanguage( formObject.content_mode ),
      content: formObject.content,
      script: formObject.script, // === 'on' ? true : null,
    } )

  }

  output() {
    return this.object
  }

}
