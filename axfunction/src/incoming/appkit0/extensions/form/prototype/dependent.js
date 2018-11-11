ax.extensions.form.dependent = function(
  field,
  options
) {

  var options = options || {};

  var a = ax.a;
  var x = ax.x;
  var f = this;

  // Fields call $fieldChanged() when their value changes.
  // All fields on the form then receive a call to check dependent status.
  var attributes = {
    $fieldChanged: function () {
      // debugger;
      var nodes = this.closest("form") ? this.closest("form").querySelectorAll('field dependent') : [];
      nodes.forEach( function( node ) {
        node.$checkDependentField();
      } );
    },
  };

  // If has selector, extend the options to include
  // dependent field functionality
  // if ( options ) {
    attributes = Object.assign(
      attributes,
      {
        // "data-dependent": true, // this lets other fields find dependent nodes

        $init: function() {
          this.$checkDependentField();
        },

        // There is a match when regex pattern match on this field and
        // dependor field also has a match.
        $dependentMatch: function() {
          // debugger
          var dependentOnField = document.querySelector( options.selector );
          if ( dependentOnField ) {
            // debugger
            var dependentOnFieldMatch = dependentOnField.closest("field").$dependentMatch();
            var dependentOnValue = dependentOnField.$dependentValue();
            var thisFieldMatch = new RegExp( options.pattern || "" ).test( dependentOnValue );
            // if ( dependentOnValue == "1" ) { debugger }
            return dependentOnFieldMatch && thisFieldMatch;
          } else {
            console.error( "AxError: failed to find dependent field with selector " + options.selector );
            return false;
          };
        },

        // Field is shown when there is a match,
        // and hidden if there is not a match.
        $checkDependentField: function () {
          // debugger
          var inputs = this.querySelectorAll("input, select, textarea");
          if ( this.$dependentMatch() ) {
            inputs.forEach( function( inputNode ) {
              if ( inputNode.$options ) {
                if ( inputNode.$options.disabled ) {
                  inputNode.disabled = "disabled"
                } else {
                  inputNode.removeAttribute('disabled');
                };
              };
            } );
            if ( this.style.display !== "block" ) {
              f.lib.fadeIn(this);
            };
            return true;
          } else {
            inputs.forEach( function( inputNode ) {
              if ( inputNode.$options ) {
                inputNode.disabled = "disabled";
              };
            } );
            if ( this.style.display !== "none" ) {
              f.lib.fadeOut(this);
            };
            return false;
          };
        },
      }
    );
  // } else {
  //   // If this is not a dependent field, insert stub of $dependentMatch
  //   // so that fields can determine that this field is shown on form.
  //   attributes = Object.assign(
  //     attributes,
  //     {
  //       $dependentMatch: function () { return true; },
  //       $checkDependentField: function () { return true; }
  //     }
  //   );
  // };

  return a.dependent( field, attributes );

};
