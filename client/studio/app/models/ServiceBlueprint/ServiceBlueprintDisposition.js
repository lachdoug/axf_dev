class ServiceBlueprintDisposition {

  constructor( blueprint, object ) {
    this.blueprint = blueprint
    this.assign( object )
  }

  assign( object ) {

    let memory = object.memory || {}

    this.object = {
      dedicated: !!object.dedicated,
      persistent: !!object.persistent,
      immutable: !!object.immutable,
      attach_post_build: !!object.attach_post_build,
      attach_requires_restart: !!object.attach_requires_restart,
      soft_service: !!object.soft_service,
      shareable: !!object.shareable,
      consumer_exportable: !!object.consumer_exportable,
      stopped_ok: !!object.stopped_ok,
      kerberos_support: !!object.kerberos_support,
      host_network: !!object.host_network,
      privileged: !!object.privileged,
      no_ca_map: !!object.no_ca_map,
      consumerless: !!object.consumerless,
      start_syslog: !!object.start_syslog,
    }

  }

  get formObject() {
    return {
      dedicated: this.object.dedicated ? 'on' : null,
      persistent: this.object.persistent ? 'on' : null,
      immutable: this.object.immutable ? 'on' : null,
      attach_post_build: this.object.attach_post_build ? 'on' : null,
      attach_requires_restart: this.object.attach_requires_restart ? 'on' : null,
      soft_service: this.object.soft_service ? 'on' : null,
      shareable: this.object.shareable ? 'on' : null,
      consumer_exportable: this.object.consumer_exportable ? 'on' : null,
      stopped_ok: this.object.stopped_ok ? 'on' : null,
      kerberos_support: this.object.kerberos_support ? 'on' : null,
      host_network: this.object.host_network ? 'on' : null,
      privileged: this.object.privileged ? 'on' : null,
      no_ca_map: this.object.no_ca_map ? 'on' : null,
      consumerless: this.object.consumerless ? 'on' : null,
      start_syslog: this.object.start_syslog ? 'on' : null,
    }
  }

  formSubmit( formObject ) {
    this.assign( formObject )
  }

  output() {
    return this.object
  }

}
