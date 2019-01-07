ax.tag.proxy.shim.attributes = function ( property, attributes ) {

  // if the property starts with a word, use the word as tag
  // if the property has a '#' word, use as id
  // if the property has '.' words, use as class
  // e.g. div#myTagId.btn.btn-primary

  let tag = ( property.match(/^([\w|-]+)/) || [] )[1]
  let id = ( property.match(/#([\w|-]+)/) || [] )[1]
  let klass = ( property.match(/\.([\.|\w|-]+)/) || [] )[1]

  if ( tag ) attributes.$tag = tag
  if ( id ) attributes.id = id
  if ( klass ) attributes.class = klass.replace( /\./g, ' ')

  return attributes

}
