ax.extensions.form.factory.field.control = function(
  input,
  options={}
) {

  let controlTag = Object.assign(
    {
      // _toggleHelp: function() {
      //   this._helpVisible = !this._helpVisible
      // },
      // _helpVisible: false,
      // $update: function() {
      //   this.$('help').$update()
      //   this.$('label helpindicator')._up( this._helpVisible )
      // },
      $focus: function () {
        // debugger
        this.$('*')[0].$focus()
        // if ( this.$('*').$focus ) {
        //   this.$('*').$focus()
        // } else {
        //   let target = this.$('input, select, textarea')
        //   // debugger
        //   target.focus()
        // }
      },
      $value: function() {
        return this.$('*')[0].$value()
      },
      $match: function() {
        let dependent = this.closest('field dependent')
        if ( dependent ) {
          return dependent.$match()
        } else {
          return true
        }
      },
      $disable: function() {
        this.$('*')[0].$disable()
      },
      $enable: function() {
        // if ( !this.$('*')[0] ) debugger
        this.$('*')[0].$enable()
      },
    },
    options.controlTag
  )

  return ax.a.control( input, controlTag )

};
