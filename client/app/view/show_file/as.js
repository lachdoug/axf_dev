app.view.show_file.as = ( r, data ) => (a,x) => {

  let component = []

  if ( data.as === "link" ) {

    let link = data.link || {}
    let href = link.href
    let label = link.label || "Open"

    component.push(
      a.hr,
      a.a(
        app.fa( "external-link", label ),
        { href: href, target: href, class: 'btn btn-link' }
      ),
      a.hr,
    )

  } else if ( data.as === "text" ) {

    component.push(
      a.hr,
      data.text,
      data.text.length === 0 ? a.i( "No content.") : null,
      a.hr,
    )

  } else if ( data.as === "pre" ) {

    component.push(
      a.hr,
      x.appkit.put( data.text ),
      data.text.length === 0 ? a.i( "No content.") : null,
      a.hr,
    )

  } else if ( data.as === "list" ) {

    component.push(
      a.hr,
      x.appkit.list( data.object ),
      Object.keys( data.object ).length === 0 ? a.i( "No content.") : null,
      a.hr,
    )

  } else if ( data.as === "markdown" ) {

    component.push(
      a.hr,
      x.md( data.text ),
      data.text.length === 0 ? a.i( "No content.") : null,
      a.hr,
    )

  } else if ( data.as === "code" ) {

    component.push(
      x.codemirror.code( data.text, { mode: data.mode } ),
    )

  }

  return [
    a.p( component ),
    a.p( a.small( [
      a.label( "Modified" ), ' ', x.timeago( data.modified ),
    ] ) )
  ]

}
