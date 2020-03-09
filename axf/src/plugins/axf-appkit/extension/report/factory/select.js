ax.extension.report.factory.
select = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let value = options.value || ''
  let selections = x.lib.form.selections( options.selections || {} )
  let selected = selections.find( selection => selection.value === value ) || {}
  let label = selected.label || options.placeholder || ''

  let selectTagOptions = {
    name: options.name,
    ...options.selectTag
  }

  return a['|appkit-report-select']( label, selectTagOptions )

}
