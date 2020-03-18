class ServiceBlueprintScripts {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let start = object.start || {}
    let start_sudo = object.start_sudo || {}
    let install = object.install || {}
    let install_sudo = object.install_sudo || {}
    let post_install = object.post_install || {}
    let post_install_sudo = object.post_install_sudo || {}
    let first_run = object.first_run || {}
    let first_run_sudo = object.first_run_sudo || {}
    let backup = object.backup || {}
    let backup_sudo = object.backup_sudo || {}
    let restore = object.restore || {}
    let restore_sudo = object.restore_sudo || {}
    let shutdown = object.shutdown || {}
    let shutdown_sudo = object.shutdown_sudo || {}

    this.object = {
      start: {
        language: start.language,
        content: start.content
      },
      start_sudo: {
        language: start_sudo.language,
        content: start_sudo.content
      },
      install: {
        language: install.language,
        content: install.content
      },
      install_sudo: {
        language: install_sudo.language,
        content: install_sudo.content
      },
      post_install: {
        language: post_install.language,
        content: post_install.content
      },
      post_install_sudo: {
        language: post_install_sudo.language,
        content: post_install_sudo.content
      },
      first_run: {
        language: first_run.language,
        content: first_run.content
      },
      first_run_sudo: {
        language: first_run_sudo.language,
        content: first_run_sudo.content
      },
      backup: {
        language: backup.language,
        content: backup.content
      },
      backup_sudo: {
        language: backup_sudo.language,
        content: backup_sudo.content
      },
      restore: {
        language: restore.language,
        content: restore.content
      },
      restore_sudo: {
        language: restore_sudo.language,
        content: restore_sudo.content
      },
      shutdown: {
        language: shutdown.language,
        content: shutdown.content
      },
      shutdown_sudo: {
        language: shutdown_sudo.language,
        content: shutdown_sudo.content
      },
    }

  }

  get formObject() {

    return {
      start: {
        content_mode: app.codemirrorMode( this.object.start.language ),
        content: this.object.start.content
      },
      start_sudo: {
        content_mode: app.codemirrorMode( this.object.start_sudo.language ),
        content: this.object.start_sudo.content
      },
      install: {
        content_mode: app.codemirrorMode( this.object.install.language ),
        content: this.object.install.content
      },
      install_sudo: {
        content_mode: app.codemirrorMode( this.object.install_sudo.language ),
        content: this.object.install_sudo.content
      },
      post_install: {
        content_mode: app.codemirrorMode( this.object.post_install.language ),
        content: this.object.post_install.content
      },
      post_install_sudo: {
        content_mode: app.codemirrorMode( this.object.post_install_sudo.language ),
        content: this.object.post_install_sudo.content
      },
      first_run: {
        content_mode: app.codemirrorMode( this.object.first_run.language ),
        content: this.object.first_run.content
      },
      first_run_sudo: {
        content_mode: app.codemirrorMode( this.object.first_run_sudo.language ),
        content: this.object.first_run_sudo.content
      },
      backup: {
        content_mode: app.codemirrorMode( this.object.backup.language ),
        content: this.object.backup.content
      },
      backup_sudo: {
        content_mode: app.codemirrorMode( this.object.backup_sudo.language ),
        content: this.object.backup_sudo.content
      },
      restore: {
        content_mode: app.codemirrorMode( this.object.restore.language ),
        content: this.object.restore.content
      },
      restore_sudo: {
        content_mode: app.codemirrorMode( this.object.restore_sudo.language ),
        content: this.object.restore_sudo.content
      },
      shutdown: {
        content_mode: app.codemirrorMode( this.object.shutdown.language ),
        content: this.object.shutdown.content
      },
      shutdown_sudo: {
        content_mode: app.codemirrorMode( this.object.shutdown_sudo.language ),
        content: this.object.shutdown_sudo.content
      },
    }

  }

  formSubmit( formObject ) {

    for ( let key of [
      'start',
      'start_sudo',
      'install',
      'install_sudo',
      'post_install',
      'post_install_sudo',
      'first_run',
      'first_run_sudo',
      'backup',
      'backup_sudo',
      'restore',
      'restore_sudo',
      'shutdown',
      'shutdown_sudo',
    ] ) {
      if ( formObject[key].content ) {
        formObject[key].language = app.codemirrorLanguage( formObject[key].content_mode )
      }
    }

    this.assign( formObject )

  }

  output() {
    return this.object
  }

}
