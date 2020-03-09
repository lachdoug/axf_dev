ax.extension.timeago = ( milliseconds, options={} ) => {

  return ax.a['axf-timeago']( null, {
    datetime: ( new Date( milliseconds ) ).toISOString(),
    $init: (el) => {
      timeago().render( el, options.locale )
    },
    ...options.tag
  } )

}
