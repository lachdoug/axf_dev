ax.extension.appkit.lib.form.data.object = function( form ) {

  let lib = ax.extension.appkit.lib
  let result = {};

  for( let el of form.elements ) {

    if ( el.disabled ) continue

    let name = el.name

    if ( name ) {

      let value

      // Form elements created by Ax
      // have a $value function. Use
      // this in preference.
      if ( el.$data ) {

        value = el.$data()

      } else {

        value = el.value

        if ( el.type === "checkbox" || el.type === "radio" ) {
          value = el.checked ? el.value : null
        } else {
          value = el.value
        }

      }

      // Don't include empty fields
      if ( value !== null ) {
        let keys = lib.field.name.dismantle( name )
        lib.object.assign( result, keys, value )
      }

    }
  }

 return result

}
