ax.extensions.elix.tabs = function ( tabs, options={} ) {

  var a = ax.a;

  let components = []

  tabs.forEach( function( tab ) {

    let tabTag = Object.assign(
      {
        ariaLabel: tab[0]
      },
      options.tabTag
    )

    components.push( a.tab( tab[0], tabTag ) )

  } )

  // <elix-tabs>
  //   <div aria-label="One">Page one</div>
  //   <div aria-label="Two">Page two</div>
  //   <div aria-label="Three">Page three</div>
  // </elix-tabs>

// <elix-tabs>
//   <elix-tab-button slot="tabButtons">Un</elix-tab-button>
//   <elix-tab-button slot="tabButtons">Trois</elix-tab-button>
//   <elix-tab-button slot="tabButtons">Deux</elix-tab-button>
//
//   <div aria-label="One">Page one</div>
//   <div aria-label="Two">Page two</div>
//   <div aria-label="Three">Page three</div>
// </elix-tabs>

  return a['elix-tabs']( components, options.elixTabsTag )

};
