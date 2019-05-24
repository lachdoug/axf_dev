ax.extension.appkit.document.script = function( script, options={} ) {

  ax.document.insert(
    'head',
    'script',
    script,
    { tag: options.scriptTag }
  )

}
