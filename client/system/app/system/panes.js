app.system.panes = ( system, controller ) => (a,x) => {

  let label = system.label || {}

  return a['app-system'](

    x.panes(
      {
        proximate: app.system.menu( system, controller ),
        adjacent: [

          label.text ? a['div.container-fluid'](
            label.text,
            { style: {
              textAlign: 'center',
              fontSize: '1.5rem',
              padding: '0.5rem',
              color: label.color,
              backgroundColor: label.background_color
            } }
          ) : null,

          a['div.container']( app.system.routes( system, controller ) )
        ],
        percent: window.localStorage.systemHorizontalPanesPercent || '33',
        panesTag: {
          $on: {
            'axf.panes.resize': (e,el) => {
              const panesPercent = e.detail.percent
              window.localStorage.systemHorizontalPanesPercent = panesPercent
            }
          }
        }
      }
    ),

  )

}
