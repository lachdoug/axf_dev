ax.extension.timeago = ( milliseconds, options={} ) => {

  return {
    datetime: ( new Date( milliseconds ) ).toISOString(),
    $init: (el) => {
      timeago().render( el )
    },
    ...options.tag
  }

}
