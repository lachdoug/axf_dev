ax.document.insert = function( selector, type, content, options={} ) {
  let method = options.method || 'appendChild'
  var tag = document.createElement( type )
  Object.assign( tag, options.tag )
  var target = document.querySelector( selector )
  tag.innerHTML = content
  target[ method ]( tag )
}
