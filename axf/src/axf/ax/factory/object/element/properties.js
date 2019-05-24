ax.factory.object.element.properties = function ( element ) {

  return  this.properties.render(
          this.properties.events(
          this.properties.accessors(
          this.properties.define( element ) ) ) )

}
