ax.extension.report.factory.
textarea = function( options={} ) {

  let a = ax.a

  let textareaTagOptions = {
    name: options.name,
    ...options.textareaTag
  }

  return a.textarea( options.value, textareaTagOptions )

}
