ax.extension.appkit.form.factory.selectinput = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.appkit.lib

  let collection = lib.form.collection.from( options.collection || { 0: "Off", 1: "On" } )
  collection.push( { label: "—————", disabled: true } )
  collection.push( { value: "__USE_INPUT__", label: "Enter a value" } )

  let selectValue
  let inputValue

  if ( options.value ) {
    let valueInCollection = collection.some( option => option.value == options.value )
    selectValue = valueInCollection ? options.value : "__USE_INPUT__"
    inputValue = valueInCollection ? null : options.value
  } else {
     // show the input if no placeholder on select
    selectValue = options.placeholder === undefined ? "__USE_INPUT__" : ""
  }

  let selectinputTag = {
    $value: function() {
      return this.$('appkit-form-selectinput-hiddeninput input').value
    },
    $focus: function () {
      let select = this.$('select')
      if ( select.value === "__USE_INPUT__" ) {
        this.$('appkit-form-selectinput-input input').focus()
      } else {
        select.focus()
      }
    },
    $disable: function() {
      let hiddeninput = this.$('appkit-form-selectinput-hiddeninput input')
      hiddeninput.$disable()
    },
    $enable: function() {
      if ( !options.disabled ) {
        let hiddeninput = this.$('appkit-form-selectinput-hiddeninput input')
        hiddeninput.$enable()
      }
    },
    $on: { change: function () {
      let select = this.$('select')
      let input = this.$('appkit-form-selectinput-input input')
      let hiddeninput = this.$('appkit-form-selectinput-hiddeninput input')
      if ( select.value === "__USE_INPUT__" ) {
        input.style.display = ""
        hiddeninput.value = input.value
        if ( options.required ) {
          select.removeAttribute("required")
          input.required = 'required'
        }
        if ( select == document.activeElement ) {
          input.focus()
        }
      } else {
        input.style.display = "none"
        hiddeninput.value = select.value
        if ( options.required ) {
          input.removeAttribute("required")
          select.required = 'required'
        }
      }
    } }
  }

  return a['appkit-form-selectinput'](
    [
      a['appkit-form-selectinput-hiddeninput']( f.input(
        {
          name: options.name,
          value: options.value,
          type: "hidden",
          ...options.hiddeninput
        }
      ) ),
      a['appkit-form-selectinput-select']( f.select(
        {
          collection: collection,
          placeholder: options.placeholder,
          required: options.required,
          value: selectValue,
          ...options.select
        }
      ) ),
      a['appkit-form-selectinput-input']( f.input( {
        style: inputValue ? "" : "display: none",
        value: inputValue,
        ...options.input
      } ) )
    ],
    selectinputTag
  )

}
