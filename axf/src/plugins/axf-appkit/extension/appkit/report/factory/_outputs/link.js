/**
 * Creates ax object for an <input type="(checkbox|radio)">.
 *
 * @example
 * r.check( {
 *   checked: "true",
 *   value: "true",
 *   label: "Accept?"
 * } ),
 * @param {object} options
 * @param {string} options.class The value for the class= attribute. (Convenience mapping)
 * @param {string} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.tag Options for <input> ax object.
 * @param {ax_component} options.label Content component for <label> ax object.
 * @param {object} options.labelTag Options for <label> ax object.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {boolean} options.reverse Put label before check, if true and options.label.
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {string} options.type The value for the type= attribute. (Convenience mapping)
 * @param {(object|array)} options.value If value matches options.checked, the <input> will be set to 'checked'.
 *
 * @return {object} ax object
 */
ax.extension.appkit.report.factory.
link = (r) => function( options={} ) {

  let a = ax.a

  return a['appkit-report-link'](
    a.a(
      options.label || options.value,
      {
        href: options.value,
        ...options.aTag
      }
    ),
    {

      name: options.name,

      class: options.class,
      data: options.data,
      id: options.id,
      style: options.style,
      title: options.title,

      $value: function() {
        return options.value
      },

      ...options.tag

    }

  )

}
