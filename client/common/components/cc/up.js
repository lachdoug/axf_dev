cc.up = ( controller, title='Close', path='..' ) => cc.button( {
  label: cc.icon( 'fa fa-times', 'Close' ),
  onclick: (e,el) => {
    controller.open( path )
  },
  title: title,
} )
