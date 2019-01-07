


// ax.extension.appkit.button = function( content, onclickFunction, options = {} ) {
//
//   var buttonTag = {
//     type: "button",
//     $on: { click: onclickFunction },
//     ...options.buttonTag
//    }
//
//   if ( options.icon ) {
//     content = this.appkit.icon( options.icon, content, options.icon )
//   }
//
//   return ax.a.button( content, buttonTag )
//
// }




let app = function(a,x) {

    // x.md = x.markedjs.markdown
    // x.appkit.form.Factory.prototype.code = x.appkit.form.Factory.prototype.codemirror


    // this.$tag = "ax-app"
// debugger
    // this.id = "app"
    return a.app( [
      x.appkit.router( { bind: 'window', scope: '/axf' } ),
      app.navbar,
      x.appkit.controller( {
        "/appkit": app.axf.appkit,
        "/appkit/*path": app.axf.appkit,
        "/*path": app.axf,
        // "/guide/:page": function( params, controller ) {
        //   return app.axf.guide[ params.page ]
        // },
        // "/dev": this.dev(a,x),
      }, {
        bind: "appkit-router",
        transition: x.appkit.transition.fade,
        lost: "show"
      } )
    ] )



    //
    //
    // [
    //   app.play(a,x),
    //
    //   // x.router( { bind: 'window', root: '/v0' } ),
    //   // app.css(),
    //   // app.a['.page']( [
    //   //   app.header(),
    //   //   app.body(),
    //   //   app.footer()
    //   // ] )
    // ]





  // $nodes() {
  //   // return
  //   // return { $html: "<hr>" }
  //   // console.log( ax.factory( "Hiooo" ) )
  //   // debugger
  //   return {
  //     $tag: "div",
  //     class: "container",
  //     $nodes: ,
  //   }
  // }

}
