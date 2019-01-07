app.coderunner.iframe = function( options ) {

  return ax.a.iframe( {
    $run: function( script ) {
      let doc = this.contentDocument
      doc.write( app.coderunner.html( script ) )
      doc.close()
    }
  }, { style: { height: `${ options.height }px` } } )

}
