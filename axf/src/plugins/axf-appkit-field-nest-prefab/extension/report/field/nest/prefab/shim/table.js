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
                  options.help ? r.helpbutton( {
                    helpbuttonTag: {
                      $on: {
                        'click: toggle help': function() {
                          this.$state = !this.$state
                          this.$('^table', `|appkit-report-field-help[data-field-key="${ options.key }"]`).$toggle()
                        },
                      },
                    },
                  } ) : null,
                ] ), options.thTag )
              }
            } else {
              return a.td // empty cell
            }
          }
        } )

        let headerCells = function() {
          let cells = report(rrP) || []
          return cells
        }

        return a.thead( a.tr( headerCells() ) )

      }

      let tableHelp = function() {

        let rrP = new Proxy( rr, {
          get: ( target, property ) => {
            if ( property === 'field' ) {
              return ( options ) => {
                let help = options.help
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
          return cells
        }

        return a.tr( hintCells() )

      }

      let tableBody = () => rr.items( {
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

          return cells

        },
        itemsTag: {
          $tag: 'tbody',
          ...options.itemsTag,
        },
        itemTag: {
          $tag: 'tr',
          ...options.itemTag,
        }
      } )

      return a['|appkit-report-nest-table-wrapper']( [
        a.table( [
          tableHeader(),
          tableHelp(),
          tableBody(),
          tableHint(),
        ], options.tableTag ),
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
