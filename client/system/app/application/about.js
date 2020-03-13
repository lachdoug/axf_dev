app.application.about = controller => (a,x) => {

  const name = controller.params.name

  return [

    a.h5( `About` ),
    a['div.clearfix']( a['div.float-right']( app.close( controller, 'Close' ) ) ),
    app.http(
      `/~/~/containers/engine/${ name }/blueprint`,
      ( blueprint, el ) => {

        let title = x.lib.object.dig( blueprint, [ 'metadata', 'software', 'display', 'title' ] )
        let description = x.lib.object.dig( blueprint, [ 'metadata', 'software', 'display', 'description' ] )
        let websiteUrl = x.lib.object.dig( blueprint, [ 'metadata', 'software', 'display', 'url' ] )
        let licenseLabel = x.lib.object.dig( blueprint, [ 'metadata', 'software', 'license', 'label' ] )
        let licenseUrl = x.lib.object.dig( blueprint, [ 'metadata', 'software', 'license', 'url' ] )

        el.$nodes = [
          a.p( a.strong( title ) ),
          a.p( description ),
          websiteUrl ? [
            a.hr,
            a.i( 'Website' ), '',
            a.a(
              app.icon( 'fas fa-link', websiteUrl ),
              { href: websiteUrl, target: websiteUrl }
            ),
          ] : null,
          a.hr,
          [
            a.i( 'License' ), '',
            ( licenseUrl && licenseLabel ) ?
            a.a( app.icon( 'fas fa-link', licenseLabel ), { href: licenseUrl, target: licenseUrl } ) :
            ( licenseUrl && !licenseLabel ) ?
            a.a( app.icon( 'fas fa-link', licenseUrl ), { href: licenseUrl, target: licenseUrl } ) :
            ( !licenseUrl && licenseLabel ) ?
            a.span( licenseLabel ) :
            a.i( 'Unknown' ),
          ],
        ]

      },
      {
        placeholder: app.hourglass( 'Loading info' )
      }

    ),

  ]


}
