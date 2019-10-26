ax.insert = function(
  selector,
  type,
  content,
  options={}
) {
  let method = options.method || 'appendChild'
  let tag = document.createElement( type )
  Object.assign( tag, options.tag )
  let target = document.querySelector( selector )
  tag.innerHTML = content
  target[ method ]( tag )
}
