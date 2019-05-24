app.pills = (r) => (a,x) => {

  let path = r.path
  if ( path === '/' ) path = ''
  let path_match = path.match( /^((.*)\/~(file|dir|subdir))(.*)$/ )

  let base_path
  let type
  let action
  let names

  if ( path_match ) {
    base_path = path_match[2]
    type = path_match[3]
    action = path_match[4]
    names = base_path.split( '/' )
  } else {
    base_path = '/'
    type = 'dir'
    action = ''
    names = ['']
  }

  let scope = ''
  let pills = []
  let up_path = base_path.replace( /\/[^\/]+$/, '/~dir')
  // debugger
  let last_i = names.length - 1
  let up_i = last_i - ( action ? 0 : 1 )

  names.forEach( ( name, i) => {

    let path = `${ scope }${ name }`
    let component

    if ( i === 0 && i === last_i ) {
      component = a['.pill-selected']( app.fa( "home" ) )
    } else if ( i === 0 ) {
      component = app.btn( app.fa( 'home' ), ()=> r.open( `/` ) )
    } else if ( i === last_i ) {
      let fa = type === "dir" ? "folder" : "file-o"
      if ( action ) {
        component = app.btn(
          app.fa( fa, decodeURIComponent( name ) ),
          ()=> r.open( `${ path }/~${ type }` )
        )
      } else {
        component = a['.pill-selected']( app.fa(
          fa, decodeURIComponent( name )
        ) )
      }
    } else {
      component = app.btn(
        app.fa( 'folder', decodeURIComponent( name ) ),
        ()=> r.open( `${ path }/~dir` )
      )
    }

    pills.push( component )

    // if ( path && i === up_i ) up_path = `${ path }`

    scope = `${ path }/`

  } )

  let component = [
    ( pills.length > 1 ) ? app.btn(
      app.fa( 'arrow-up' ),
      ()=> r.open( up_path ),
      "link float-right"
    ) : null,
    pills,
    a.hr,
  ]

  return a["p.pills"]( component )

}
