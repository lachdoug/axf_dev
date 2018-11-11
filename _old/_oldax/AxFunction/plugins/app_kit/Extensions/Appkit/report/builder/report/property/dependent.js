AxFunction.Extensions.Report.prototype.dependent = function(
  property,
  propertyName,
  options
) {

  var dependentOptions = options.dependent || {};

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var r = this;

  // Propertys call _propertyChanged() when their value changes.
  // All properties on the form then receive a call to check dependent status.
  var dependentAttributes = {
    // _propertyChanged: function () {
    //   // debugger;
    //   var nodes = this.closest("form") ? this.closest("form").querySelectorAll('dependentproperty') : [];
    //   nodes.forEach( function( node ) {
    //     node.$checkDependentProperty();
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
          this.$checkDependentProperty();
        },

        // There is a match when regex pattern match on this property and
        // dependor property also has a match.
        $dependentMatch: function() {
          // debugger
          var dependentOnProperty = document.querySelector( dependentOptions.selector );
          if ( dependentOnProperty ) {
            // debugger
            var dependentOnPropertyMatch = dependentOnProperty.closest("property").$dependentMatch();
            var dependentOnValue = dependentOnProperty.$dependentValue();
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
        $checkDependentProperty: function () {
          if ( this.$dependentMatch() ) {
            if ( this.style.display === "" ) {
              this.style.display = "block";
            } else {
              x.appkit.lib.fadeIn(this);
            };
            return true;
          } else {
            if ( this.style.display === "" ) {
              this.style.display = "none";
            } else {
              x.appkit.lib.fadeOut(this);
            };
            return false;
          };
        },
      }
    );
  } else {
    // If this is not a dependent property, insert stub of $dependentMatch
    // so that properties can determine that this property is shown on form.
    dependentAttributes = Object.assign(
      dependentAttributes,
      {
        $dependentMatch: function () { return true; },
        $checkDependentProperty: function () { return true; }
      }
    );
  };

  return a.dependentproperty(
    r.wrapper( property, propertyName, options ),
    dependentAttributes
  );

};
