app.system.show = controller => (a,x) => {

  return [

    app.system.show.heading( controller ),

    a['div.row']( [

      a['div.col-3']( app.system.show.menu( controller ) ),

      a['div.col-9']( [
        app.system.show.engines( controller ),
        app.system.show.os( controller ),
        app.system.show.metrics( controller ),
      ] ),

    ] ),

  ]

}
