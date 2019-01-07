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
list = (r) => function( options={} ) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib.field

  let name = lib.collection.name( options.name )
  let value = lib.collection.value( options.value )
  let type = options.type || 'ul'

  let item

  if ( options.item ) {
    item = options.item
  } else {
    item = ( item ) => a.li( item, liTagOptions( item ) )
  }

  let liTagOptions = options.liTag

  if ( !ax.type.is.function( liTagOptions ) ) {
    liTagOptions = () => liTagOptions
  }

  return a['appkit-report-list']( a[ type ]( {

    name: name,

    class: options.class,
    data: options.data,
    id: options.id,
    placeholder: options.placeholder,
    style: options.style,
    title: options.title,

    $value: function() {
      return value
    },

    $nodes: value.map( item ),

    ...options.textTag

  } ) )

}
