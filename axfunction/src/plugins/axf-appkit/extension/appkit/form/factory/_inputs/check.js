/**
 * Creates ax object for an <input type="(checkbox|radio)">.
 *
 * @example
 * f.check( {
 *   checked: "true",
 *   value: "true",
 *   label: "Accept?"
 * } ),
 * @param {object} options
 * @param {string} options.checked The value for the value= attribute. This is the value that the field will submit when it has been checked.
 * @param {string} options.class The value for the class= attribute. (Convenience mapping)
 * @param {string} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.inputTag Options for <input> ax object.
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
ax.extension.appkit.form.factory.
check = (f) => function( options={} ) {

  let checkedValue = options.checked || "on"

  let input = ax.a.input( {

    name: options.name,
    value: checkedValue,

    checked: options.value == checkedValue,
    class: options.class,
    data: options.data,
    disabled: options.disabled,
    id: options.id,
    readonly: options.readonly,
    required: options.required,
    style: options.style,
    title: options.title,
    type: options.type || "checkbox",

    $value: function() {
      return this.checked ? this.value : ''
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

    ...options.inputTag

  } )

  if ( options.label ) {
    let labelTag = {
      $disable: function() {
        this.$('input').$disable()
      },
      $enable: function() {
        this.$('input').$enable()
      },
      $value: function() {
        return this.$('input').$value()
      },
      $focus: function () {
        this.$('input').$focus()
      },

      ...options.labelTag
    }
    let nodes = [ input, options.label ]
    if ( options.reverse ) nodes.reverse()
    return ax.a.label( nodes, labelTag )
  } else {
    return input
  }

}
