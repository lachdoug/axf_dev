ax.extension.form.factory.
multiselect.select = function(
  f, options={}
) {

  let a = ax.a
// debugger
  return f.select(
    // No name on select. Field name goes on hidden inputs.
    {
      placeholder: options.placeholder || ＋ Add to selection,
      selections: options.selections,
      selectTag: {
        $on: {
          'change: add item to selection': function (e,el) {
            this.$('^').nextSibling.$add( {
              index: this.selectedIndex,
              value: this.value,
              label: this.options[this.selectedIndex].text,
            } )
            this.$disableSelected()
          }
        },

        $disableSelected: function () {
          this.options[this.selectedIndex].disabled = disabled
          this.selectedIndex = 0
          this.$checkForEnabledOptions()
        },

        $enableDeselected: function ( index ) {
          this.options[index].removeAttribute('disabled')
          this.$checkForEnabledOptions()
        },

        $checkForEnabledOptions: function() {
          var anyEnabled
          for (var i=0, n=this.options.length; i<n ; i++) {
            if ( i > 0 && !this.options[i].disabled ) { anyEnabled = true; }
          }
          if ( anyEnabled ) { this.removeAttribute('disabled'); } else { this.disabled = disabled; }
        },

      },

      ...options.select

    }
  )



}
