/**
 * Creates ax object for an <appkit-report-text>.
 *
 * @example
 * r.text( {
 *   name: "score",
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.textTag Options for <appkit-report-text> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-text>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
text = (r) => function( options={} ) {

  let a = ax.a
  let x = ax.x

  let value = options.value

  if ( value && options.type ) {
    let prototype = ax.type.is.function( options.type ) ? options.type : x.appkit.lib.text.capitalize( options.type )
    value = new window[ prototype ]( value )
    if ( options.stringify ) {
      if ( ax.type.is.string( options.stringify ) ) {
        value = value[ options.stringify ]()
      } else {
        value = value[ options.stringify.method || 'toString' ]( ...( options.stringify.arguments || [] ) )
      }
    } else {
      value = value.toString()
    }
  }

  return a['appkit-report-text']( {

    name: options.name,

    class: options.class,
    data: options.data,
    id: options.id,
    placeholder: options.placeholder,
    style: options.style,
    title: options.title,

    $value: function() {
      return value
    },

    ...( value ?
      { $text: value } :
      { $nodes: a['appkit-report-placeholder'](
        options.placeholder
      ) }
    ),

    ...options.textTag

  } )

}
