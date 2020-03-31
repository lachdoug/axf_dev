ax.extension.form.field.shim.field.
collection = function( f, control, options={} ) {

  let a = ax.a
  let x = ax.x

  let values = x.lib.form.collection.value( options.value )

  let itemFn = ( value ) => a['|appkit-form-collection-item']( [
    a['|appkit-form-collection-item-header'](
      a['|appkit-form-collection-item-buttons']( [
        x.form.field.shim.field.collection.up( f, options.upButton || {} ),
        x.form.field.shim.field.collection.down( f, options.downButton || {} ),
        x.form.field.shim.field.collection.remove( f, {
          item: options.item,
          ...options.removeButton
        } ),
      ], options.itemButtonsTag ),
      options.itemHeaderTag
    ),
    a['|appkit-form-collection-item-body'](
      control( {
        ...options,
        name: `${ options.name }[]`,
        value: value,
      } ),
      options.itemBodyTag,
    ),
  ], options.itemTag )

  let components = values.map( value => itemFn( value ) )

  let controlTagOptions = {

    $value: function() {
      return this.$$('input').value.$$
    },

    $focus: function () {
      this.$('input').focus()
    },

    $disable: function() {
      let inputs = this.$$('input').$$
      for ( let input of inputs ) {
        input.setAttribute( 'disabled', 'disabled' )
      }
    },

    $enable: function() {
      if ( !options.disabled ) {
        let inputs = this.$$('input').$$
        for ( let input of inputs ) {
          input.removeAttribute('disabled')
        }
      }
    },

    ...options.controlTag,

  }

  return a['|appkit-form-control'](
    a['|appkit-form-collection'](
      [
        a['bananas|appkit-form-collection-items'](
          components,
          {
            $add: function() {
              this.append( itemFn() )
            },
            ...options.itemsTag,
          }
        ),
        x.form.field.shim.field.collection.add( f, {
          item: options.item,
          ...options.addButton
        } )
      ],
      options.collectionTag
    ),
    controlTagOptions
  )

}
