ax.extension.report.field.nest.prefab.shim.
many = function ( f, options ) {

  let a = ax.a

  return f.controls.nest( {
    ...options,
    report: (ff) => (a,x) => {

      return a['|appkit-report-nest-many-wrapper']( [
        ff.items( {
          ...options,
          report: (fff) => [
            a['|appkit-report-nest-many-item-header']( options.itemHeaderTag ),
            a['|appkit-report-nest-many-item-body']( options.report( fff ), options.itemBodyTag ),
          ],
        //   itemsTag: {
        //     ...options.itemsTag,
        //     $on: {
        //       'sortupdate': (e,el) => {
        //         el.$rescopeItems()
        //       },
        //       // 'axf.appkit.report.nest.items.rescope': (e,el) => {
        //       //   el.$$('.render-on-rescope').$render()
        //       // },
        //       ...( options.itemsTag || {} ).style,
        //     },
        //     $sortable: function() {
        //       this.$$('|appkit-report-nest-sort-off').click() // turn off sort on children
        //       sortable( this, {
        //         forcePlaceholderSize: true
        //       } )
        //       this.$('^|appkit-report-nest').$$('|appkit-report-nest-add-button button').$disable()
        //       this.$$('[draggable] > *').style.pointerEvents = 'none' // do not let contents interfere with draggable
        //     },
        //     $unsortable: function() {
        //       this.$$('[draggable] > *').style.pointerEvents = 'auto'
        //       sortable( this, 'destroy' )
        //       this.$('^|appkit-report-nest').$$('|appkit-report-nest-add-button button').$enable()
        //     },
        //   },
        //   itemTag: {
        //     ...options.itemTag,
        //     style: {
        //       display: 'block',
        //       ...( options.itemTag || {} ).style,
        //     }
        //   },
        //
        } ),

        // a['|appkit-report-nest-many-footer']( [
        //
        //   a['|appkit-report-nest-add-button'](
        //     ff.add( options.addButton ),
        //     options.addButtonWrapperTag
        //   ),
        //
        //   a['|appkit-report-nest-sort-buttons']( [
        //     a['|appkit-report-nest-sort-on']( ff.button( {
        //       label: '⬍',
        //       onclick: (e,el) => {
        //         el.$('^|appkit-report-nest |appkit-report-nest-items').$sortable()
        //         let sortOn = el.$('^|appkit-report-nest-sort-on')
        //         sortOn.style.display = 'none'
        //         sortOn.nextSibling.style.display = ''
        //         sortOn.nextSibling.$('button').$enable()
        //       },
        //       ...options.sortOnButton,
        //     } ), options.sortOnTag ),
        //     a['|appkit-report-nest-sort-off']( ff.button( {
        //       label: '⬍',
        //       onclick: (e,el) => {
        //         el.$('^|appkit-report-nest |appkit-report-nest-items').$unsortable()
        //         let sortOff = el.$('^|appkit-report-nest-sort-off')
        //         sortOff.style.display = 'none'
        //         sortOff.previousSibling.style.display = ''
        //       },
        //       ...options.sortOffButton,
        //     } ), {
        //       ...options.sortOffTag,
        //       style: {
        //         ...( options.sortOffTag || {} ).style,
        //         display: 'none'
        //       },
        //
        //     } ),
        //   ], options.sortButtonsTag ),
        //
        // ], options.footerTag )

      ],
      {
        ...options.wrapperTag,
        style: {
          display: 'block',
          ...( options.wrapperTag || {} ).style
        },
      } )

    }
  } )

}
