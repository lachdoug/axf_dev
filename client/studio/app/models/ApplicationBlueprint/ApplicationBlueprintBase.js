class ApplicationBlueprintBase {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let memory = object.memory || {}

    this.object = {
      inherit: object.inherit,
      name: object.name,
      framework: object.framework,
      deployment_type: object.deployment_type,
      http_protocol: object.http_protocol,
      framework_port_override: object.framework_port_override && Number( object.framework_port_override ),
      web_root_directory: object.web_root_directory,
      username: object.username,
      user_primary_group: object.user_primary_group,
      sudo_list: object.sudo_list,
      continuous_deployment: object.continuous_deployment ? true : null,
      memory: {
        required: memory.required && Number( memory.required ),
        recommended: memory.recommended && Number( memory.recommended ),
      },
      first_run_url: object.first_run_url,
      installation_report: object.installation_report,
    }
  }

  get formObject() {
    return {
      ...this.object,
      continuous_deployment: this.object.continuous_deployment ? 'on' : null,
    }
  }

  formSubmit( formObject ) {
    this.assign( formObject )
  }

  output() {
    return this.object
  }

}
