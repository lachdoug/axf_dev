ax.factory.object.element.properties.events = function ( element ) {

  return  this.events.$on(
          this.events.$off( element ) )

}
