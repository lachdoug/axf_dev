ACellDslFormCustomFieldBuilder.prototype.a_cell_multiselect = function(
	name, value, options
) {
// debugger;
  var a = this.cellBuilder;
  var f = this.formBuilder;

  // Ensure name ends in '[]'
  if ( name.slice(-2) != "[]" ) {
    name = name + "[]";
  };

  var valueAsArray = function () {
    // var value = builderOptions.value;
    if ( value instanceof Array ) {
      return value;
    } else if ( value ) {
      return [ value ]
    } else {
      return [];
    }
  };

  var select = function() {
    return f.select(
      "", // No name on select. Field name goes on hidden inputs.
      {
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
      },
      {
        placeholder: options.placeholder || "Add to selection",
        collection: options.collection || []
      }
    );
  };

  var selectedList = function() {
    return a.selecteditems({
      _items: [],

      _removeSelectedItem: function ( item ) {
        var index = this._items.indexOf( item );
        if (index !== -1) this._items.splice(index, 1);
        this.closest("dependentfield")._fieldChanged();
      },

      _addSelectedItem: function ( item, index ) {
        this._items.unshift(item);
        this.closest("dependentfield")._fieldChanged();
      },

      _dependentValue: function() {
        return this._items.map( function(item) { return item.value } ).join(" ")
      },

      $init: function() { this.$update(); },

      $components: [
        a.input( {
          name: name,
          type: "hidden",
          _dependentValue: function () {
            return this.closest("selecteditems")._dependentValue();
          }
        } )
      ],

      $update: function() {
        if ( this._items.length === 0 ) {
          this.$components = [
            a.selecteditem([ a.noneselectedmessage("None"),
            a.input( {
              name: name,
              type: "hidden",
              _dependentValue: function () {
                return []; // this.closest("selecteditems")._dependentValue();
              }
            } )
          ]) ];
        } else {
          this.$components = this._items.map( function( item ) {
            return a.selecteditem( [
              a.itemlabel( item.label ),
              a.itemremovebutton(
                {
                  $html: " &Chi; ",
                  onclick: function(e) {
                    this.closest("acellmultiselect").
                      querySelector("select")._enableDeselected( item.index );
                    this.closest("selecteditems")._removeSelectedItem( item );
                  }
                }
              ),
              a.input( {
                name: name,
                type: "hidden",
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

  return a.acellmultiselect([
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
          if ( options[i].value === itemValue ) {
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
