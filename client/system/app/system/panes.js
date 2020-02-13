app.system.panes = ( system, controller ) => (a,x) => a['app-system']( [

 x.panes(
    {
      proximate: app.system.menu( system, controller ),
      adjacent: a['div.container']( app.system.routes( system, controller ) ),
      percent: window.localStorage.systemHorizontalPanesPercent || 33,
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

],  )
