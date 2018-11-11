ax.extensions.form.factory.multiselect = function(
  // name,
  options={}
) {

  let a = ax.a;
  let x = ax.x;
  let f = this;

  options.name = ax.extensions.appkit.lib.fieldNameForCollection( options.name );
  options.value = ax.extensions.appkit.lib.fieldValueForCollection( options.value );
  options.collection = ax.extensions.appkit.lib.fieldCollectionFrom( options.collection );

  var selectTag = Object.assign(
    {
      onchange: function () {
        this.nextSibling.$add( {
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
          if ( i > 0 && !this.options[i].disabled ) { anyEnabled = true; };
        };
        if ( anyEnabled ) { this.removeAttribute('disabled'); } else { this.disabled = "disabled"; };
      },
    },
    options.input || {}
  );

  var select = f.select(
    // No name on select. Field name goes on hidden inputs.
    {
      placeholder: options.placeholder || "Add to selection",
      collection: options.collection,
      selectTag: selectTag
    }
  );

  var selectedList = a.selecteditems( null, {
    $items: [],

    $remove: function ( item ) {
      var index = this.$items.indexOf( item );
      if (index !== -1) this.$items.splice(index, 1);
      this._checkDependent && this._checkDependent();
    },

    $add: function ( item, index ) {
      this.$items.unshift(item);
      this._checkDependent && this._checkDependent();
    },

    $init: function() { this.$update(); },

    $components: [
      f.input( {
        name: options.name,
        inputTag: { type: "hidden" },
      } )
    ],

    $update: function() {
      if ( this.$items.length === 0 ) {
        this.style.display = "none";
        this.closest("selecteditems").previousSibling.required = options.required;
        this.$components = [
          a.input( {
            name: options.name,
            inputTag: { type: "hidden" },
          } )
        ];
      } else {
        this.style.display = "";
        this.closest("selecteditems").
          previousSibling.removeAttribute("required");
        this.$components = this.$items.map( function( item ) {
          return a.selecteditem( [
            a.itemlabel( item.label ),
            a.itemremovebutton(
              a( " &Cross;" ),
              {
                onclick: function(e) {
                  this.closest("multiselect").
                    $("select")[0].$enableDeselected( item.index );
                  this.closest("selecteditems").$remove( item );
                }
              }
            ),
            f.input( {
              name: options.name,
              required: options.required,
              value: item.value,
              inputTag: { type: "hidden" },
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


    $value: function() {
      return this.$('selecteditems')[0].$items.
        map( function(item) { return item.value } )
    },

    $focus: function () {
      this.$('select')[0].focus()
    },

    // $disable: function() {
    //   this.$('select').$disable()
    // },
    // $enable: function() {
    //   if ( !options.disabled ) this.$('select').$enable()
    // },

    $disable: function() {
      this.querySelectorAll('input').
        forEach( function( input ) { input.$disable() } )
    },
    $enable: function() {

      if ( !options.disabled ) this.querySelectorAll('input').
        forEach( function( input ) { input.$enable() } )
    },



    $preselectItems: function () {
      var items = [];
      options.value.map( (itemValue) => {
        var select = this.$("select")[0]
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
      this.$("selecteditems")[0].$items = items;
    },

  });

};
