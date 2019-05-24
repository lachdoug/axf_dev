ax.extension.appkit.document.stylesheet.proxy.
function = function( styles, options={} ) {

  let a = ax.a
  let x = ax.x

  x.appkit.document.insert(
    'head',
    'style',
    x.appkit.lib.style( styles, options.scope ),
    { tag: options.styleTag }
  )

  return null

}
