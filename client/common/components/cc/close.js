cc.close = ( controller, title='Close', path='..' ) => cc.button( {
  label: cc.icon( 'fa fa-times', 'Close' ),
  onclick: (e,el) => {
    // history.back()
    controller.open( path, controller.query, controller.anchor )
  },
  title: title,
} )
