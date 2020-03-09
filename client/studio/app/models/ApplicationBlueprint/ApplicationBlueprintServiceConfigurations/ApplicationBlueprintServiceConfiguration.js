class ApplicationBlueprintServiceConfiguration {

  constructor( service_configurations, object, id ) {
    this.serviceConfigurations = service_configurations
    this.id = id
    this.namespace = object.publisher_namespace
    this.type = object.type_path
    this.assign( object )
  }

  assign( object ) {

    this.object = {
      publisher_namespace: object.publisher_namespace,
      type_path: object.type_path,
      variables: object.variables || {},
    }

  }

  delete() {
    this.serviceConfigurations.delete( this.id )
  }

  get formObject() {
    return this.object
  }

  formSubmit( formObject ) {
    this.assign( formObject )
    if ( this.isNew ) this.serviceConfigurations.create( this )
  }

  output() {
    return this.object
  }

}
