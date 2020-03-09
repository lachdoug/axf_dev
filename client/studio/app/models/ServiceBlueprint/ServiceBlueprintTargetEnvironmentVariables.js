class ServiceBlueprintTargetEnvironmentVariables {

  constructor( blueprint, collection ) {
    this.blueprint = blueprint
    this.assign( collection )
  }

  assign( collection ) {
    this.collection = collection.map( ( item, i ) => ( {
      variable_name: item.variable_name,
      environment_variable_name: item.environment_variable_name,
    } ) )
  }

  get formObject() {
    return { target_environment_variables: this.collection }
  }

  formSubmit( formObject ) {
    this.assign( Object.values( formObject.target_environment_variables || {} ) )
  }

  output() {
    return this.collection
  }

}
