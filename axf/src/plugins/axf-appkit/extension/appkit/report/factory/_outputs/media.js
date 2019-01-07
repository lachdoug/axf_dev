/**
 * Creates ax object for an <appkit-report-image>.
 *
 * @example
 * r.image( {
 *   name: "score",
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute on <img>. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute on <img>. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute on <img>. (Convenience mapping)
 * @param {object} options.imageTag Options for <appkit-report-image> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute on <img>. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute on <img>. (Convenience mapping)
 * @param {object} options.tag Options for a['appkit-report-image']().
 * @param {string} options.title The value for the title= attribute on <img>. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-image>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
media = (r) => function( options={} ) {

  let a = ax.a

  let value = options.value
  let type = options.type || "img"

  let content

  if ( value ) {
    if ( type === "video" || type === "audio") {
      content = { $nodes: a.source( {
        src: value
      } ) }
    } else {
      content = { src: value }
    }
  } else {
    content = { $nodes: a['appkit-report-placeholder'](
      options.placeholder
    ) }
  }

  return a['appkit-report-media']( a[ type ]( {

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

    ...( options.controls === false ? {} : { controls: "controls" } ),

    ...content,

    ...options[ type + 'Tag' ]

  }, options.tag ) )

}
