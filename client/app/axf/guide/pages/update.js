app.axf.guide.pages.update = (c) => (a,x) => [
  a.p( "" ),
  app.coderunner(
`ax( (a,x) => [

  a['.dice']( () => [ 0,0,0,0,0 ].map(
  () => a['.die']( {
    $html: () => \`&#\${ 9856 + Math.floor( Math.random() * 6 ) };\`,
    style: {
      fontSize: "6em", color: '#' + Math.random().toString().substr(-3)
    },
    $on: { click: function () { this.$('^.dice').$render() } }
  } )

) ),

a['.dice']( [ 0,0,0,0,0 ].map(
  () => a['.die']( {
    $html: () => \`&#\${ 9856 + Math.floor( Math.random() * 6 ) };\`,
    style: {
      fontSize: "6em", color: '#' + Math.random().toString().substr(-3)
    },
    $on: { click: function () { this.$('^.dice').$$('.die').$render() } }
  } )

) ),





  a.div( {
    style: { fontSize: '10em', margin: "auto", width: "10px;", cursor: "pointer" },
    $on: { click: function () { this.$init() } },
    $init: function() {
      let roller = setInterval( () => {
        this.style.transform = \`rotate(\${ Math.floor( Math.random() * 360 ) }deg)\`;
        this.$html = \`&#\${ 9856 + Math.floor( Math.random() * 6 ) };\`
      }, 200 )
      setTimeout( () => { clearInterval( roller ) }, 1100 )
    }
  } ),

] )`
  )

]
