AxFunction.Extensions.Appkit.FormFactory.CustomFields.prototype.multiselect = function(
  name,
  options={}
) {

  var a = this.axFunction.tags;
  var x = this.axFunction.extensions;
  var f = this.factory;

  name = f.lib.fieldNameForCollection( name );
  options.value = f.lib.fieldValueForCollection( options.value );
  options.collection = f.lib.fieldCollectionFrom( options.collection || { 0: "Off", 1: "On" } );

  var attributes = Object.assign(
    {
      onchange: function () {
        this.nextSibling.$addSelectedItem( {
          index: this.selectedIndex,
          value: this.value,
          label: this.options[this.selectedIndex].text,
        } );
        this.$disableSelected();
      },

      $disableSelected: function () {
        this.options[this.selectedIndex].disabled = "disabled";
        this.selectedIndex = 0;
        this.$checkForEnabledOptions();
      },

      $enableDeselected: function ( index ) {
        this.options[index].removeAttribute('disabled');
        this.$checkForEnabledOptions();
      },

      $checkForEnabledOptions: function() {
        var anyEnabled;
        for (var i=0, n=this.options.length; i<n ; i++) {
          // if ( i === 0 ) { continue; };
          if ( i > 0 && !this.options[i].disabled ) { anyEnabled = true; };
        };
        if ( anyEnabled ) { this.removeAttribute('disabled'); } else { this.disabled = "disabled"; };
        // debugger
      },
    },
    options.input || {}
  );

  var select = f.select(
    "", // No name on select. Field name goes on hidden inputs.
    {
      placeholder: options.placeholder || "Add to selection",
      collection: options.collection,
      attributes: attributes
    }
  );

  var selectedList = a.selecteditems( null, {
    _items: [],

    $removeSelectedItem: function ( item ) {
      var index = this._items.indexOf( item );
      if (index !== -1) this._items.splice(index, 1);
      this.closest("field") && this.closest("field").$fieldChanged();
    },

    $addSelectedItem: function ( item, index ) {
      this._items.unshift(item);
      this.closest("field") && this.closest("field").$fieldChanged();
    },

    $dependentValue: function() {
      return this._items.map( function(item) { return item.value } ).join(" ")
    },

    $init: function() { this.$update(); },

    $components: [
      a.input( null, {
        name: name,
        type: "hidden",
        $dependentValue: function () {
          return this.closest("selecteditems").$dependentValue();
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
            $dependentValue: function () {
              return this.closest("selecteditems").$dependentValue();
            }
          } )
          // a.selecteditem(
          //   a.noneselectedmessage("empty"),
          //   {
          //     style: "",
          //     onclick: function (e) {
          //       this.closest("selecteditems").previousSibling.focus();
          //     },
          //   }
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
              a.button( x.icon( "fa fa-times" ), { type: "button" } ),
              {
                onclick: function(e) {
                  this.closest("multiselect").
                    querySelector("select").$enableDeselected( item.index );
                  this.closest("selecteditems").$removeSelectedItem( item );
                }
              }
            ),
            a.input( "", {
              name: name,
              type: "hidden",
              required: options.required,
              value: item.value,
              $dependentValue: function () {
                return this.closest("selecteditems").$dependentValue();
              }
            } )
          ] );
        } );
      };
    },
  } );

  return a.multiselect([
    select,
    selectedList
  ], {
    $init: function() { this.$preselectItems(); },

    // $labelOnclick: function(e) { debugger; },


    $preselectItems: function () {
      var items = [];
      options.value.map( (itemValue) => {
        var select = this.querySelector("select")
        var selections = select.options;


        for (var i=0, n=selections.length; i<n ; i++) {


          if ( selections[i].value.toString() === itemValue.toString() ) {

            items.push( {
              index: i,
              value: itemValue,
              label: selections[i].text,
            } );
            selections[i].disabled = "disabled";
          };
        };
      } );
      this.querySelector("selecteditems")._items = items;
    },

  });

};
