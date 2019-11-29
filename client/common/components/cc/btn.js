cc.btn = function( label, onclick, options={} ) {

  return cc.button( {
    label: label,
    onclick: onclick,
    ...options,
  } )
}
