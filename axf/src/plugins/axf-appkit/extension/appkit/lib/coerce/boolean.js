ax.extension.appkit.lib.coerce.boolean = function( value ) {
  let string = value.toString().toLowerCase()
  return value && string !== 'false' && string !== '0'
}
