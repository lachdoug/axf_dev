app.axf.guide.update = function(a,x) {
  return [
    app.axf.guide.navigator( "update" ),
    a.hr,
    a.p( "" ),
    app.coderunner(
`ax( (a,x) => [

  a.div( () => [ 0,0,0,0,0 ].map(
    () => a['.die']( {
      $html: () => \`&#\${ 9856 + Math.floor( Math.random() * 6 ) };\`,
      style: {
        fontSize: "6em", color: '#' + Math.random().toString().substr(-3)
      },
      $on: { click: function () { this.$('^.die').$render() } }
    } )
  ) ),

  a.div( () => [ 0,0,0,0,0 ].map(
    () => a['.die']( { style: {
      fontSize: "6em", color: '#' + Math.random().toString().substr(-3) },
      $html: \`&#\${ 9856 + Math.floor( Math.random() * 6 ) };\`
    } ) ),
    { $on: { click: function () { this.$render() } } }
  ),

  a.div( {
    style: { fontSize: '10em', margin: "auto", width: "10px;", cursor: "pointer" },
    $on: { click: function () { this.$init() } },
    $init: function() {
      let roller = setInterval( () => {
        this.style.transform = \`rotate(\${ Math.floor( Math.random() * 360 ) }deg)\`;
        this.$html = \`&#\${ 9856 + Math.floor( Math.random() * 6 ) };\`
      }, 200 )
      setTimeout( () => { clearInterval( roller ) }, 1000 )
    }
  } ),

] )`
  )

  ]
}
