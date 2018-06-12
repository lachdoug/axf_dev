AxBuilderExtensionsFormCustomFieldBuilder.prototype.multiselect = function(
	name,
	options
) {

  var a = this.cellBuilder.tagBuilder;
	var x = this.cellBuilder.extensionsBuilder;
  var f = this.formBuilder;

  // Ensure name ends in '[]'
  if ( name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

  var valueAsArray = function () {
    var value = options.value;
    if ( value instanceof Array ) {
      return value;
    } else if ( value ) {
      return [ value ]
    } else {
      return [];
    }
  };

  var select = function() {
		// debugger;
    return f.select(
      "", // No name on select. Field name goes on hidden inputs.
			{
				placeholder: options.placeholder || "Add to selection",
				collection: options.collection,
				select: {
					onchange: function () { // A
	          this.nextSibling._addSelectedItem( {
	            index: this.selectedIndex,
	            value: this.value,
	            label: this.options[this.selectedIndex].text,
	          } );
	          this._disableSelected();
	        },

	        _disableSelected: function () {
	          this.options[this.selectedIndex].disabled = true;
	          this.selectedIndex = 0;
	          this._checkForEnabledOptions();
	        },

	        _enableDeselected: function ( index ) {
	          this.options[index].disabled = false;
	          this._checkForEnabledOptions();
	        },

	        _checkForEnabledOptions: function() {
	          var anyEnabled;
	          for (var i=0, n=this.options.length; i<n ; i++) {
	            if ( !this.options[i].disabled ) { anyEnabled = true; };
	          };
	          if ( anyEnabled ) { this.disabled = false; } else { this.disabled = true; };
	        },
				}
			}
    );
  };

  var selectedList = function() {
    return a.selecteditems( null, {
      _items: [],

      _removeSelectedItem: function ( item ) {
        var index = this._items.indexOf( item );
        if (index !== -1) this._items.splice(index, 1);
        this.closest("field")._fieldChanged();
      },

      _addSelectedItem: function ( item, index ) {
        this._items.unshift(item);
        this.closest("field")._fieldChanged();
      },

      _dependentValue: function() {
				return this._items.map( function(item) { return item.value } ).join(" ")
      },

      $init: function() { this.$update(); },

      $components: [
        a.input( null, {
          name: name,
          type: "hidden",
          _dependentValue: function () {
            return this.closest("selecteditems")._dependentValue();
          }
        } )
      ],

      $update: function() {
        if ( this._items.length === 0 ) {
					this.style.display = "none";
					this.closest("selecteditems").previousSibling.required = options.required;
          this.$components = [
						a.input( [], {
							name: name,
							type: "hidden",
							_dependentValue: function () {
								return this.closest("selecteditems")._dependentValue();
							}
						} ),
            // a.selecteditem(
						// 	a.noneselectedmessage("empty"),
						// 	{
						// 		style: "",
						// 		onclick: function (e) {
						// 			this.closest("selecteditems").previousSibling.focus();
						// 		},
						// 	}
						// ),
					];
        } else {
					this.style.display = "";
					this.closest("selecteditems").
						previousSibling.removeAttribute("required");
          this.$components = this._items.map( function( item ) {
            return a.selecteditem( [
              a.itemlabel( item.label ),
              a.itemremovebutton(
								a.button( x.fa( "times" ), { type: "button" } ),
                {
                  onclick: function(e) {
                    this.closest("multiselect").
                      querySelector("select")._enableDeselected( item.index );
                    this.closest("selecteditems")._removeSelectedItem( item );
                  }
                }
              ),
              a.input( "", {
                name: name,
								type: "hidden",
								required: options.required,
                value: item.value,
								_dependentValue: function () {
                  return this.closest("selecteditems")._dependentValue();
                }
              } )
            ] );
          } );
        };
      },
    });
  };

  return a.multiselect([
    select(),
    selectedList()
  ], {
    $init: function() { this._preselectItems(); },

    _preselectItems: function () {
      var items = [];
      valueAsArray().map( (itemValue) => {
        var select = this.querySelector("select")
        var options = select.options;


        for (var i=0, n=options.length; i<n ; i++) {


          if ( options[i].value.toString() === itemValue.toString() ) {

						items.push( {
              index: i,
              value: itemValue,
              label: options[i].text,
            } );
            options[i].disabled = true;
          };
        };
      } );
      this.querySelector("selecteditems")._items = items;
    },

  });

};
