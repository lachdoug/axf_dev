ax.extension.report.field.nest.prefab.shim.
table = function ( r, options ) {

  let a = ax.a

  return r.controls.nest( {
    ...options,
    report: (rr) => (a,x) => {

      let report = options.report || ( () => {} )

      let tableHeader = function() {

        let rrP = new Proxy( rr, {
          get: ( target, property ) => {
            if ( property == 'field' ) {
              return ( options ) => {
                let label = options.label || x.lib.text.labelize( options.key )
                return a.th( a['|appkit-report-field']( [
                  label,
                  r.helpbutton( {
                    helpbuttonTag: {
                      $on: {
                        'click: toggle help': function() {
                          this.$state = !this.$state
                          this.$('^table', `|appkit-report-field-help[data-field-key="${ options.key }"]`).$toggle()
                        },
                      },
                    },
                  } ),
                ] ), options.thTag )
              }
            } else {
              return a.td // empty cell
            }
          }
        } )

        let headerCells = function() {
          let cells = report(rrP) || []
          // cells.push( a.th() )
          return cells
        }

        return a.thead( a.tr( headerCells() ) )

      }

      let tableHelp = function() {

        let rrP = new Proxy( rr, {
          get: ( target, property ) => {
            if ( property == 'field' ) {
              return ( options ) => {
                let help = options.help
                // debugger
                return a.td(
                  rr.help( {
                    ...options,
                    helpTag: {
                      'data-field-key': options.key,
                      ...options.helpTag,
                    }
                  } ),
                  options.tdTag
                )
              }
            } else {
              return a.td // empty cell
            }
          }
        } )

        let helpCells = function() {
          let cells = report(rrP) || []
          // cells.push( a.th() )
          return cells
        }

        return a.tr( helpCells() )

      }

      let tableHint = function() {

        let rrP = new Proxy( rr, {
          get: ( target, property ) => {
            if ( property == 'field' ) {
              return ( options ) => {
                let hint = options.hint
                // debugger
                return a.td(
                  rr.hint( options ),
                  options.tdTag
                )
              }
            } else {
              return a.td // empty cell
            }
          }
        } )

        let hintCells = function() {
          let cells = report(rrP) || []
          // cells.push( a.th() )
          return cells
        }

        return a.tr( hintCells() )

      }


      let tableBody = function() {

        // let items = function() {

          return rr.items( {
            ...options.items,
            report: (rrr) => {

              let rrrP = new Proxy( rrr, {
                get: ( target, property ) => {
                  if ( property == 'field' ) {
                    return ( options ) => {
                      return a.td( rrr.control( options ), {
                        style: {
                          verticalAlign: 'top',
                          ...( options.tdTag || {} ).style
                        },
                        ...options.tdTag
                      } )
                    }
                  } else {
                    return target[property]
                  }
                }
              } )

              let cells = report( rrrP )

              // cells.push( a.td(
              //   a['|appkit-report-nest-table-item-buttons']( [
              //     rrrP.up( {
              //       itemTarget: (el) => el.$('^tr'),
              //       ...options.upButton
              //     } ),
              //     rrrP.down( {
              //       itemTarget: (el) => el.$('^tr'),
              //       ...options.downButton
              //     } ),
              //     rrrP.remove( {
              //       itemTarget: (el) => el.$('^tr'),
              //       ...options.removeButton
              //     } ),
              //   ], options.itemButtonsTag )
              // ) )
              return cells

            },
            itemsTag: {
              $tag: 'tbody',
              ...options.itemsTag,
              // $on: {
              //   'sortupdate': (e,el) => {
              //     el.$rescopeItems()
              //   },
              //   // 'axf.appkit.report.nest.items.rescope': (e,el) => {
              //   //   el.$$('.render-on-rescope').$render()
              //   // },
              //   ...( options.itemsTag || {} ).$on,
              // },
              // $sortable: function() {
              //   this.$$('|appkit-report-nest-sort-off').click() // turn off sort on children
              //   sortable( this, {
              //     forcePlaceholderSize: true
              //   } )
              //   this.$('^|appkit-report-nest').$$('|appkit-report-nest-add-button button').$disable()
              //   this.$$('[draggable] > td > *').style.pointerEvents = 'none' // do not let contents interfere with draggable
              // },
              // $unsortable: function() {
              //   this.$$('[draggable] > td > *').style.pointerEvents = 'auto'
              //   sortable( this, 'destroy' )
              //   this.$('^|appkit-report-nest').$$('|appkit-report-nest-add-button button').$enable()
              // },
            },
            itemTag: {
              $tag: 'tr',
              ...options.itemTag,
            }
          } )

        // }
        //
        // return items()

      }

      // let tableButtons = function() {
      //
      //   return a['|appkit-report-nest-table-footer']( [
      //
      //     a['|appkit-report-nest-add-button'](
      //       rr.add( {
      //         target: (el) => el.$('^|appkit-report-nest tbody'),
      //         ...options.addButton,
      //       } ),
      //       options.addButtonTag
      //     ),
      //
      //     a['|appkit-report-nest-sort-buttons']( [
      //       a['|appkit-report-nest-sort-on']( rr.button( {
      //         label: '⬍',
      //         onclick: (e,el) => {
      //           el.$('^|appkit-report-nest tbody').$sortable()
      //           let sortOn = el.$('^|appkit-report-nest-sort-on')
      //           sortOn.style.display = 'none'
      //           sortOn.nextSibling.style.display = ''
      //           sortOn.nextSibling.$('button').$enable()
      //         },
      //         ...options.sortOnButton,
      //       } ), options.sortOnTag ),
      //       a['|appkit-report-nest-sort-off']( rr.button( {
      //         label: '⬍',
      //         onclick: (e,el) => {
      //           el.$('^|appkit-report-nest tbody').$unsortable()
      //           let sortOff = el.$('^|appkit-report-nest-sort-off')
      //           sortOff.style.display = 'none'
      //           sortOff.previousSibling.style.display = ''
      //         },
      //         ...options.sortOffButton,
      //       } ), {
      //         ...options.sortOffTag,
      //         style: {
      //           ...( options.sortOffTag || {} ).style,
      //           display: 'none'
      //         },
      //
      //       } ),
      //     ], options.sortButtonsTag ),
      //
      //   ], options.footerTag )
      //
      // }

      return a['|appkit-report-nest-table-wrapper']( [
        a.table( [
          tableHeader(),
          tableHelp(),
          tableBody(),
          tableHint(),
        ], options.tableTag ),
        // tableButtons()
      ], {
        ...options.wrapperTag,
        style: {
          display: 'block',
          ...( options.wrapperTag || {} ).style
        },
      } )

    },
  } )

}
