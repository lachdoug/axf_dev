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
      options.itemTag
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

  return a['|appkit-report-nest-items'](
    itemsData.length ?
    itemsData.map( item ) :
    ( options.empty || a.span(
      options.placeholder || 'None',
      { class: 'placeholder' }
    ) ),
    {
      $count: function() {
        return this.$$(':scope > |appkit-report-nest-item').$$.length
      },
      ...options.itemsTag,
  } )

}
