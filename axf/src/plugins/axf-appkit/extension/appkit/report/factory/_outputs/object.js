/**
 * Creates ax object for an <appkit-report-object>.
 *
 * @example
 * r.object( {
 *   name: "score",
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.objectTag Options for <appkit-report-object> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The content for <appkit-report-object>.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
object = (r) => function( options={} ) {

  let a = ax.a
  let x = ax.x

  return a['appkit-report-object']( {

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

    $nodes: x.appkit.put( options.value ),

    ...options.objectTag

  } )

}
