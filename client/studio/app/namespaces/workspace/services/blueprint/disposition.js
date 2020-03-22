app.namespaces.workspace.services.blueprint.disposition = blueprint => controller => (a,x) => [

  a.h5( 'Disposition' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.disposition,
    (f) => [

      f.field( {
        key: 'dedicated',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'persistent',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'immutable',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'attach_post_build',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'attach_requires_restart',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'soft_service',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'shareable',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'consumer_exportable',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'stopped_ok',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'kerberos_support',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'host_network',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'privileged',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'no_ca_map',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'consumerless',
        as: 'checkbox',
      } ),
      f.field( {
        key: 'start_syslog',
        as: 'checkbox',
      } ),

    ]

  ),

]
