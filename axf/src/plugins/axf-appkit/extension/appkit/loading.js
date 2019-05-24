ax.extension.appkit.loading = function( options={} ) {

  let a = ax.a
  let x = ax.x

  let text = options.text ? " " + options.text : " Loading"
  let wait = options.wait || 100

  let component = x.appkit.cycle( [
    `◐${ text }`, `◓${ text }`,
    `◑${ text }`, `◒${ text }`
  ], wait )

  let loadingTag = {
    $init: (el) => {
      el.$('appkit-transition').$to( component )
    },
    ...options.loadingTag
  }

  return a['appkit-loading'](
    x.appkit.transition.fade( {}, { time: 500 } ),
    loadingTag
  )

}
