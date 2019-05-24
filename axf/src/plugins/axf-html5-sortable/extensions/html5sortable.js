ax.extension.html5sortable = ( components, options={} ) => {

  return {
    $tag: options.type || "ol",
    $nodes: components,
    $init: (el) => {

      let sortableOptions = {
        forcePlaceholderSize: true,
        // placeholderClass: 'ph-class',
        // hoverClass: 'bg-maroon yellow',
        ...options
      }

      sortable( el, sortableOptions )
    },
    $on: {
      sortupdate: options.sortupdate,
      sortstart: options.sortstart,
      sortstop: options.sortstop,
    },
    ...options.tag
  }

}
