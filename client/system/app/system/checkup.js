app.system.checkup = controller => (a,x) => [

  a.h3( 'System checkup' ),

  a['div.clearfix'](
    a['div.float-right']( [
      app.up( controller, 'Close' ),
    ] )
  ),


  app.btn(
    app.icon( 'fa fa-times', 'Cancel' ),
    (e,el) => controller.open( '..' ),
    {
      class: 'btn btn-secondary'
    }
  ),

  ' ',

  app.btn(
    app.icon( 'fa fa-check', 'OK' ),
    (e,el) => el.nextSibling.$nodes = app.http(
      '/~/~/containers/check_and_act',
      (  report, el ) => el.$nodes = x.list( report ),
      { class: 'btn btn-primary' },
    ),
    {
      class: 'btn btn-primary'
    }
  ),

  a['app-test-btn-result'](),

]
