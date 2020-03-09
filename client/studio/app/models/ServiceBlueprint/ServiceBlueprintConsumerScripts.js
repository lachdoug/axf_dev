class ServiceBlueprintConsumerScripts {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let add = object.add || {}
    let add_sudo = object.add_sudo || {}
    let update = object.update || {}
    let update_sudo = object.update_sudo || {}
    let remove = object.remove || {}
    let remove_sudo = object.remove_sudo || {}

    this.object = {
      add: {
        language: add.language,
        content: add.content
      },
      add_sudo: {
        language: add_sudo.language,
        content: add_sudo.content
      },
      update: {
        language: update.language,
        content: update.content
      },
      update_sudo: {
        language: update_sudo.language,
        content: update_sudo.content
      },
      remove: {
        language: remove.language,
        content: remove.content
      },
      remove_sudo: {
        language: remove_sudo.language,
        content: remove_sudo.content
      },
    }

  }

  get formObject() {

    return {
      add: {
        content_mode: app.codemirrorMode( this.object.add.language ),
        content: this.object.add.content
      },
      add_sudo: {
        content_mode: app.codemirrorMode( this.object.add_sudo.language ),
        content: this.object.add_sudo.content
      },
      update: {
        content_mode: app.codemirrorMode( this.object.update.language ),
        content: this.object.update.content
      },
      update_sudo: {
        content_mode: app.codemirrorMode( this.object.update_sudo.language ),
        content: this.object.update_sudo.content
      },
      remove: {
        content_mode: app.codemirrorMode( this.object.remove.language ),
        content: this.object.remove.content
      },
      remove_sudo: {
        content_mode: app.codemirrorMode( this.object.remove_sudo.language ),
        content: this.object.remove_sudo.content
      },
    }

  }

  formSubmit( formObject ) {

    for ( let key of [
      'add',
      'add_sudo',
      'update',
      'update_sudo',
      'remove',
      'remove_sudo',
    ] ) {
      formObject[key].language = app.codemirrorLanguage( formObject[key].content_mode )
      delete formObject[key].content_mode
    }

    this.assign( formObject )

  }

  output() {
    return this.object
  }

}
