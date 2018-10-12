ax.document.render = function ( content, options={} ) {

  let nextName = function () {
    let name
    do { name = "$ax_" + ( ax.nameCounter++ ) }
    while ( window[ name ] !== undefined )
    return name
  }

  let cell = ax.factory( content, options.tag )
  let name = options.name || nextName()

  if ( options.cell != false ) cell.$cell = name

  window[name] = cell

  return name

}
