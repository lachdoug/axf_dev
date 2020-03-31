app.container.menu = ( controller, type ) => (a,x) => {

  let menuButton = app.menuButton( controller )

  return [

    menuButton( 'Memory', 'memory', 'fas fa-memory' ),
    menuButton( 'Actions', 'actions', 'fas fa-crosshairs' ),

    type === 'service' ? [
      menuButton( 'Configure', 'configure', 'fas fa-cogs' ),
      menuButton( 'Export', 'export', 'fas fa-download' ),
      menuButton( 'Import', 'import', 'fas fa-upload' ),
    ] : [
      menuButton( 'Network', 'network', 'fas fa-sitemap' ),
      menuButton( 'Icon', 'icon', 'fas fa-icons' ),
    ],

    menuButton( 'About', 'about', 'fas fa-info' ),

    a.hr,

    menuButton( 'Environment', 'environment', 'fas fa-question-circle' ),
    menuButton( 'Bindings', 'bindings', 'fas fa-dice-d20' ),
    menuButton( 'Logs', 'logs', 'fas fa-file-alt' ),
    menuButton( 'Processes', 'processes', 'fas fa-list' ),
    menuButton( 'Container', 'container', 'fas fa-cube' ),

    type === 'service' ? [
      menuButton( 'Definition', 'definition', 'fas fa-map' ),
    ] : [
      menuButton( 'Installation', 'installation', 'fas fa-clipboard-check' ),
      menuButton( 'Blueprint', 'blueprint', 'fas fa-map' ),
    ],

  ]

}
