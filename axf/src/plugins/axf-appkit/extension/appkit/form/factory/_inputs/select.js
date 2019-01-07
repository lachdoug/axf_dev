/**
 * Creates ax object for a <select>.
 *
 * @example
 *  f.select( {
 *    name: "thing",
 *    collection: [
 *      "foo",
 *      {
 *        html: "&mdash;&mdash;&mdash;&mdash;&mdash;",
 *        disabled: true
 *      },
 *      { value: "bar", display: "Bar" }
 *    ],
 *    value: "bar",
 *  } ),
 * @param {object} options
 * @param {(object|array)} options.collection The collection for the <option> tags. If object, keys are submit values and values are display values. If array, an item can be a string, in which case it will be used as the submit value and labelized for the display value, or an array, where the first element is the submit value and the second value is the display value, or an object, with keys value, label, html, disabled.
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.placeholder If set, the collection will have an option added as the first item that has the placeholder text with an empty value. If options.required is also set, the option will be disabled.
 * @param {string} options.readonly If set, the <select> will be disabled and a hidden field will be added to with same name and value, so that a form param is a submitted.
 * @param {string} options.required The value for the required= attribute. If not set and options.placeholder not set, the collection will have an empty option added as the first item.
 * @param {object} options.selectTag Options for <select> ax object.
 * @param {(object|array)} options.value The value of the selected option. If set, the corresponding <option> will be set to 'selected'.
 *
 * @return {object} ax object
 */
 // * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 // * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 // * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 // * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 // * @param {string} options.title The value for the title= attribute. (Convenience mapping)
ax.extension.appkit.form.factory.
select = (f) => function( options = {} ) {

  let a = ax.a
  let x = ax.x
  let lib = x.appkit.lib.field

  // let lib = x.appkit.lib
  let selectOptions = x.appkit.form.factory.select.options( options )
// debugger
  let name = options.name
  // Ensure name ends in '[]' when multiple
  if ( options.multiple ) {
    name = lib.collection.name( name )
  }

  // Insert hidden field when readonly (and therefore disabled )
  if ( options.readonly ) {
    selectOptions.unshift( ax.a.input( {
      type: "hidden",
      name: name,
      value: options.value
    } ) )
  }

  return ax.a.select( selectOptions, {

    name: name,

    class: options.class,
    data: options.data,
    disabled: options.disabled || options.readonly,
    id: options.id,
    multiple: options.multiple,
    required: options.required,
    style: options.style,
    title: options.title,

    $value: function() {
      if ( this.multiple ) {
        let result = []
        let selected = this.querySelectorAll('option:checked')
        selected.forEach( function( option ) {
          result.push( option.value )
        } )
        return result
      } else {
        return this.value
      }
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

    ...options.selectTag

  } )

}
