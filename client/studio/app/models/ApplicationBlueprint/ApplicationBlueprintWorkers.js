class ApplicationBlueprintWorkers {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let commands = object.commands || []

    this.object = {
      blocking: object.blocking,
      commands: commands.map( item => ( {
        name: item.name,
        command: item.command,
      } ) ),
    }

  }

  get formObject() {

    return this.object

  }

  formSubmit( formObject ) {

    this.assign( {
      blocking: formObject.blocking,
      commands: Object.values( formObject.commands || {} ),
    } )

  }

  output() {
    return this.object
  }

}
