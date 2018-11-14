ax.extensions.form.factory.mockPassword = function(
  options={}
) {

  let a = ax.a
  let x = ax.x
  let f = this

  hiddenInputOptions = Object.assign(
    {
      name: options.name,
      value: options.value,
      type: 'hidden',
      autocomplete: 'off',
      $value: function() {
        return this.value
      },
      $focus: function () {
        this.nextSibling.$focus()
      },
      $disable: function() {
        this.disabled = 'disabled'
        this.nextSibling.$disable()
      },
      $enable: function() {
        if ( !options.disabled ) {
          this.removeAttribute('disabled'),
          this.nextSibling.$enable()
        }
      },
    },
    options.hiddenInput
  )
  
  // let inputTag = Object.assign(
  //   {
  //     placeholder: options.placeholder,
  //     $init: function () {
  //       this.$set()
  //     },
  //     $set: function() {
  //       this.value = "●".repeat( this.previousSibling.value.length )
  //     },
  //     oninput: function() {
  //       debugger
  //     },
  //   },
  //   options.input
  // )
  //
  // // if ( options.mock ) {
  // //   let mockTag = Object.assign(
  // //     {
  // //       $mock: function () {
  // //         Array.from( this.children ).forEach( function ( input ) {
  // //           if ( input.value.length == 0 ) {
  // //             input.style.fontFamily = "inherit";
  // //             input.style.letterSpacing = "inherit";
  // //             input.style.fontSize = "inherit";
  // //           } else {
  // //             input.style.fontFamily = "text-security-disc";
  // //             input.style.letterSpacing = "1px";
  // //             input.style.fontSize = "1em";
  // //           };
  // //         } )
  // //       },
  // //       $init: function() { this.$mock() },
  // //       oninput: function() { this.$mock() },
  // //     },
  // //     options.mockTag
  // //   )
  // //
  //   let components = [ f.input( inputOptions ) ]
  //
  //
  //   components = a.mock( components, mockTag )
  //
  // }
  //
  return a.password( components, passwordTag )

}
