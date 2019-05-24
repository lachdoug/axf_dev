ax.extension.appkit.router.factory.
locate = (r) => function( locator='' ) {

  let match
  let scopedpath
  let target

  if ( match = locator.match( /^(>+)(.*)/) ) {

    let forward = match[1].length
    scopedpath = "/" + match[2]
    target = this.router[ forward ]

  } else if ( match = locator.match( /^\^(.*)/) ) {

      scopedpath = "/" + match[1]
      target = this.router[0]

  } else {

    match = locator.match( /^(<*)(.*)/)
    let backward = match[1].length
    scopedpath = "/" + match[2]
    target = this.router[ this.router.length - backward - 1 ]

  }

  let scope = target.$scope
  let path = scope + scopedpath
  return { path: path, scope: scope, target: target }

}
