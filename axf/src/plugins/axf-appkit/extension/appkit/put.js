ax.extension.appkit.put = function( variable, options={} ) {

  let zealous = options.zealous || false

  let tag = ax.type.is.object( variable ) ? "pre" : "span"

  return ax.a[ tag ]( ax.x.appkit.lib.inspect( variable, { zealous: zealous } ) )

}
