ax.extensions.form.factory.check = function(
  options={}
) {

  let a = ax.a

  let checkedValue = options.checked || "on"

  let inputTag = Object.assign(
    {
      type: options.type || "checkbox",
      value: checkedValue,
      checked: options.value == checkedValue,
      $value: function() {
        return this.checked ? this.value : ''
      },
      $focus: function () {
        if ( this.type === 'checkbox' ) {
          this.click()
        } else {
          this.focus()
        }
      },
      $disable: function() {
        this.disabled = 'disabled'
      },
      $enable: function() {
        if ( !options.disabled ) this.removeAttribute('disabled')
      },
    },
    options
  )

  delete inputTag.invalid
  delete inputTag.inputTag

  Object.assign( inputTag, options.inputTag )

  return a.input( null, inputTag )

}
