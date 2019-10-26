ax.extension.report.field.nest.shim.nest.
items = function( f, options ) {

  let a = ax.a
  let x = ax.x

  let reportFn = options.report || ( () => null )
  let item = function( itemData, index ) {

    let ff = this.items.factory( {
      scope: f.scope ? `${ f.scope }[${ index }]`: `${ index }`,
      params: f.params,
      shims: f.shims,
      object: itemData,
      item: options.item,
      index: index,
    } )

    return a['|appkit-report-nest-item'](
      reportFn( ff ),
      {
        $rescope: function( scope, index ) {

          ff.index = index
          ff.scope = `${ scope }[${ index }]`

          let namedElements = x.lib.unnested( this, `[name^="${ scope }"]` )

          namedElements.forEach( function( el ) {
            if ( el.tagName == 'APPKIT-FORM-NEST') {
              el.$rescope( scope, index )
            } else {
              el.$('^|appkit-report-nest').$rescopeElement( el, scope, index )
            }
          } )

        },
        ...options.itemTag,
      }
    )

  }.bind( this )

  let itemsData = []
  let object = f.object

  if ( ax.is.array( object ) ) {
    itemsData = object
  } else if ( ax.is.object( object ) ) {
    for ( let key in object ) {
      if ( key.match( /^\d$/ ) ) itemsData.push( object[key] )
    }
  }

  return a['|appkit-report-nest-items']( itemsData.map(
    item
  ), {
    // $add: function() {
    //   this.append( item( {}, this.children.length ) )
    // },
    $count: function() {
      return this.$$(':scope > |appkit-report-nest-item').$$.length
    },
    // $rescopeItems: function() {
    //   this.$$(':scope > |appkit-report-nest-item').$$.forEach( function( itemTag, index ) {
    //     itemTag.$rescope( f.scope, index )
    //   } )
    //   this.$send( 'axf.appkit.report.nest.items.rescope' )
    // },
    ...options.itemsTag,
    // $on: {
    //   'axf.appkit.report.nest.item.move': (e,el) => {
    //     e.stopPropagation()
    //     el.$rescopeItems()
    //   },
    //   'axf.appkit.report.nest.item.remove': (e,el) => {
    //     e.stopPropagation()
    //     el.$rescopeItems()
    //   },
    //   ...( options.itemsTag || {} ).$on
    // },
  } )

}
