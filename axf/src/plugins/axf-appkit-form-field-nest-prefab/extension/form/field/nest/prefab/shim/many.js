ax.extension.form.field.nest.prefab.shim.
many = function ( f, options ) {

  let a = ax.a

  return f.controls.nest( {
    ...options,
    form: (ff) => (a,x) => {
// debugger
      return a['|appkit-form-nest-many-wrapper']( [
      ff.items( {
        ...options,
        form: (fff) => [
          a['|appkit-form-nest-many-item-header']( [
            a['|appkit-form-nest-many-item-buttons']( [
              fff.up( options.upButton ),
              fff.down( options.downButton ),
              fff.remove( options.removeButton ),
            ], options.itemButtonsTag )
          ], options.itemHeaderTag ),
          a['|appkit-form-nest-many-item-body']( options.form( fff ), options.itemBodyTag ),
        ],
        itemsTag: {
          ...options.itemsTag,
          $on: {
            'sortupdate': (e,el) => {
              el.$rescopeItems()
            },
            // 'axf.appkit.form.nest.items.rescope': (e,el) => {
            //   el.$$('.render-on-rescope').$render()
            // },
            ...( options.itemsTag || {} ).$on,
          },
          $sortable: function() {
            this.$$('|appkit-form-nest-sort-off button').click() // turn off sort on children
            sortable( this, {
              forcePlaceholderSize: true
            } )
            this.$('^|appkit-form-nest').$$('|appkit-form-nest-add-button button').$disable()
            let buttons = this.$('^|appkit-form-nest |appkit-form-nest-items').$$('button').$$
            for ( let button of buttons ) {
              button.$disable && button.$disable()
            }
            this.$$('[draggable] *').style.pointerEvents = 'none' // do not let contents interfere with draggable
          },
          $unsortable: function() {
            this.$$('[draggable] *').style.pointerEvents = 'auto'
            sortable( this, 'destroy' )
            this.$('^|appkit-form-nest').$$('|appkit-form-nest-add-button button').$enable()
            let buttons = this.$('^|appkit-form-nest |appkit-form-nest-items').$$('button').$$
            for ( let button of buttons ) {
              button.$enable && button.$enable()
            }
          },
        },
        itemTag: {
          ...options.itemTag,
          style: {
            display: 'block',
            ...( options.itemTag || {} ).style,
          }
        },

      } ),

      a['|appkit-form-nest-many-footer']( [

        a['|appkit-form-nest-add-button'](
          ff.add( options.addButton ),
          options.addButtonWrapperTag
        ),

        a['|appkit-form-nest-sort-buttons']( [
          a['|appkit-form-nest-sort-on']( ff.button( {
            label: '⬍',
            onclick: (e,el) => {
              el.$('^|appkit-form-nest |appkit-form-nest-items').$sortable()
              let sortOn = el.$('^|appkit-form-nest-sort-on')
              sortOn.style.display = 'none'
              sortOn.nextSibling.style.display = ''
              sortOn.nextSibling.$('button').$enable()
            },
            ...options.sortOnButton,
          } ), options.sortOnTag ),
          a['|appkit-form-nest-sort-off']( ff.button( {
            label: '⬍ Drag',
            onclick: (e,el) => {
              el.$('^|appkit-form-nest |appkit-form-nest-items').$unsortable()
              let sortOff = el.$('^|appkit-form-nest-sort-off')
              sortOff.style.display = 'none'
              sortOff.previousSibling.style.display = ''
            },
            ...options.sortOffButton,
          } ), {
            ...options.sortOffTag,
            style: {
              ...( options.sortOffTag || {} ).style,
              display: 'none'
            },

          } ),
        ], options.sortButtonsTag ),

      ], options.footerTag )


    ], {
        ...options.wrapperTag,
        style: {
          display: 'block',
          ...( options.wrapperTag || {} ).style
        },
      } )

    }
  } )

}
