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
// debugger
  let name = options.name
  // Ensure name ends in '[]' when multiple
  if ( options.multiple ) {
    name = lib.field.collection.name( name )
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

    $init: function () { this.$valid() },

    $on: {

      'input: check field depenencies': function(e) {
        // Field dependencies are normally checked when the
        // `change` event is fired.
        // However inputs need field dependencies checked before the
        // `change` event, so that normal TAB and ENTER behaviours on
        // inputs are preserved. That is, if TAB is pressed, focus should
        // go to the next field. The problem is that the next field may
        // be dependent and not visible until after dependencies are checked.
        // By checking dependencies when an input fires an `input` event,
        // The next field will be vissible ( or not ) when focus moves.
        let form = this.$('^form')
        if ( form ) { form.$dependencies() }

        // if ( this.$valid() ) {
        //
        //   // let code = e.charCode || e.keyCode || e.which
        //
        //   // if ( code === 9 ) {
        //   //   // TAB pressed
        //     // let dependent = this.$('^appkit-form-field appkit-form-field-dependent')
        //
        //
        //
        //   //
        //   //   // debugger
        //   //
        //   // }
        //
        //   // 'keyup: handle TAB and ENTER': function (e) {
        //     if ( e.keyCode === 13 ) {
        //       // RETURN pressed
        //       // debugger
        //       // e.preventDefault()
        //       // ax.x.appkit.lib.field.next( this ).$focus()
        //     }
        //   // },
        //   //
        //   //
        //   //
        //   // if ( code == 13 ) {
        //   //   let dependents = this.$('^form').$$('appkit-form-field-dependent')().length
        //   //   if ( dependents ) {
        //   //     // If form has dependent fields
        //   //     // and field is valid, just blur and stop.
        //   //     // Otherwise continue as normal, which will
        //   //     // show validation message.
        //   //     this.blur()
        //   //     // debugger
        //   //     e.preventDefault()
        //   //     return false
        //   //   } else {
        //   //     return true
        //   //   }
        //   // }
        //
        //
        // } else {
        //   return true
        // }


      },

      'input: check validity': function(e) {
        this.$valid()
      },

    },

    $value: function() {
      return this.value
    },

    $focus: function () {
      // debugger
      this.focus()
    },

    $disable: function() {
      this.disabled = 'disabled'
    },

    $enable: function() {
      if ( !options.disabled ) this.removeAttribute('disabled')
    },

    $valid: function() {
      this.setCustomValidity('')
      if(this.validity.valid) {
        return true
      } else {
        if ( options.invalid ) {
          if ( ax.type.is.function( options.invalid ) ) {
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
