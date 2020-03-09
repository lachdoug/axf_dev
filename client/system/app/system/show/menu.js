app.system.show.menu = controller => (a,x) => {

  let menuButton = app.menuButton( controller )

  return [

    menuButton( 'Keys', 'keys', 'fas fa-key' ),
    menuButton( 'Certificates', 'certificates', 'fas fa-certificate' ),
    menuButton( 'Domains', 'domains', 'fas fa-globe' ),
    menuButton( 'Locale', 'locale', 'fas fa-globe-americas' ),
    menuButton( 'Timezone', 'timezone', 'fas fa-clock' ),
    menuButton( 'Hostname', 'hostname', 'fa fa-hdd' ),
    menuButton( 'Label', 'label', 'fas fa-tag' ),
    menuButton( 'Site', 'site', 'fas fa-home' ),
    menuButton( 'Admin', 'admin', 'fas fa-user-shield' ),
    menuButton( 'Users', 'users', 'fas fa-users' ),
    menuButton( 'Email', 'email', 'fas fa-envelope-open' ),

    a.hr,

    menuButton( 'Registry', 'registry', 'fas fa-book' ),
    menuButton( 'Reserved', 'reserved', 'fas fa-registered' ),
    menuButton( 'Orphans', 'orphans', 'fas fa-compass' ),
    menuButton( 'Exceptions', 'exceptions', 'fas fa-bug' ),
    menuButton( 'Last install', 'last_install', 'fas fa-history' ),
    menuButton( 'Checkup', 'checkup', 'fas fa-file-medical-alt' ),
    // app.collapse( {
    //   label: app.icon( 'fas fa-stethoscope', 'Diagnostics' ),
    //   button: {
    //     class: 'btn app-btn d-block w-100 text-left'
    //   },
    //   body: [
    //   ]
    // } ),

  ]

}
