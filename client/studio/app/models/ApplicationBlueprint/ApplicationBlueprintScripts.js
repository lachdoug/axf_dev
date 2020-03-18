class ApplicationBlueprintScripts {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let start = object.start || {}
    let install = object.install || {}
    let first_run = object.first_run || {}
    let post_install = object.post_install || {}
    let backup = object.backup || {}
    let restore = object.restore || {}
    let shutdown = object.shutdown || {}

    this.object = {
      start: {
        language: start.language,
        content: start.content
      },
      install: {
        language: install.language,
        content: install.content
      },
      first_run: {
        language: first_run.language,
        content: first_run.content
      },
      post_install: {
        language: post_install.language,
        content: post_install.content
      },
      backup: {
        language: backup.language,
        content: backup.content
      },
      restore: {
        language: restore.language,
        content: restore.content
      },
      shutdown: {
        language: shutdown.language,
        content: shutdown.content
      }
    }

  }

  get formObject() {

    return {
      start: {
        content_mode: app.codemirrorMode( this.object.start.language ),
        content: this.object.start.content
      },
      install: {
        content_mode: app.codemirrorMode( this.object.install.language ),
        content: this.object.install.content
      },
      first_run: {
        content_mode: app.codemirrorMode( this.object.first_run.language ),
        content: this.object.first_run.content
      },
      post_install: {
        content_mode: app.codemirrorMode( this.object.post_install.language ),
        content: this.object.post_install.content
      },
      backup: {
        content_mode: app.codemirrorMode( this.object.backup.language ),
        content: this.object.backup.content
      },
      restore: {
        content_mode: app.codemirrorMode( this.object.restore.language ),
        content: this.object.restore.content
      },
      shutdown: {
        content_mode: app.codemirrorMode( this.object.shutdown.language ),
        content: this.object.shutdown.content
      }
    }

  }

  formSubmit( formObject ) {

    for ( let key of [ 'start',  'install', 'first_run', 'post_install', 'backup', 'restore', 'shutdown' ] ) {
      if ( formObject[key].content ) {
        formObject[key].language = app.codemirrorLanguage( formObject[key].content_mode )
      }
      // delete formObject[key].content_mode
    }

    this.assign( formObject )

  }

  output() {
    return this.object
  }

}
