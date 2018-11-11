AxDslFormBuilder.prototype.dependentfield = function(
  wrappedField,
  dependentFieldBuilderOptions
) {

  dependentFieldBuilderOptions = dependentFieldBuilderOptions || {};

  var a = this.cellBuilder;
  var f = this;

  // Fields call _fieldChanged() when their value changes.
  // All fields on the form then receive a call to check dependent status.
  var dependentFieldGeneOptions = {
    _fieldChanged: function () {
      var nodes = this.closest("form").querySelectorAll('[data-dependent~=true]');
      nodes.forEach( function( node ) {
        node._checkDependentField();
      } );
    },
  };

  // If has selector, extend the options to include
  // dependent field functionality
  if ( dependentFieldBuilderOptions.selector ) {
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
          debugger;
          var dependentOnField = this.closest("form").querySelector( dependentFieldBuilderOptions.selector );
          var dependentOnFieldMatch = dependentOnField.closest("dependentfield")._dependentMatch();
          var dependentOnValue = dependentOnField._dependentValue();
          var thisFieldMatch = new RegExp( dependentFieldBuilderOptions.pattern || "" ).test( dependentOnValue );
          return dependentOnFieldMatch && thisFieldMatch;
        },

        // Field is shown when there is a match,
        // and hidden if there is not a match.
        _checkDependentField: function () {
          if ( this._dependentMatch() ) {
            if ( this.style.display === "" ) {
              this.style.display = "block";
            } else if ( this.style.display === "none" ) {
              f.fadeIn(this);
            };
          } else {
            if ( this.style.display === "" ) {
              this.style.display = "none";
            } else if ( this.style.display === "block" ) {
              f.fadeOut(this);
            };
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
      }
    );
  };

  return a.dependentfield( [ wrappedField ], dependentFieldGeneOptions );

};
