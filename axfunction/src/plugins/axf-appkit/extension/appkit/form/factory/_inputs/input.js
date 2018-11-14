/**
 * Creates ax object for an <input>.
 *
 * @example
 * f.input( {
 *   name: "score",
 *   type: "number"
 *   value: 12,
 * } ),
 * @param {object} options
 * @param {string} options.autocomplete The value for the autocomplete= attribute. (Convenience mapping)
 * @param {(object|string)} options.class The value for the class= attribute. (Convenience mapping)
 * @param {(object|string)} options.data The value for the data= attribute. (Convenience mapping)
 * @param {string} options.disabled The default value for the disabled= attribute. Note that the disabled attribute can be changed by the $disable method. The $enable method, when it's called, refers to options.disabled and if not set the disabled attribute is removed from the element.
 * @param {string} options.id The value for the id= attribute. (Convenience mapping)
 * @param {object} options.inputTag Options for <input> ax object.
 * @param {(string|function)} options.invalid The custom validation message, shown when options.pattern does not match. Can be a function that returns a string. The function is called when the field is changed with two arguments: the input value, and the element.validity object.
 * @param {string} options.multiple The value for the multiple= attribute. If set, the name attribute will have [] appended, if not already present in the value from options.name .
 * @param {string} options.name The value for the name= attribute.
 * @param {string} options.pattern The value for the pattern= attribute. (Convenience mapping)
 * @param {string} options.placeholder The value for the placeholder= attribute. (Convenience mapping)
 * @param {string} options.readonly The value for the readonly= attribute. (Convenience mapping)
 * @param {string} options.required The value for the required= attribute. (Convenience mapping)
 * @param {string} options.style The value for the style= attribute. (Convenience mapping)
 * @param {string} options.title The value for the title= attribute. (Convenience mapping)
 * @param {string} options.type The value for the type= attribute. (Convenience mapping)
 * @param {(object|array)} options.value The value for the value= attribute.
 *
 * @return {object} ax object
 */
ax.extension.appkit.form.factory.
input = (f) => function( options={} ) {

  let name = options.name
  // Ensure name ends in '[]' when multiple
  if ( options.multiple ) {
    name = lib.form.collection.name( name )
  }

  return ax.a.input( {

    name: name,
    value: options.value,

    autocomplete: options.autocomplete,
    class: options.class,
    data: options.data,
    disabled: options.disabled,
    id: options.id,
    multiple: options.multiple,
    placeholder: options.placeholder,
    readonly: options.readonly,
    required: options.required,
    style: options.style,
    title: options.title,
    type: options.type,

    $init: function () { this.$validity() },

    $on: {

      'keypress: do not submit if form has dependent fields': function(e) {
        // Default behavior for a form with a single input
        // is to submit when enter is pressed.
        // If there are dependent fields on the form,
        // do not submit on enter, in case dependent fields
        // are not yet showing.

        if (
          ( e.charCode || e.keyCode ) == 13 &&
          this.$('^form').$$('appkit-form-field-dependent')().length
        ) {
          // If field is valid, just blur and stop.
          // Otherwise continue as normal, which will
          // show validation message.
          if ( this.$validity() ) {
            this.blur()
            return false
          } else {
            return true
          }
        }
      },

      'input: check validity': function(e) {
        this.$validity()
      },

    },

    $value: function() {
      return this.value
    },

    $focus: function () {
      debugger
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },

    $validity: function() {
      this.setCustomValidity('')
      if(this.validity.valid) {
        return true
      } else {
        if ( options.invalid ) {
          if ( typeof options.invalid === "function" ) {
            let invalidMessage = options.invalid( this.value, this.validity )
            if ( invalidMessage ) {
              this.setCustomValidity( invalidMessage )
            }
          } else {
            this.setCustomValidity( options.invalid )
          }
        }
        return false
      }
    },

    ...options.inputTag

  } )

}
