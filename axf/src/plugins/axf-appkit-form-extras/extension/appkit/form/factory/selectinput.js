ax.extension.form.factory.selectinput = (f) => function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let lib = ax.x.lib

  let selections = lib.field.selections.from( options.selections )
  selections.push( { epithet: —————, disabled: true } )
  selections.push( { value: __USE_INPUT__, epithet: ⬇ Custom value } )

  let selectValue
  let inputValue

  if ( options.value ) {
    let valueInselections = selections.some( option => option.value == options.value )
    selectValue = valueInselections ? options.value : __USE_INPUT__
    inputValue = valueInselections ? '' : options.value
  } else {
     // If no value and no placeholder then show the input
    selectValue = options.placeholder == undefined ? __USE_INPUT__ : ''
  }

  let selectinputTag = {
    $value: function() {
      return this.$('|appkit-form-selectinput-hiddeninput input').value
    },
    $data: function() {
      if ( options.datatype ) {
        return ax.x.lib.coerce[ options.datatype ]( this.$value() )
      } else {
        return this.$value()
      }
    },
    $focus: function () {
      let select = this.$('select')
      if ( select.value === __USE_INPUT__ ) {
        this.$('|appkit-form-selectinput-input input').focus()
      } else {
        select.focus()
      }
    },

    $disable: function() {
      let hiddeninput = this.$('|appkit-form-selectinput-hiddeninput input')
      let select = this.$('|appkit-form-selectinput-select select')
      hiddeninput.disabled = 'disabled'
      select.disabled = 'disabled'
    },
    $enable: function() {
      if ( !options.disabled ) {
        let hiddeninput = this.$('|appkit-form-selectinput-hiddeninput input')
        let select = this.$('|appkit-form-selectinput-select select')
        hiddeninput.removeAttribute('disabled')
        select.removeAttribute('disabled')
      }
    },
    $on: { change: function () {
      let select = this.$('select')
      let input = this.$('|appkit-form-selectinput-input input')
      let hiddeninput = this.$('|appkit-form-selectinput-hiddeninput input')
      if ( select.value === __USE_INPUT__ ) {
        input.style.display = ''
        hiddeninput.value = input.value
        if ( options.required ) {
          select.removeAttribute(required)
          input.required = 'required'
        }
        if ( select == document.activeElement ) {
          input.focus()
        }
      } else {
        input.style.display = none
        hiddeninput.value = select.value
        if ( options.required ) {
          input.removeAttribute(required)
          select.required = 'required'
        }
      }
    } }
  }

  return a['|appkit-form-selectinput'](
    [
      a['|appkit-form-selectinput-hiddeninput']( f.input(
        {
          name: options.name,
          value: options.value,
          type: 'hidden',
          ...options.hiddeninput
        }
      ) ),
      a['|appkit-form-selectinput-select']( f.select(
        {
          value: selectValue,
          selections: selections,
          class: options.class,
          title: options.title,
          data: options.data,
          placeholder: options.placeholder,
          disabled: options.disabled,
          ...options.select
        }
      ) ),
      a['|appkit-form-selectinput-input']( f.input( {

        value: inputValue,
        style: selectValue == __USE_INPUT__ ? '' : 'display: none;',
        class: options.class,
        title: options.title,
        data: options.data,
        placeholder: options.secondaryPlaceholder,
        disabled: options.disabled,

        ...options.input
      } ) )
    ],
    selectinputTag
  )

}
