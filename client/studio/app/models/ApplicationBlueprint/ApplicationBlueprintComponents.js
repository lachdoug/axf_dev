class ApplicationBlueprintComponents {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let sources = object.sources || []

    this.object = {
      path: object.path,
      extract: object.extract ? true : null,
      sources: sources.map( item => {

        let installScript = item.install_script || {}

        return {
          label: item.label,
          url: item.url,
          install_script: {
            language: installScript.language,
            content: installScript.content,
          }
        }

      } ),
    }

  }

  get formObject() {

    return {
      path: this.object.path,
      extract: this.object.extract ? 'on' : null,
      sources: this.object.sources.map( item => {

        let installScript = item.install_script || {}

        return {
          label: item.label,
          url: item.url,
          install_script: {
            content_mode: app.codemirrorMode( installScript.language ),
            content: installScript.content,
          }
        }

      } ),
    }

  }

  formSubmit( formObject ) {

    let sources = Object.values( formObject.sources || {} )

    this.assign( {
      path: formObject.path,
      extract: formObject.extract,
      sources: sources.map( item => ( {
        label: item.label,
        url: item.url,
        install_script: {
          language: app.codemirrorLanguage( item.install_script.content_mode ),
          content: item.install_script.content,
        }
      } ) ),
    } )

  }

  output() {
    return this.object
  }

}
