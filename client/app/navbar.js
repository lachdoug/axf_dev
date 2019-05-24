app.navbar = (r) => (a,x) => [
  a.h5( [
    a.img( {
      src: `/${ config.icon.src }`,
      height: config.icon.height,
      width: config.icon.width,
    } ),
    config.title
  ] ),
  a["div.container.clearfix"]( r.routes( {
    '%%': app.pills
  } ) )
]
