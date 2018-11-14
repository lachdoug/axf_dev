ax.extensions.form.factory.input = function(
   options={}
) {

  let a = ax.a;

  // options consumed here are: :invalid.
  // Pass the rest to a.input(), with props merged from :inputTag

  let inputTag = Object.assign(
    {
      $init: function () { this.$validity(); },
      onkeypress: function(e) {
        // Default behavior for a form with a single input
        // is to submit when enter is pressed.
        // If there are dependent fields on the form,
        // do not submit on enter, in case dependent fields
        // are not yet showing.
        if (
          ( e.charCode || e.keyCode ) == 13 &&
          this.closest('form').$('field dependent').length
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

      oninput: function(e) {
        this.$validity()
      },

      $value: function() {
        return this.value;
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

      $validity: function() {
        this.setCustomValidity('');
        if(this.validity.valid) {
          return true;
        } else {
          if ( options.invalid ) {
            if ( typeof options.invalid === "string" ) {
              this.setCustomValidity( options.invalid );
            } else {
              let invalidMessage = options.invalid( this.value, this.validity );
              if ( invalidMessage ) {
                this.setCustomValidity( invalidMessage );
              };
            };
          };
          return false;
        };
      },
    },
    options
  )

  delete inputTag.invalid
  delete inputTag.inputTag

  Object.assign( inputTag, options.inputTag )

  return a.input( null, inputTag );

};
