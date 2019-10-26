ax.extension.form.field.nest.prefab.shim.
table = function ( f, options ) {

  let a = ax.a

  return f.controls.nest( {
    ...options,
    form: (ff) => (a,x) => {

      let form = options.form || ( () => {} )

      let tableHeader = function() {

        let ffP = new Proxy( ff, {
          get: ( target, property ) => {
            if ( property == 'field' ) {
              return ( options ) => {
                let label = options.label || x.lib.text.labelize( options.key )
                return a.th( a['|appkit-form-field']( [
                  label,
                  options.help ? ff.helpbutton( {
                    helpbuttonTag: {
                      $on: {
                        'click: toggle help': function() {
                          this.$state = !this.$state
                          this.$('^table', `|appkit-form-field-help[data-field-key="${ options.key }"]`).$toggle()
                        },
                      },
                    },
                  } ) : null,
                ] ), options.thTag )
              }
            } else {
              return a.td
            }
          }
        } )

        let headerCells = function() {
          let cells = form(ffP) || []
          cells.push( a.th() )
          return cells
        }

        return a.thead( a.tr( headerCells() ) )

      }

      let tableHelp = function() {

        let ffP = new Proxy( ff, {
          get: ( target, property ) => {
            if ( property == 'field' ) {
              return ( options ) => {
                let help = options.help
                // debugger
                return a.td(
                  ff.help( {
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
              return a.td
            }
          }
        } )

        let helpCells = function() {
          let cells = form(ffP) || []
          cells.push( a.th() )
          return cells
        }

        return a.tr( helpCells() )

      }

      let tableHint = function() {

        let ffP = new Proxy( ff, {
          get: ( target, property ) => {
            if ( property == 'field' ) {
              return ( options ) => {
                let hint = options.hint
                // debugger
                return a.td(
                  ff.hint( options ),
                  options.tdTag
                )
              }
            } else {
              return a.td
            }
          }
        } )

        let hintCells = function() {
          let cells = form(ffP) || []
          cells.push( a.th() )
          return cells
        }

        return a.tr( hintCells() )

      }


      let tableBody = function() {

        // let items = function() {

          return ff.items( {
            ...options.items,
            form: (fff) => {

              let fffP = new Proxy( fff, {
                get: ( target, property ) => {
                  if ( property == 'field' ) {
                    return ( options ) => {
                      return a.td( fff.control( options ), {
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

              let cells = form( fffP )

              cells.push( a.td(
                a['|appkit-form-nest-table-item-buttons']( [
                  fffP.up( {
                    itemTarget: (el) => el.$('^tr'),
                    ...options.upButton
                  } ),
                  fffP.down( {
                    itemTarget: (el) => el.$('^tr'),
                    ...options.downButton
                  } ),
                  fffP.remove( {
                    itemTarget: (el) => el.$('^tr'),
                    ...options.removeButton
                  } ),
                ], options.itemButtonsTag )
              ) )
              return cells

            },
            itemsTag: {
              $tag: 'tbody',
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
                this.$$('[draggable] > td *').style.pointerEvents = 'none' // do not let contents interfere with draggable
              },
              $unsortable: function() {
                this.$$('[draggable] > td *').style.pointerEvents = 'auto'
                sortable( this, 'destroy' )
                this.$('^|appkit-form-nest').$$('|appkit-form-nest-add-button button').$enable()
                let buttons = this.$('^|appkit-form-nest |appkit-form-nest-items').$$('button').$$
                for ( let button of buttons ) {
                  button.$enable && button.$enable()
                }
              },
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

      let tableButtons = function() {

        return a['|appkit-form-nest-table-footer']( [

          a['|appkit-form-nest-add-button'](
            ff.add( {
              target: (el) => el.$('^|appkit-form-nest tbody'),
              ...options.addButton,
            } ),
            options.addButtonTag
          ),

          a['|appkit-form-nest-sort-buttons']( [
            a['|appkit-form-nest-sort-on']( ff.button( {
              label: '⬍',
              onclick: (e,el) => {
                el.$('^|appkit-form-nest tbody').$sortable()
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
                el.$('^|appkit-form-nest tbody').$unsortable()
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

      }

      return a['|appkit-form-nest-table-wrapper']( [
        a.table( [
          tableHeader(),
          tableHelp(),
          tableBody(),
          tableHint(),
        ], options.tableTag ),
        tableButtons()
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
