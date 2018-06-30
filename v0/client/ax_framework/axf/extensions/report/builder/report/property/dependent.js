AxFrameworkExtensionsReportBuilder.prototype.dependent = function(
  property,
  propertyName,
  options
) {

  var dependentOptions = options.dependent || {};

  var a = this.axFramework.tags;
  var x = this.axFramework.extensions;
  var r = this;

  // Propertys call _propertyChanged() when their value changes.
  // All properties on the form then receive a call to check dependent status.
  var dependentAttributes = {
    // _propertyChanged: function () {
    //   // debugger;
    //   var nodes = this.closest("form") ? this.closest("form").querySelectorAll('dependentproperty') : [];
    //   nodes.forEach( function( node ) {
    //     node._checkDependentProperty();
    //   } );
    // },
  };

  // If has selector, extend the options to include
  // dependent property functionality
  if ( options.dependent ) {
    dependentAttributes = Object.assign(
      dependentAttributes,
      {
        // "data-dependent": true, // this lets other properties find dependent nodes

        $init: function() {
          this._checkDependentProperty();
        },

        // There is a match when regex pattern match on this property and
        // dependor property also has a match.
        _dependentMatch: function() {
          // debugger
          var dependentOnProperty = document.querySelector( dependentOptions.selector );
          if ( dependentOnProperty ) {
            // debugger
            var dependentOnPropertyMatch = dependentOnProperty.closest("property")._dependentMatch();
            var dependentOnValue = dependentOnProperty._dependentValue();
            var thisPropertyMatch = new RegExp( dependentOptions.pattern || "" ).test( dependentOnValue );
            // if ( dependentOnValue == "1" ) { debugger }
            return dependentOnPropertyMatch && thisPropertyMatch;
          } else {
            console.error( "AxError: failed to find dependent property with selector " + dependentOptions.selector );
            return false;
          };
        },

        // Property is shown when there is a match,
        // and hidden if there is not a match.
      	_checkDependentProperty: function () {
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
    // If this is not a dependent property, insert stub of _dependentMatch
    // so that properties can determine that this property is shown on form.
    dependentAttributes = Object.assign(
      dependentAttributes,
      {
        _dependentMatch: function () { return true; },
        _checkDependentProperty: function () { return true; }
      }
    );
  };

  return a.dependentproperty(
    r.wrapper( property, propertyName, options ),
    dependentAttributes
  );

};
