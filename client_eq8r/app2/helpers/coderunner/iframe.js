app2.coderunner.iframe = function( options ) {

  return ax.a.iframe( {
    $run: function( script ) {
      let doc = this.contentDocument
      doc.write( app2.coderunner.html( script ) )
      doc.close()
    }
  }, { style: { height: `${ options.height || 1000 }px` } } )

}
