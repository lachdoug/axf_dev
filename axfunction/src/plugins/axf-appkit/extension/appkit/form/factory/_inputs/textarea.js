/**
 * Creates ax object for a <textarea>.
 *
 * @example
 * f.textarea( {
 *   name: "detail",
 *   placeholder: "Please provide detail",
 * } ),
 * @param {object} options
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {(object)} options.textareaTag Options for <textarea> ax object.
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The value for the value= attribute.
 *
 * @return {object} ax object
 */
ax.extension.appkit.form.factory.
textarea = (f) => function( options = {} ) {

  return ax.a.textarea( options.value, {

    name: options.name,

    class: options.class,
    data: options.data,
    disabled: options.disabled,
    id: options.id,
    placeholder: options.placeholder,
    readonly: options.readonly,
    required: options.required,
    style: options.style,
    title: options.title,

    $value: function() {
      return this.value
    },

    $focus: function () {
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },

    ...options.textareaTag

  } )

}
