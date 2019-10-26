ax.extension.timeago = ( milliseconds, options={} ) => {

  return ax.a['axf-timeago']( {
    datetime: ( new Date( milliseconds ) ).toISOString(),
    $init: (el) => {
      timeago().render( el, options.locale )
    },
    ...options.tag
  } )

}
