AxFrameworkExtensionsFormBuilder.prototype.dependent = function(
  field,
  options
) {

  var options = options || {};

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;
  var f = this;

  // Fields call _fieldChanged() when their value changes.
  // All fields on the form then receive a call to check dependent status.
  var attributes = {
    _fieldChanged: function () {
      // debugger;
      var nodes = this.closest("form") ? this.closest("form").querySelectorAll('field dependent') : [];
      nodes.forEach( function( node ) {
        node._checkDependentField();
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
          this._checkDependentField();
        },

        // There is a match when regex pattern match on this field and
        // dependor field also has a match.
        _dependentMatch: function() {
          // debugger
          var dependentOnField = document.querySelector( options.selector );
          if ( dependentOnField ) {
            // debugger
            var dependentOnFieldMatch = dependentOnField.closest("field")._dependentMatch();
            var dependentOnValue = dependentOnField._dependentValue();
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
      	_checkDependentField: function () {
          // debugger
  				if ( this._dependentMatch() ) {
            if ( this.style.display === "" ) {
              this.style.display = "block";
            } else {
              x.lib.fadeIn(this);
            };
            return true;
  				} else {
            if ( this.style.display === "" ) {
              this.style.display = "none";
            } else {
              x.lib.fadeOut(this);
            };
            return false;
  				};
    		},
      }
    );
  // } else {
  //   // If this is not a dependent field, insert stub of _dependentMatch
  //   // so that fields can determine that this field is shown on form.
  //   attributes = Object.assign(
  //     attributes,
  //     {
  //       _dependentMatch: function () { return true; },
  //       _checkDependentField: function () { return true; }
  //     }
  //   );
  // };

  return a.dependent( field, attributes );

};
