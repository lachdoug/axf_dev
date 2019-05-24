ax.extension.appkit.cycle = function( collection, period, options={} ) {

  let a = ax.a
  let x = ax.x

  let max = collection.length - 1

  let component = {
    $state: 0,
    $nodes: (el,i) => collection[i],
    $init: (el) => {
      let cycle = function() {
        setTimeout( function() {
          if ( el.$state() === max ) {
            el.$state( 0 )
          } else {
            el.$state( el.$state() + 1 )
          }
          cycle()
        }, period )
      }
      cycle()
    }
  }

  return a['appkit-cycle']( component, options.cycleTag )

}
