ax.css( {

  '|axf-panes': {

    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    '|axf-panes-proximate': {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      right: 'calc( 50% + 2px )',
      overflowY: 'auto',
      overflowX: 'hidden',
    },

    '|axf-panes-adjacent': {
      display: 'block',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      left: 'calc( 50% + 2px )',
      // paddingLeft: '2px',
      overflowY: 'auto',
      overflowX: 'hidden',
      // color: '#fff',
    },

    '|axf-panes-drag': {
      display: 'block',
      position: 'absolute',
      left: 'calc( 50% - 2px )',
      top: 0,
      bottom: 0,
      width: '4px',
      background: '#0001',
      '&:hover': {
        background: '#ddd',
      }
    },

    '&.dragable': {
      cursor: 'grabbing',
      '|axf-panes-drag': {
        background: '#aaa',
      },
    },

    '&:not(.dragable)': {
      '|axf-panes-drag': {
        cursor: 'ew-resize',
      },
    },

    '&.vertical': {

      '|axf-panes-proximate': {
        bottom: 'calc( 50% + 2px )',
        right: 0,
        // overflowY: 'hidden',
        // overflowX: 'auto',
      },

      '|axf-panes-adjacent': {
        // width: '100%',
        left: 0,
        top: 'calc( 50% + 2px )',
        // paddingTop: '2px',
        // overflowY: 'hidden',
        // overflowX: 'auto',
      },

      '|axf-panes-drag': {
        display: 'block',
        position: 'absolute',
        top: 'calc( 50% - 2px )',
        left: 0,
        right: 0,
        height: '4px',
        width: '100%',
        background: '#eee',
      },

      '&:not(.dragable)': {
        '|axf-panes-drag': {
          cursor: 'ns-resize',
        },
      },

    }

  }

} )
