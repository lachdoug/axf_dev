// options.collection
// options.value
// options.placeholder
// options.required

ax.extensions.form.factory.selectinput = function(
  // name,
  options={}
) {

  let a = ax.a;
  let x = ax.x;
  let f = this;
  let lib = ax.extensions.appkit.lib
// debugger
  options.collection = lib.fieldCollectionFrom( options.collection || { 0: "Off", 1: "On" } );
  options.collection.push( "—————" );
  options.collection.push( [ "__USE_INPUT__", "Custom value" ]);
  // options.id = options.id + "_selectinput";

  var selectValue;
  var inputValue;

  if ( options.value ) {
    var valueInCollection = options.collection.some( option => option[0] == options.value );
    selectValue = valueInCollection ? options.value : "__USE_INPUT__";
    inputValue = valueInCollection ? null : options.value;
  } else {
     // show the input if no placeholder on select
    selectValue = options.placeholder === undefined ? "__USE_INPUT__" : "";
  };

  let selectinputTag = {
    $value: function() {
      return this.value;
    },
    $focus: function () {
      let select = this.$('select')[0]
      let input = this.$('input:not([type="hidden"])')[0]
      if ( select.value === "__USE_INPUT__" ) {
        input.focus()
      } else {
        select.focus()
      }
    },
    $disable: function() {
      let hiddeninput = this.$('input[type="hidden"]')[0]
      hiddeninput.$disable()
    },
    $enable: function() {
      if ( !options.disabled ) {
        let hiddeninput = this.$('input[type="hidden"]')[0]
        hiddeninput.$enable()
      }
    },
    // $focus: function() {
    //   // debugger
    // },
    onchange: function () {
      // debugger
      // console.log("do onchange for selectinput")
      let select = this.$('select')
      let input = this.$('input:not([type="hidden"])')
      let hiddeninput = this.$('input[type="hidden"]')
      if ( select.value === "__USE_INPUT__" ) {
        input.style.display = ""
        hiddeninput.value = input.value
        if ( options.required ) {
          select.removeAttribute("required")
          input.required = 'required'
        }
      } else {
        input.style.display = "none"
        hiddeninput.value = select.value
        if ( options.required ) {
          input.removeAttribute("required")
          select.required = 'required'
        }
      }

      // debugger
      // input.value = value
    }
  }

  var inputTag = Object.assign(
    {
      style: "display: none;",
      value: inputValue,
      // oninput: function () {
      //   // this._update()
      //   this._controlChanged()
      //   // this.previousSibling.previousSibling.value = this.value;
      //   // this.previousSibling.previousSibling.oninput();
      // }
    },
    options.inputTag
  );
// debugger
  var hiddenInputTag = Object.assign(
    {
      type: "hidden",
    },
    options.hiddenInputTag
  );

  var selectTag = Object.assign(
    {
      // $init: function() { this._checkSelection(); },
      // onchange: function () {
      //   debugger
      //   // this._update()
      //   // this._checkSelection();
      //   // this.previousSibling.oninput();
      // },
      // _checkSelection () {
      //   if ( this.value === "__USE_INPUT__" ) {
      //     if ( options.required ) {
      //       this.nextSibling.required = true;
      //     };
      //     this.removeAttribute("required");
      //     this.nextSibling.style.display = "";
      //     this.nextSibling.focus();
      //     this.previousSibling.value = this.nextSibling.value;
      //   } else {
      //     if ( options.required ) {
      //       this.required = true;
      //     };
      //     this.nextSibling.removeAttribute("required");
      //     this.nextSibling.style.display = "none";
      //     this.previousSibling.value = this.value;
      //   };
      // }
    },
    options.selectTag,
  );
// debugger
  return a.selectinput(
    [
      f.input(
        {
          name: options.name,
          value: options.value,
          inputTag: hiddenInputTag
        }
      ),
      f.select(
        // "",
        {
          collection: options.collection,
          placeholder: options.placeholder,
          // id: options.id,
          // required: options.collection.length > 2 ? options.required : false,
          value: selectValue,
          selectTag: selectTag,
        }
      ),
      f.input( {
        inputTag: inputTag
      } )
    ],
    selectinputTag
  );

};
