/**
 * Creates ax object for a Markedjs Markdown report output.
 *
 * @example
 * r.markdown( {
 *   key: mymarkedtext,
 *   value: Hello\n===\n
 * } ),
 * @param {object} options
 * @param {string} options.name The value for the name= attribute on the wrapper.
 * @param {(object|array)} options.value The markdown text.
 *
 * @return {object} ax object
 */

ax.extension.markedjs.report.control = function(
  r, options={}
) {

  let a = ax.a
  let x = ax.x

  return a['|appkit-report-control'](
    options.value ? x.markedjs.markdown( {
      markdown: options.value,
      markdownTag: options.markdownTag,
    } ) : options.placeholder,
    {

      name: options.name,

      $value: function() {
        return options.value
      },

      ...options.controlTag

    }
  )

}
