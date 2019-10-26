ax.extension.report.factory.
check = function( options={} ) {

  let a = ax.a
  let x = ax.x

  return x.check( {
    name: options.name,
    value: options.value,
    type: options.type,
    label: options.label,
    checked: options.checked,
    inputTag: options.inputTag,
    labelTag: options.labelTag,
    checkTag: options.checkTag,
  } )

}
