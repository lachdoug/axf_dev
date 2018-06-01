AcellBuilderExtensionsFormBuilder.prototype.dependentfield = function(
  field,
  fieldName,
  options
) {

  var dependentFieldBuilderOptions = options.dependent || {};

  var a = this.cellBuilder.tagBuilder;
  var x = this.cellBuilder.extensionsBuilder;
  var f = this;

  // Fields call _fieldChanged() when their value changes.
  // All fields on the form then receive a call to check dependent status.
  var dependentFieldGeneOptions = {
    _fieldChanged: function () {
      // debugger;
      var nodes = this.closest("form").querySelectorAll('dependentfield');
      nodes.forEach( function( node ) {
        node._checkDependentField();
      } );
    },
  };

  // If has selector, extend the options to include
  // dependent field functionality
  if ( options.dependent ) {
    dependentFieldGeneOptions = Object.assign(
      dependentFieldGeneOptions,
      {
        "data-dependent": true, // this lets other fields find dependent nodes

        $init: function() {
          this._checkDependentField();
        },

        // There is a match when regex pattern match on this field and
        // dependor field also has a match.
        _dependentMatch: function() {
          var dependentOnField = this.closest("form").querySelector( dependentFieldBuilderOptions.selector );
          if ( dependentOnField ) {
            // debugger
            var dependentOnFieldMatch = dependentOnField.closest("dependentfield")._dependentMatch();
            var dependentOnValue = dependentOnField._dependentValue();
            var thisFieldMatch = new RegExp( dependentFieldBuilderOptions.pattern || "" ).test( dependentOnValue );
            // if ( dependentOnValue == "1" ) { debugger }
            return dependentOnFieldMatch && thisFieldMatch;
          } else {
            console.error( "acell Error: failed to find dependent field with selector " + dependentFieldBuilderOptions.selector );
            return false;
          };
        },

        // Field is shown when there is a match,
        // and hidden if there is not a match.
      	_checkDependentField: function () {
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
  } else {
    // If this is not a dependent field, insert stub of _dependentMatch
    // so that fields can determine that this field is shown on form.
    dependentFieldGeneOptions = Object.assign(
      dependentFieldGeneOptions,
      {
        _dependentMatch: function () { return true; },
        _checkDependentField: function () { return true; }
      }
    );
  };

  return a.dependentfield(
    f.wrapper( field, fieldName, options ),
    dependentFieldGeneOptions
  );

};
