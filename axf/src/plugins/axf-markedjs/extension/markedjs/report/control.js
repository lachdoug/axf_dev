ax.extension.markedjs.report.control = function(
  r, options={}
) {

  let a = ax.a
  let x = ax.x

  let value = options.value
  let component

  if ( value ) {
    component = x.markedjs.markdown( {
      markdown: value,
      markedjsTag: options.markedjsTag,
    } )
  } else {
    component = a.span(
      options.placeholder || 'None',
      { class: 'placeholder' }
    )
  }

  return a['|appkit-report-control'](
    a['|appkit-report-markdown'](
      component,
      options.markdownTag
    ),
    {

      'data-name': options.name,
      $value: function() {
        return options.value
      },

      tabindex: 0,
      $focus: function() {
        this.focus()
      },

      ...options.controlTag

    }
  )

}
