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
        as: 'check',
      } ),
      f.field( {
        key: 'persistent',
        as: 'check',
      } ),
      f.field( {
        key: 'immutable',
        as: 'check',
      } ),
      f.field( {
        key: 'attach_post_build',
        as: 'check',
      } ),
      f.field( {
        key: 'attach_requires_restart',
        as: 'check',
      } ),
      f.field( {
        key: 'soft_service',
        as: 'check',
      } ),
      f.field( {
        key: 'shareable',
        as: 'check',
      } ),
      f.field( {
        key: 'consumer_exportable',
        as: 'check',
      } ),
      f.field( {
        key: 'stopped_ok',
        as: 'check',
      } ),
      f.field( {
        key: 'kerberos_support',
        as: 'check',
      } ),
      f.field( {
        key: 'host_network',
        as: 'check',
      } ),
      f.field( {
        key: 'privileged',
        as: 'check',
      } ),
      f.field( {
        key: 'no_ca_map',
        as: 'check',
      } ),
      f.field( {
        key: 'consumerless',
        as: 'check',
      } ),
      f.field( {
        key: 'start_syslog',
        as: 'check',
      } ),

    ]

  ),

]
