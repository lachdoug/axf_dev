/**
 * Creates ax object for a CodeMirror instance.
 *
 * @example
 * r.code( {
 *   key: "myscript",
 *   mode: "ruby",
 *   value: "[1,2,3].map &:to_s"
 * } ),
 * @param {object} options
 * @param {string} options.name The value for the name= attribute on the wrapper.
 * @param {(object|array)} options.value The content of the <textarea>.
 *
 * @return {object} ax object
 */

ax.extension.codemirror.report.code = function(
  r, options={}
) {

  let a = ax.a
  let x = ax.x
  let report = x.codemirror.report

  return a['appkit-report-codemirror-code'](
    [
      report.code.toolbar( options ),
      report.code.editor( options ),
    ],
    {

      name: options.name,

      $value: function() {
        return options.value
      },

      ...options.codeTag

    }
  )

}
