class ServiceBlueprintConfigurator {

  constructor( configurators, object, id ) {
    this.configurators = configurators
    this.id = id
    this.assign( object )
    this.variables = new ApplicationBlueprintActionatorVariables( this, object.variables || [] )
  }

  assign( object ) {

    let setScript = object.set_script || {}
    let setScriptSudo = object.set_script_sudo || {}
    let readScript = object.read_script || {}
    let readScriptSudo = object.read_script_sudo || {}

    this.object = {
      name: object.name,
      label: object.label,
      description: object.description,
      enable_logging: object.enable_logging ? true : null,
      no_save: object.no_save ? true : null,
      set_script: {
        language: setScript.language,
        content: setScript.content,
      },
      set_script_sudo: {
        language: setScriptSudo.language,
        content: setScriptSudo.content,
      },
      read_script: {
        language: readScript.language,
        content: readScript.content,
      },
      read_script_sudo: {
        language: readScriptSudo.language,
        content: readScriptSudo.content,
      },
    }

  }

  delete() {
    this.configurators.delete( this.id )
  }

  get formObject() {

    return {
      ...this.object,
      enable_logging: this.object.enable_logging ? 'on' : null,
      no_save: this.object.no_save ? 'on' : null,
      set_script: {
        content_mode: app.codemirrorMode( this.object.set_script.language ),
        content: this.object.set_script.content,
      },
      set_script_sudo: {
        content_mode: app.codemirrorMode( this.object.set_script_sudo.language ),
        content: this.object.set_script_sudo.content,
      },
      read_script: {
        content_mode: app.codemirrorMode( this.object.read_script.language ),
        content: this.object.read_script.content,
      },
      read_script_sudo: {
        content_mode: app.codemirrorMode( this.object.read_script_sudo.language ),
        content: this.object.read_script_sudo.content,
      },
    }

  }

  formSubmit( formObject ) {

    formObject.set_script = formObject.set_script || {}
    if ( formObject.set_script.content ) {
      formObject.set_script.language = app.codemirrorLanguage( formObject.set_script.content_mode )
    }
    formObject.set_script_sudo = formObject.set_script_sudo || {}
    if ( formObject.set_script_sudo.content ) {
      formObject.set_script_sudo.language = app.codemirrorLanguage( formObject.set_script_sudo.content_mode )
    }
    formObject.read_script = formObject.read_script || {}
    if ( formObject.read_script.content ) {
      formObject.read_script.language = app.codemirrorLanguage( formObject.read_script.content_mode )
    }
    formObject.read_script_sudo = formObject.read_script_sudo || {}
    if ( formObject.read_script_sudo.content ) {
      formObject.read_script_sudo.language = app.codemirrorLanguage( formObject.read_script_sudo.content_mode )
    }

    this.assign( formObject )

    if ( this.isNew ) this.configurators.create( this )

  }

  output() {
    return {
      ...this.object,
      variables: this.variables.output(),
    }
  }

}
