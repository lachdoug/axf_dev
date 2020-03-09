app.namespaces.workspace.services.blueprint.capabilities = blueprint => controller => (a,x) => [

  a.h5( 'Capabilities' ),
  a.hr,

  app.blueprintForm(
    controller,
    blueprint,
    blueprint.capabilities,
    (f) => [
      f.field( {
        key: 'allow',
        as: 'radios',
        selections: {
          default: 'Default',
          none: 'None',
          all: 'All',
          selected: 'Selected',
        },
      } ),

      f.field( {
        key: 'selected',
        as: 'checks',
        dependent: {
          key: 'allow',
          value: 'selected',
        },
        selections: [
          'SETPCAP',
          'MKNOD',
          'AUDIT_WRITE',
          'CHOWN',
          'NET_RAW',
          'DAC_OVERRIDE',
          'FOWNER',
          'FSETID',
          'KILL',
          'SETGID',
          'SETUID',
          'NET_BIND_SERVICE',
          'SYS_CHROOT',
          'SETFCAP',
          'SYS_MODULE',
          'SYS_RAWIO',
          'SYS_PACCT',
          'SYS_ADMIN',
          'SYS_NICE',
          'SYS_RESOURCE',
          'SYS_TIME',
          'SYS_TTY_CONFIG',
          'AUDIT_CONTROL',
          'MAC_OVERRIDE',
          'MAC_ADMIN',
          'NET_ADMIN',
          'SYSLOG',
          'DAC_READ_SEARCH',
          'LINUX_IMMUTABLE',
          'NET_BROADCAST',
          'IPC_LOCK',
          'IPC_OWNER',
          'SYS_PTRACE',
          'SYS_BOOT',
          'LEASE',
          'WAKE_ALARM',
          'BLOCK_SUSPEND',
        ]
      } ),

    ]

  ),

]
