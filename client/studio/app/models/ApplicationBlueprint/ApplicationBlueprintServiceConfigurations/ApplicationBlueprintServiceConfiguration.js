class ApplicationBlueprintServiceConfiguration {

  constructor( service_configurations, object, id ) {
    this.serviceConfigurations = service_configurations
    this.id = id
    this.assign( object )
    // let actionator = object.actionator || {}
    // this.params = new ApplicationBlueprintServiceConfigurationParams( this, actionator.params || {} )
  }

  assign( object ) {

    // let timepsec = object.timespec || {}
    // let actionator = object.actionator || {}
    //
    // this.object = {
    //   label: object.label,
    //   timespec: {
    //     minute: timepsec.minute,
    //     hour: timepsec.hour,
    //     day_of_month: timepsec.day_of_month,
    //     month: timepsec.month,
    //     day_of_week: timepsec.day_of_week,
    //   },
    //   instruction: object.instruction,
    //   actionator: {
    //     name: actionator.name,
    //   },
    // }

    this.object = {}

  }

  // actionator() {
  //   let name = this.object.actionator.name
  //   return this.serviceConfigurations.blueprint.actionators.lookup( name ) || {}
  // }

  delete() {
    this.serviceConfigurations.delete( this.id )
  }

  // get isAction() {
  //   return this.object.instruction === 'action'
  // }
  //
  // actionatorSelections() {
  //   return this.serviceConfigurations.blueprint.actionators.map( item => item.object.name )
  // }

  get formObject() {
    return this.object
  }

  formSubmit( formObject ) {
    this.assign( formObject )
    if ( this.isNew ) this.serviceConfigurations.create( this )
  }

  output() {
    return {
      ...this.object,
      // ...( this.isAction ? {
      //   actionator: {
      //     name: this.object.actionator.name,
      //     params: this.params.output(),
      //   }
      // } : {} ),
    }
  }

}
