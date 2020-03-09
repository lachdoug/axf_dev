class ServiceBlueprintBase {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let memory = object.memory || {}

    this.object = {
      inherit: object.inherit,
      name: object.name,
      cardinal: object.cardinal,
      publisher_namespace: this.blueprint.namespace.name,
      type_path: object.type_path,
      service_handle_field: object.service_handle_field,
      parent_image: object.parent_image,
      deployment_type: object.deployment_type,
      http_protocol: object.http_protocol,
      hostname: object.hostname,
      domain_name: object.domain_name,
      set_state: object.set_state,
      default_stop_timeout: object.default_stop_timeout,
      restart_policy: object.restart_policy,
      restart_attempts: object.restart_attempts,
      memory: {
        required: memory.required && Number( memory.required ),
        recommended: memory.recommended && Number( memory.recommended ),
      },
      run_as_user: object.run_as_user,
      user_id: object.user_id,
      user_primary_group: object.user_primary_group,
      create_user: !!object.create_user,
      source_files: object.source_files,
    }

  }

  get formObject() {
    return {
      ...this.object,
      create_user: this.object.create_user ? 'on' : null,
    }
  }

  formSubmit( formObject ) {
    this.assign( formObject )
  }

  output() {
    return this.object
  }

}
